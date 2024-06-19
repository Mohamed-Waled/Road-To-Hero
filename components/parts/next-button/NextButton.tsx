"use client";

import { updateReadChapters } from "@/utils/helperFunctions";
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
  function addingToLocalStorage() {
    let storyType = type.split("-")[0];

    if (typeof window !== "undefined") {
      let readStoryChapters: read_story_arcs[] = JSON.parse(
        localStorage.getItem(`${storyType}-chapters`) ?? "[]",
      );

      // if (localStorage.getItem(`${storyType}-chapters`) === null) {
      //   let readStoryChapters: read_story_arcs[] = [];
      //   let chapters: read_story_chapters[] = [];
      //   let parts: read_story_part[] = [];

      //   parts.push({
      //     part: partNumber,
      //   });

      //   chapters.push({
      //     chapter: chapterNumber,
      //     parts: parts,
      //   });

      //   readStoryChapters.push({
      //     arc: arcNumber,
      //     chapters: chapters,
      //   });

      //   localStorage.setItem(
      //     `${type.split("-")[0]}-chapters`,
      //     JSON.stringify(readStoryChapters),
      //   );
      // } else if (localStorage.getItem(`${storyType}-chapters`) !== null) {
      //   let arcFound = false;
      //   let chapterFound = false;
      //   let partFound = false;

      //   for (const arc of readStoryChapters) {
      //     if (arc.hasOwnProperty("arc") && arc.arc === arcNumber) {
      //       arcFound = true;
      //       for (const chapter of arc.chapters) {
      //         if (
      //           chapter.hasOwnProperty("chapter") &&
      //           chapter.chapter === chapterNumber
      //         ) {
      //           chapterFound = true;
      //           for (const part of chapter.parts) {
      //             if (part.hasOwnProperty("part") && part.part === partNumber) {
      //               partFound = true;
      //               console.log("Already read");
      //             } else {
      //               partFound = false;
      //             }
      //           }
      //         } else {
      //           chapterFound = false;
      //         }
      //       }
      //     } else {
      //       arcFound = false;
      //     }
      //   }

      //   if (arcFound && chapterFound && partFound) {
      //     console.log("Already read");
      //     return;
      //   }

      //   if (!arcFound) {
      //     let chapters: read_story_chapters[] = [];
      //     let parts: read_story_part[] = [];
      //     parts.push({
      //       part: partNumber,
      //     });
      //     chapters.push({
      //       chapter: chapterNumber,
      //       parts: parts,
      //     });
      //     readStoryChapters.push({
      //       arc: arcNumber,
      //       chapters: chapters,
      //     });
      //   } else {
      //     if (!chapterFound) {
      //       let parts: read_story_part[] = [];
      //       parts.push({
      //         part: partNumber,
      //       });
      //       readStoryChapters[arcNumber - 1].chapters.push({
      //         chapter: chapterNumber,
      //         parts: parts,
      //       });
      //     } else {
      //       if (!partFound) {
      //         readStoryChapters[arcNumber - 1].chapters[
      //           chapterNumber - 1
      //         ].parts.push({
      //           part: partNumber,
      //         });
      //       } else {
      //         console.log("Already read");
      //       }
      //     }
      //   }

      //   localStorage.setItem(
      //     `${type.split("-")[0]}-chapters`,
      //     JSON.stringify(readStoryChapters),
      //   );
      // }

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
