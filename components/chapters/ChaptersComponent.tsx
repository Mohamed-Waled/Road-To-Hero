import { FaClock } from "react-icons/fa6";
import Link from "next/link";

import { getArcs } from "@/lib/fetchers";
import { parts } from "@/utils/types";
import { getTimeAndDate } from "@/utils/helperFunctions";
import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";

async function ChaptersComponent({
  arcNumber,
  chapterNumber,
}: {
  arcNumber: number;
  chapterNumber: number;
}) {
  const arcs = await getArcs();

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-start gap-6 p-6">
          {arcs[arcNumber - 1].chapters[chapterNumber - 1].parts.map(
            (parts: parts, index: number) => {
              return (
                <Link
                  key={parts.chapterName}
                  href={`/story-chapters/arc-${arcNumber}/chapter-${chapterNumber}/part-${index + 1}`}
                  className="flex h-36 w-full flex-col items-center justify-between rounded-lg bg-gray-700 p-4 text-gray-200 shadow-xl sm:w-[calc(50%-12px)] xl:w-[calc((100%/3)-16px)]"
                >
                  <h2 className="pt-2 text-center text-xl">
                    {parts.chapterName
                      ? `Part ${index + 1} - ${parts.chapterName}`
                      : `Part ${index + 1}`}
                  </h2>
                  <div className="flex w-full items-center justify-center">
                    <FaClock className="mr-2 text-lg text-discord" />
                    <p>{`Published at ${getTimeAndDate(parts.createdAt)}`}</p>
                  </div>
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
