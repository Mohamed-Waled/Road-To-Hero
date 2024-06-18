import Link from "next/link";

import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";
import { getTimeAndDate } from "@/utils/helperFunctions";
import { getArcs } from "@/lib/fetchers";
import { patchFetch } from "next/dist/server/app-render/entry-base";

async function PartsComponent({
  arcNumber,
  chapterNumber,
  partNumber,
}: {
  arcNumber: number;
  chapterNumber: number;
  partNumber: number;
}) {
  const arcs = await getArcs();

  const chapter = parseInt(
    arcs[arcNumber - 1].chapters[0].chapter.match(/(\d+)/)[0],
  );
  console.log(chapter);

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
                  .map((lines: string) => {
                    return (
                      <p key={lines} className="mb-2">
                        {lines}
                      </p>
                    );
                  })
              : arcs[arcNumber - 1].chapters[chapterNumber - 1].parts[
                  partNumber - 1
                ].content.map((lines: string) => {
                  return (
                    <p key={lines} className="mb-2">
                      {lines}
                    </p>
                  );
                })}
          </div>
          <div className="mt-4 flex items-center justify-between p-2">
            <Link
              href={
                parseInt(
                  arcs[arcNumber - 1].chapters[0].chapter.match(/(\d+)/)[0],
                ) === chapterNumber
                  ? `/story-chapters/arc-${arcNumber - 1}/chapter-${arcs[arcNumber - 2].chapters.length}/part-${arcs[arcNumber - 2].chapters[arcs[arcNumber - 2].chapters.length - 1].parts.length}`
                  : ``
              }
              className="rounded-lg bg-gray-700 px-8 py-2 text-gray-200 shadow-lg"
            >
              Previous
            </Link>
            <Link
              href={
                arcs[arcNumber - 1].chapters.length === chapterNumber &&
                arcs[arcNumber - 1].chapters[chapterNumber - 1].parts.length ===
                  partNumber
                  ? `/story-chapters/arc-${arcNumber + 1}/chapter-1/part-1`
                  : arcs[arcNumber - 1].chapters[chapterNumber - 1].parts
                        .length === partNumber
                    ? `/story-chapters/arc-${arcNumber}/chapter-${chapterNumber + 1}/part-1`
                    : `/story-chapters/arc-${arcNumber}/chapter-${chapterNumber}/part-${partNumber + 1}`
              }
              className="rounded-lg bg-gray-700 px-8 py-2 text-gray-200 shadow-lg"
            >
              Next
            </Link>
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
