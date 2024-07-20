"use client";

import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

import { updateReadChapters } from "@/utils/helperFunctions";
import { read_story_arcs } from "@/utils/types";

function NextButton({
  arcNumber,
  chapterNumber,
  partNumber,
  type = "story-chapters",
  href,
}: {
  arcNumber: number;
  chapterNumber: number;
  partNumber: number;
  type: string;
  href: string;
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

  return (
    <>
      <Link
        onClick={() => {
          addingToLocalStorage();
        }}
        href={href}
        className="group flex items-center justify-center gap-1 rounded-lg bg-gray-700 px-8 py-2 text-gray-200 shadow-lg"
      >
        Next
        <MdNavigateNext className="transition-all duration-300 group-hover:translate-x-1" />
      </Link>
    </>
  );
}

export default NextButton;
