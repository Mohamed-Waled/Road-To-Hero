import StoryChaptersComponents from "@/components/story-chapters/StoryChaptersComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road to Hero - Reworked Chapters",
  description: "Reworked Chapters",
};

function ReworkedChapters() {
  return (
    <>
      <StoryChaptersComponents type="reworked-story-chapters" />
    </>
  );
}

export default ReworkedChapters;
