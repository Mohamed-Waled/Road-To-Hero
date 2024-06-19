import { notFound } from "next/navigation";
import Link from "next/link";

import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";
import {
  getTimeAndDate,
  isFirst,
  isFirstAtArc,
  isFirstAtChapter,
} from "@/utils/helperFunctions";
import { getArcs } from "@/lib/fetchers";
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

  if (
    typeof arcNumber !== "number" ||
    arcNumber > arcs.length ||
    arcNumber < 1 ||
    isNaN(arcNumber) ||
    typeof chapterNumber !== "number" ||
    chapterNumber > arcs[arcNumber - 1].chapters.length ||
    chapterNumber < 1 ||
    isNaN(chapterNumber) ||
    typeof partNumber !== "number" ||
    partNumber > arcs[arcNumber - 1].chapters[chapterNumber - 1].parts.length ||
    partNumber < 1 ||
    isNaN(partNumber)
  ) {
    notFound();
  }

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="px-4 py-6">
          <h1 className="text-2xl text-gray-200">
            {arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
              partNumber - 1
            ].chapterName
              ? arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
                  partNumber - 1
                ].chapterName
              : `Chapter ${chapterNumber} - Part ${partNumber}`}
          </h1>
          <div className="mt-6 px-4 py-0 text-gray-200">
            {typeof arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
              partNumber - 1
            ].content === "string"
              ? arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
                  partNumber - 1
                ].content
                  .split(" ,")
                  .map((lines: string, index: number) => {
                    return (
                      <p key={`${lines} - ${index}`} className="mb-2">
                        {lines}
                      </p>
                    );
                  })
              : arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
                  partNumber - 1
                ].content
                  .flat()
                  .map((lines: string, index: number) => {
                    return (
                      <p key={`${lines} - ${index}`} className="mb-2">
                        {lines}
                      </p>
                    );
                  })}
          </div>
          <div className="mt-4 flex items-center justify-between p-2">
            <Link
              href={
                isFirst(arcNumber, chapterNumber, partNumber)
                  ? `/before-the-start`
                  : isFirstAtArc(chapterNumber, partNumber)
                    ? `/${type.split("-")[0]}-chapters/arc-${arcNumber - 1}/chapter-${arcs[arcNumber - 2].chapters.length}/part-${arcs[arcNumber - 2].chapters[arcs[arcNumber - 2].chapters.length - 1].parts.length}`
                    : isFirstAtChapter(partNumber)
                      ? `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${chapterNumber - 1}/part-${arcs[arcNumber - 1].chapters[chapterNumber - 2].parts.length}`
                      : `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${chapterNumber}/part-${partNumber - 1}`
              }
              className="rounded-lg bg-gray-700 px-8 py-2 text-gray-200 shadow-lg"
            >
              Back
            </Link>
            <NextButton
              arcNumber={arcNumber}
              chapterNumber={chapterNumber}
              partNumber={partNumber}
              arcs={arcs}
              type={type}
            />
          </div>
          <div className="mt-6 rounded-lg bg-gray-700 p-4 text-gray-300 shadow-lg">
            <p>
              Written by:{" "}
              <span className="text-lg text-white">
                {
                  arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
                    partNumber - 1
                  ].author
                }
              </span>
            </p>
            <p>
              Published at:{" "}
              <span className="text-lg text-white">
                {getTimeAndDate(
                  arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
                    partNumber - 1
                  ].createdAt,
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartsComponent;
