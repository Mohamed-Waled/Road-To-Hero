import { FaClock } from "react-icons/fa6";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getArcs, getChapters, getParts } from "@/lib/fetchers";
import { parts } from "@/utils/types";
import { getCurrentTimeStamp, getTimeAndDate } from "@/utils/helperFunctions";
import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";
import Read from "@/helper_components/read/Read";

async function ChaptersComponent({
  type,
  arcNumber,
  chapterNumber,
}: {
  type: string;
  arcNumber: number;
  chapterNumber: number;
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

  const parts = await getParts(type, arcNumber, chapterNumber);

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-start gap-6 p-6">
          {parts.map((parts: parts) => {
            return (
              <Link
                key={`${parts.part} - ${parts.partIndex}`}
                href={`/${type.split("-")[0]}-chapters${parts.href}`}
                className="relative flex h-36 w-full flex-col items-center justify-between rounded-lg bg-gray-700 p-4 text-gray-200 shadow-xl sm:w-[calc(50%-12px)] xl:w-[calc((100%/3)-16px)]"
              >
                <h2 className="pt-2 text-center text-xl">
                  {parts.chapterName && parts.part
                    ? `${parts.part} - ${parts.chapterName}`
                    : parts.chapterName && !parts.part
                      ? `Part ${parts.partIndex + 1} - ${parts.chapterName}`
                      : !parts.chapterName && parts.part
                        ? parts.part
                        : !parts.chapterName && !parts.part
                          ? `Part ${parts.partIndex + 1}`
                          : ""}
                </h2>
                <div className="flex w-full items-center justify-center">
                  <FaClock className="mr-2 text-lg text-discord" />
                  <p>{`Published at ${getTimeAndDate(parts.createdAt)}`}</p>
                </div>
                {getCurrentTimeStamp() - parts.createdAt <= 604800000 && (
                  <span className="absolute left-3 top-[44%] rounded-xl bg-discord/50 px-2 py-1 text-sm text-white">
                    New
                  </span>
                )}
                <span className="absolute right-[1rem] top-[44%] rounded-xl">
                  <Read
                    arcNumber={arcNumber}
                    chapterNumber={chapterNumber}
                    partNumber={
                      parts.part.split(" ")[1] !== undefined
                        ? Number(parts.part.split(" ")[1])
                        : parts.partIndex + 1
                    }
                    type={type}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ChaptersComponent;
