"use client";

import { updateReadChapters } from "@/utils/helperFunctions";
import { read_story_arcs, story_chapters } from "@/utils/types";
import Link from "next/link";

function NextButton({
  arcNumber,
  chapterNumber,
  partNumber,
  arcs,
  type = "story-chapters",
  chapterIndex,
}: {
  arcNumber: number;
  chapterNumber: number;
  partNumber: number;
  arcs: story_chapters[];
  type: string;
  chapterIndex: number;
}) {
  function addingToLocalStorage() {
    let storyType = type.split("-")[0];

    if (typeof window !== "undefined") {
      let readStoryChapters: read_story_arcs[] = JSON.parse(
        localStorage.getItem(`${storyType}-chapters`) ?? "[]",
      );

      updateReadChapters(
        readStoryChapters,
        arcNumber,
        chapterNumber,
        partNumber,
      );
      localStorage.setItem(
        `${storyType}-chapters`,
        JSON.stringify(readStoryChapters),
      );
    }
  }

  // let nextChapterNumber =
  //   arcs[arcNumber - 1].chapters[chapterIndex + 1].chapter.split(" ")[1] !==
  //   undefined
  //     ? arcs[arcNumber - 1].chapters[chapterIndex + 1].chapter.split(" ")[1]
  //     : arcs[arcNumber - 1].chapters[chapterIndex + 1].chapter[
  //         arcs[arcNumber - 1].chapters[chapterIndex + 1].chapter.length - 1
  //       ];

  return (
    <>
      <Link
        onClick={() => {
          addingToLocalStorage();
        }}
        href={
          arcs.length === arcNumber &&
          arcs[arcs.length - 1].chapters.length === chapterIndex + 1 &&
          arcs[arcs.length - 1].chapters[
            arcs[arcs.length - 1].chapters.length - 1
          ].parts.length === partNumber
            ? `/after-the-end`
            : arcs[arcNumber - 1].chapters.length === chapterIndex + 1 &&
                arcs[arcNumber - 1].chapters[
                  arcs[arcNumber - 1].chapters.length - 1
                ].parts.length === partNumber
              ? `/${type.split("-")[0]}-chapters/arc-${arcNumber + 1}/chapter-1/part-1`
              : arcs[arcNumber - 1].chapters[chapterIndex].parts.length ===
                  partNumber
                ? `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${
                    arcs[arcNumber - 1].chapters[
                      chapterIndex + 1
                    ].chapter.split(" ")[1] !== undefined
                      ? arcs[arcNumber - 1].chapters[
                          chapterIndex + 1
                        ].chapter.split(" ")[1]
                      : arcs[arcNumber - 1].chapters[chapterIndex + 1].chapter[
                          arcs[arcNumber - 1].chapters[chapterIndex + 1].chapter
                            .length - 1
                        ]
                  }/part-1`
                : `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${chapterNumber}/part-${partNumber + 1}`
        }
        className="rounded-lg bg-gray-700 px-8 py-2 text-gray-200 shadow-lg"
      >
        Next
      </Link>
    </>
  );
}

export default NextButton;
