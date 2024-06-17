"use client";

import { useEffect } from "react";

import { manipulateData } from "@/utils/helperFunctions";

function LocalStorage() {
  useEffect(() => {
    async function fetchChapters() {
      const response = await fetch(
        "https://road-to-hero-bot.onrender.com/story-chapters-modified",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch chapters");
      }

      const chapters = await response.json();

      if (typeof window !== "undefined") {
        localStorage.setItem("story-chapters", JSON.stringify(chapters));

        const manipulatedData = manipulateData(chapters);

        if (manipulatedData) {
          localStorage.setItem(
            "story-chapters-modified",
            JSON.stringify(manipulatedData),
          );
        }

        // comparison
      }
    }

    fetchChapters();
  }, []);

  return <></>;
}

export default LocalStorage;
