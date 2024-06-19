import StoryChaptersComponents from "@/components/story-chapters/StoryChaptersComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road to Hero - Story Chapters",
  description: "Story Chapters",
};

function StoryChapters() {
  return (
    <>
      <StoryChaptersComponents type="story-chapters" />
    </>
  );
}

export default StoryChapters;
