import { FaChartPie } from "react-icons/fa";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getArcs } from "@/lib/fetchers";
import { chapters } from "@/utils/types";
import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";
import { getCurrentTimeStamp } from "@/utils/helperFunctions";

async function ArcsComponent({
  type,
  arcNumber,
}: {
  type: string;
  arcNumber: number;
}) {
  const arcs = await getArcs(type);

  if (
    typeof arcNumber !== "number" ||
    arcNumber > arcs.length ||
    arcNumber < 1 ||
    isNaN(arcNumber)
  ) {
    notFound();
  }

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
                      ? `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${index + 1}/part-1`
                      : `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${index + 1}`
                  }
                  className="relative flex h-36 w-full flex-col items-center justify-between rounded-lg bg-gray-700 p-4 text-gray-200 shadow-xl sm:w-[calc(50%-12px)] xl:w-[calc((100%/3)-16px)]"
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
                  {getCurrentTimeStamp() -
                    chapters.parts[chapters.parts.length - 1].createdAt <=
                    604800000 && (
                    <span className="absolute bottom-3 left-3 rounded-xl bg-discord/50 px-2 py-1 text-sm text-white">
                      New
                    </span>
                  )}
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
