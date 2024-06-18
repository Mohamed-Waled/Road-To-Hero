import { FaChartPie } from "react-icons/fa";
import Link from "next/link";

import { getArcs } from "@/lib/fetchers";
import { chapters } from "@/utils/types";
import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";

async function ArcsComponent({ arcNumber }: { arcNumber: number }) {
  const arcs = await getArcs();

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-start gap-6 p-6">
          {arcs[arcNumber - 1].chapters.map(
            (chapters: chapters, index: number) => {
              return (
                <Link
                  key={chapters.chapter}
                  href={
                    chapters.parts.length < 2
                      ? `/story-chapters/arc-${arcNumber}/chapter-${index + 1}/part-1`
                      : `/story-chapters/arc-${arcNumber}/chapter-${index + 1}`
                  }
                  className="flex h-36 w-full flex-col items-center justify-between rounded-lg bg-gray-700 p-4 text-gray-200 shadow-xl sm:w-[calc(50%-12px)] xl:w-[calc((100%/3)-16px)]"
                >
                  <h2 className="pt-2 text-center text-xl">
                    {chapters.parts[0].chapterName
                      ? `Chapter ${index + 1} - ${chapters.parts[0].chapterName}`
                      : `Chapter ${index + 1}`}
                  </h2>
                  <div className="flex w-full items-center justify-center p-1">
                    <FaChartPie className="mr-2 text-xl text-discord" />
                    <p>{`Parts: ${chapters.parts.length}`}</p>
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

export default ArcsComponent;
