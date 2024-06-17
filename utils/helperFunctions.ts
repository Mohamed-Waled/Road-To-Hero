import {
  chapters,
  parts,
  story_chapters,
  story_chapters_modified,
} from "./types";

export function manipulateData(storyChapters: story_chapters[]): any {
  let story_chapters_modified: story_chapters_modified[] = [];

  let chapters: chapters[] = [];

  console.log(storyChapters);

  storyChapters.forEach((arc) => {
    arc.chapters.forEach((chapter) => {
      let parts: parts[] = [];

      chapter.parts.forEach((part) => {
        parts.push({
          part: part.part,
          chapterName: part.chapterName,
          content: part.content,
          author: part.author,
          authorName: part.authorName,
          createdAt: part.createdAt,
          read: false,
        });
      });

      chapters.push({
        chapter: chapter.chapter,
        parts: parts,
      });
    });
    story_chapters_modified.push({
      arc: arc.arc,
      chapters: chapters,
    });
  });

  return story_chapters_modified;
}
