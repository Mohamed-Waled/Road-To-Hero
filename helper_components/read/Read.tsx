"use client";

import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import { read_story_arcs } from "@/utils/types";

function Read({
  arcNumber,
  chapterNumber,
  partNumber,
  totalParts,
  totalChapters,
}: {
  arcNumber: number;
  chapterNumber?: number;
  partNumber?: number;
  totalParts?: number;
  totalChapters?: number;
}) {
  const [read, setRead] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let readStoryChapters: read_story_arcs[] = JSON.parse(
        localStorage.getItem("story-chapters") ?? "[]",
      );
      if (partNumber !== undefined) {
        readStoryChapters.forEach((arc) => {
          if (arc.arc === arcNumber) {
            arc.chapters.forEach((chapter) => {
              if (chapter.chapter === chapterNumber) {
                chapter.parts.forEach((part, index) => {
                  if (part.part === partNumber) {
                    setRead(true);
                  }
                });
              }
            });
          }
        });
      } else if (chapterNumber !== undefined && partNumber === undefined) {
        readStoryChapters.forEach((arc) => {
          if (arc.arc === arcNumber) {
            arc.chapters.forEach((chapter) => {
              if (
                chapter.chapter === chapterNumber &&
                chapter.parts.length === totalParts
              ) {
                setRead(true);
              }
            });
          }
        });
      } else if (chapterNumber === undefined && partNumber === undefined) {
        readStoryChapters.forEach((arc) => {
          if (arc.arc === arcNumber && arc.chapters.length === totalChapters) {
            setRead(true);
          }
        });
      }
    }
  }, []);

  return (
    <>
      {read && (
        <span>
          <FaCheckCircle className="text-xl text-discord" />
        </span>
      )}
    </>
  );
}

export default Read;
