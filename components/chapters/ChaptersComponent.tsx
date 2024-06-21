import { FaClock } from "react-icons/fa6";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getArcs } from "@/lib/fetchers";
import { parts } from "@/utils/types";
import {
  getCurrentTimeStamp,
  getTimeAndDate,
} from "@/utils/helperFunctions";
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

  if (
    typeof arcNumber !== "number" ||
    arcNumber > arcs.length ||
    arcNumber < 1 ||
    isNaN(arcNumber) ||
    typeof chapterNumber !== "number" ||
    chapterNumber > arcs[arcNumber - 1].chapters.length ||
    chapterNumber < 1 ||
    isNaN(chapterNumber)
  ) {
    notFound();
  }

  let chapterIndex: number = 0;

  for (let i = 0; i < arcs[arcNumber - 1].chapters.length; i++) {
    let chapterNumberCheck =
      arcs[arcNumber - 1].chapters[i].chapter.split(" ")[1] !== undefined
        ? arcs[arcNumber - 1].chapters[i].chapter.split(" ")[1]
        : arcs[arcNumber - 1].chapters[i].chapter[
            arcs[arcNumber - 1].chapters[i].chapter.length - 1
          ];

    if (chapterNumberCheck === chapterNumber.toString()) {
      chapterIndex = arcs[arcNumber - 1].chapters[i].chapterIndex;
      break;
    }
  }

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-start gap-6 p-6">
          {arcs[arcNumber - 1].chapters[chapterIndex].parts.map(
            (parts: parts, index: number) => {
              let partNumber =
                parts.part.split(" ")[1] !== undefined
                  ? parts.part.split(" ")[1]
                  : parts.part[parts.part.length - 1] !== undefined
                    ? ""
                    : index + 1;

              return (
                <Link
                  key={`${parts.chapterName} - ${index}`}
                  href={`/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${chapterNumber}/part-${partNumber}`}
                  className="relative flex h-36 w-full flex-col items-center justify-between rounded-lg bg-gray-700 p-4 text-gray-200 shadow-xl sm:w-[calc(50%-12px)] xl:w-[calc((100%/3)-16px)]"
                >
                  <h2 className="pt-2 text-center text-xl">
                    {parts.chapterName
                      ? `Part ${partNumber} - ${parts.chapterName}`
                      : `Part ${partNumber}`}
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
                      partNumber={index + 1}
                      type={type}
                    />
                  </span>
                </Link>
              );
            },
          )}
        </div>
      </div>
    </>
  );
}

export default ChaptersComponent;
