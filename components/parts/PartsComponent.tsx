import { notFound } from "next/navigation";
import Link from "next/link";
import { MdNavigateBefore } from "react-icons/md";

import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";
import { getTimeAndDate } from "@/utils/helperFunctions";
import { getArcs, getChapters, getPart } from "@/lib/fetchers";
import NextButton from "./next-button/NextButton";

async function PartsComponent({
  type,
  arcNumber,
  chapterNumber,
  partNumber,
}: {
  type: string;
  arcNumber: number;
  chapterNumber: number;
  partNumber: number;
}) {
  const arcs = await getArcs(type);

  const isArc = arcs.find((arc) => Number(arc.arc.split(" ")[1]) === arcNumber);

  if (!isArc) {
    notFound();
  }

  const chapters = await getChapters(type, arcNumber);

  const isChapter = chapters.find(
    (chapter) => Number(chapter.chapter.split(" ")[1]) === chapterNumber,
  );

  if (!isChapter) {
    notFound();
  }

  const part = await getPart(type, arcNumber, chapterNumber, partNumber);

  if (Object.keys(part).length === 0) {
    notFound();
  }

  const isPart = Number(part.part.split(" ")[1]) === partNumber;

  if (!isPart) {
    notFound();
  }

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="px-4 py-6">
          <h1 className="text-2xl text-gray-200">
            {part.chapterName
              ? part.chapterName
              : `Chapter ${chapterNumber} - ${part.part}`}
          </h1>
          <div className="mt-6 px-4 py-0 text-gray-200">
            {typeof part.content === "string"
              ? part.content.split(" ,").map((line: string, index: number) => {
                  return (
                    <p
                      key={`${line} - ${index}`}
                      className="mt-5 leading-6 tracking-wide lg:text-lg"
                    >
                      {line}
                    </p>
                  );
                })
              : part.content.flat().map((line: string, index: number) => {
                  let spacing: boolean = true;
                  if (typeof part.content !== "string" && index > 0) {
                    if (part.content.flat()[index - 1] === "") {
                      spacing = false;
                    }
                  }
                  return (
                    <>
                      {line ? (
                        <p
                          key={`${line} - ${index}`}
                          className={`${spacing ? "mt-5" : "mt-2"} leading-6 tracking-wide lg:text-lg`}
                        >
                          {line}
                        </p>
                      ) : (
                        <br key={`${line} - ${index}`} />
                      )}
                    </>
                  );
                })}
          </div>
          <div className="mt-4 flex items-center justify-between p-2">
            <Link
              href={
                part.isFirst
                  ? `${part.backHref}`
                  : `/${type.split("-")[0]}-chapters${part.backHref}`
              }
              className="group flex items-center justify-center gap-1 rounded-lg bg-gray-700 px-8 py-2 text-gray-200 shadow-lg"
            >
              <MdNavigateBefore className="transition-all duration-300 group-hover:-translate-x-1" />
              Back
            </Link>
            <NextButton
              arcNumber={arcNumber}
              chapterNumber={chapterNumber}
              partNumber={partNumber}
              type={type}
              href={
                part.isLast
                  ? `${part.nextHref}`
                  : `/${type.split("-")[0]}-chapters${part.nextHref}`
              }
            />
          </div>
          <div className="mt-6 rounded-lg bg-gray-700 p-4 text-gray-300 shadow-lg">
            <p>
              Written by:{" "}
              <span className="text-lg text-white">{part.author}</span>
            </p>
            <p>
              Published at:{" "}
              <span className="text-lg text-white">
                {getTimeAndDate(part.createdAt)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartsComponent;
