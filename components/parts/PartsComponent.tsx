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
    partNumber > arcs[arcNumber - 1].chapters[chapterIndex].parts.length ||
    partNumber < 1 ||
    isNaN(partNumber)
  ) {
    notFound();
  }

  // let lastChapterAtArcNumber =
  //   arcs[arcNumber - 2].chapters[
  //     arcs[arcNumber - 2].chapters.length - 1
  //   ].chapter.split(" ")[1] !== undefined
  //     ? arcs[arcNumber - 2].chapters[
  //         arcs[arcNumber - 2].chapters.length - 1
  //       ].chapter.split(" ")[1]
  //     : arcs[arcNumber - 2].chapters[arcs[arcNumber - 2].chapters.length - 1]
  //         .chapter[
  //         arcs[arcNumber - 2].chapters[arcs[arcNumber - 2].chapters.length - 1]
  //           .chapter.length - 1
  //       ];

  // let lastChapterNumber =
  //   arcs[arcNumber - 1].chapters[chapterIndex - 1].chapter.split(" ")[1] !==
  //   undefined
  //     ? arcs[arcNumber - 1].chapters[chapterIndex - 1].chapter.split(" ")[1]
  //     : arcs[arcNumber - 1].chapters[chapterIndex - 1].chapter[
  //         arcs[arcNumber - 1].chapters[chapterIndex - 1].chapter.length - 1
  //       ];

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="px-4 py-6">
          <h1 className="text-2xl text-gray-200">
            {arcs[arcNumber - 1].chapters[chapterIndex].parts[partNumber - 1]
              .chapterName
              ? arcs[arcNumber - 1].chapters[chapterIndex].parts[partNumber - 1]
                  .chapterName
              : `Chapter ${chapterNumber} - Part ${partNumber}`}
          </h1>
          <div className="mt-6 px-4 py-0 text-gray-200">
            {typeof arcs[arcNumber - 1].chapters[chapterIndex].parts[
              partNumber - 1
            ].content === "string"
              ? arcs[arcNumber - 1].chapters[chapterIndex].parts[
                  partNumber - 1
                ].content
                  .split(" ,")
                  .map((lines: string, index: number) => {
                    return (
                      <p
                        key={`${lines} - ${index}`}
                        className="mt-5 leading-6 tracking-wide lg:text-lg"
                      >
                        {lines}
                      </p>
                    );
                  })
              : arcs[arcNumber - 1].chapters[chapterIndex].parts[
                  partNumber - 1
                ].content
                  .flat()
                  .map((lines: string, index: number) => {
                    return (
                      <p
                        key={`${lines} - ${index}`}
                        className="mt-5 leading-6 tracking-wide lg:text-lg"
                      >
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
                    ? `/${type.split("-")[0]}-chapters/arc-${arcNumber - 1}/chapter-${
                        arcs[arcNumber - 2].chapters[
                          arcs[arcNumber - 2].chapters.length - 1
                        ].chapter.split(" ")[1] !== undefined
                          ? arcs[arcNumber - 2].chapters[
                              arcs[arcNumber - 2].chapters.length - 1
                            ].chapter.split(" ")[1]
                          : arcs[arcNumber - 2].chapters[
                              arcs[arcNumber - 2].chapters.length - 1
                            ].chapter[
                              arcs[arcNumber - 2].chapters[
                                arcs[arcNumber - 2].chapters.length - 1
                              ].chapter.length - 1
                            ]
                      }/part-${arcs[arcNumber - 2].chapters[arcs[arcNumber - 2].chapters.length - 1].parts.length}`
                    : isFirstAtChapter(partNumber)
                      ? `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${
                          arcs[arcNumber - 1].chapters[
                            chapterIndex - 1
                          ].chapter.split(" ")[1] !== undefined
                            ? arcs[arcNumber - 1].chapters[
                                chapterIndex - 1
                              ].chapter.split(" ")[1]
                            : arcs[arcNumber - 1].chapters[chapterIndex - 1]
                                .chapter[
                                arcs[arcNumber - 1].chapters[chapterIndex - 1]
                                  .chapter.length - 1
                              ]
                        }/part-${arcs[arcNumber - 1].chapters[chapterIndex - 1].parts.length}`
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
              chapterIndex={chapterIndex}
            />
          </div>
          <div className="mt-6 rounded-lg bg-gray-700 p-4 text-gray-300 shadow-lg">
            <p>
              Written by:{" "}
              <span className="text-lg text-white">
                {
                  arcs[arcNumber - 1].chapters[chapterIndex].parts[
                    partNumber - 1
                  ].author
                }
              </span>
            </p>
            <p>
              Published at:{" "}
              <span className="text-lg text-white">
                {getTimeAndDate(
                  arcs[arcNumber - 1].chapters[chapterIndex].parts[
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
