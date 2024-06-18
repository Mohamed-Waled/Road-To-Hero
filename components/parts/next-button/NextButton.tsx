"use client";

import {
  read_story_arcs,
  read_story_chapters,
  read_story_part,
  story_chapters,
} from "@/utils/types";
import Link from "next/link";

function NextButton({
  arcNumber,
  chapterNumber,
  partNumber,
  arcs,
  type = "story-chapters",
}: {
  arcNumber: number;
  chapterNumber: number;
  partNumber: number;
  arcs: story_chapters[];
  type: string;
}) {
  let storyType = type.split("-")[0];

  function addingToLocalStorage() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(`${storyType}-chapters`) === null) {
        let readStoryChapters: read_story_arcs[] = [];
        let chapters: read_story_chapters[] = [];
        let parts: read_story_part[] = [];

        parts.push({
          part: partNumber,
        });

        chapters.push({
          chapter: chapterNumber,
          parts: parts,
        });

        readStoryChapters.push({
          arc: arcNumber,
          chapters: chapters,
        });

        localStorage.setItem(
          `${type.split("-")[0]}-chapters`,
          JSON.stringify(readStoryChapters),
        );
      } else if (localStorage.getItem(`${storyType}-chapters`) !== null) {
        let readStoryChapters: read_story_arcs[] = JSON.parse(
          localStorage.getItem(`${storyType}-chapters`) ?? "",
        );

        // readStoryChapters.forEach((arc) => {
        //   if (arc.arc === arcNumber) {
        //     arc.chapters.forEach((chapter) => {
        //       if (chapter.chapter === chapterNumber) {
        //         chapter.parts.forEach((part) => {
        //           if (part.part === partNumber) {
        //             console.log("Already read");
        //             return;
        //           }
        //         });
        //       }
        //     });
        //   }
        // });

        // readStoryChapters.forEach((arc) => {
        //   if (arc.arc !== arcNumber) {
        //     readStoryChapters.push({
        //       arc: arcNumber,
        //       chapters: [
        //         {
        //           chapter: chapterNumber,
        //           parts: [{ part: partNumber }],
        //         },
        //       ],
        //     });
        //   } else if (arc.arc === arcNumber) {
        //     arc.chapters.forEach((chapter) => {
        //       if (chapter.chapter !== chapterNumber) {
        //         readStoryChapters[arcNumber - 1].chapters.push({
        //           chapter: chapterNumber,
        //           parts: [{ part: partNumber }],
        //         });
        //       } else if (chapter.chapter === chapterNumber) {
        //         chapter.parts.forEach((part) => {
        //           if (part.part !== partNumber) {
        //             readStoryChapters[arcNumber - 1].chapters[
        //               chapterNumber - 1
        //             ].parts.push({
        //               part: partNumber,
        //             });
        //           } else if (part.part === partNumber) {
        //             console.log("Already read");
        //             return;
        //           }
        //         });
        //       }
        //     });
        //   }
        // });

        for (let i = 0; i < readStoryChapters.length; i++) {
          if (readStoryChapters[i].arc === arcNumber) {
            for (let j = 0; j < readStoryChapters[i].chapters.length; j++) {
              if (readStoryChapters[i].chapters[j].chapter === chapterNumber) {
                for (
                  let k = 0;
                  k < readStoryChapters[i].chapters[j].parts.length;
                  k++
                ) {
                  if (
                    readStoryChapters[i].chapters[j].parts[k].part ===
                    partNumber
                  ) {
                    console.log("Already read");
                    // return;
                  } else if (
                    readStoryChapters[i].chapters[j].parts[k].part !==
                    partNumber
                  ) {
                    readStoryChapters[i].chapters[j].parts.push({
                      part: partNumber,
                    });
                    break;
                  }
                }
              } else if (
                readStoryChapters[i].chapters[j].chapter !== chapterNumber
              ) {
                readStoryChapters[i].chapters.push({
                  chapter: chapterNumber,
                  parts: [{ part: partNumber }],
                });
                break;
              } else if (readStoryChapters[i].arc !== arcNumber) {
                readStoryChapters.push({
                  arc: arcNumber,
                  chapters: [
                    {
                      chapter: chapterNumber,
                      parts: [{ part: partNumber }],
                    },
                  ],
                });
                break;
              }
            }
          }
        }

        // readStoryChapters.forEach((arc) => {
        //   if (arc.arc === arcNumber) {
        //     arc.chapters.forEach((chapter) => {
        //       if (chapter.chapter === chapterNumber) {
        //         chapter.parts.forEach((part) => {
        //           if (part.part === partNumber) {
        //             console.log("Already read");
        //             return;
        //           } else if (part.part !== partNumber) {
        //             readStoryChapters[arcNumber - 1].chapters[
        //               chapterNumber - 1
        //             ].parts.push({
        //               part: partNumber,
        //             });
        //           }
        //           return;
        //         });
        //       } else if (chapter.chapter !== chapterNumber) {
        //         readStoryChapters[arcNumber - 1].chapters.push({
        //           chapter: chapterNumber,
        //           parts: [{ part: partNumber }],
        //         });
        //       }
        //       return;
        //     });
        //   } else if (arc.arc !== arcNumber) {
        //     readStoryChapters.push({
        //       arc: arcNumber,
        //       chapters: [
        //         {
        //           chapter: chapterNumber,
        //           parts: [{ part: partNumber }],
        //         },
        //       ],
        //     });
        //   }
        //   return;
        // });

        localStorage.setItem(
          `${type.split("-")[0]}-chapters`,
          JSON.stringify(readStoryChapters),
        );
      }
    }
  }

  return (
    <>
      <Link
        onClick={() => {
          addingToLocalStorage();
        }}
        href={
          arcs.length === arcNumber &&
          arcs[arcs.length - 1].chapters.length === chapterNumber &&
          arcs[arcs.length - 1].chapters[
            arcs[arcs.length - 1].chapters.length - 1
          ].parts.length === partNumber
            ? `/after-the-end`
            : arcs[arcNumber - 1].chapters.length === chapterNumber &&
                arcs[arcNumber - 1].chapters[
                  arcs[arcNumber - 1].chapters.length - 1
                ].parts.length === partNumber
              ? `/${type.split("-")[0]}-chapters/arc-${arcNumber + 1}/chapter-1/part-1`
              : arcs[arcNumber - 1].chapters[chapterNumber - 1].parts.length ===
                  partNumber
                ? `/${type.split("-")[0]}-chapters/arc-${arcNumber}/chapter-${chapterNumber + 1}/part-1`
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
