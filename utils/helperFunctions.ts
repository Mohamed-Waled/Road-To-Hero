import { read_story_arcs } from "./types";

export function getTimeAndDate(timeStamp: number) {
  let dateObject = new Date(timeStamp);

  let year = dateObject.getFullYear();
  let month = dateObject.getMonth() + 1;
  let day = dateObject.getDate();
  // let hours = dateObject.getHours();
  // let minutes = dateObject.getMinutes();

  return `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year}`;
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getCurrentTimeStamp() {
  return Date.now();
}

export function capitalizeWordsRegex(text: string) {
  return text.replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
}

export function isFirst(
  arcNumber: number,
  chapterNumber: number,
  partNumber: number,
) {
  return arcNumber === 1 && chapterNumber === 1 && partNumber === 1;
}

export function isFirstAtArc(chapterNumber: number, partNumber: number) {
  return chapterNumber === 1 && partNumber === 1;
}

export function isFirstAtChapter(partNumber: number) {
  return partNumber === 1;
}

export function updateReadChapters(
  existingChapters: read_story_arcs[],
  arcNumber: number,
  chapterNumber: number,
  partNumber: number,
) {
  let arcFound = false;
  let chapterFound = false;

  for (let i = 0; i < existingChapters.length; i++) {
    const arc = existingChapters[i];
    if (arc.arc === arcNumber) {
      arcFound = true;
      for (let j = 0; j < arc.chapters.length; j++) {
        const chapter = arc.chapters[j];
        if (chapter.chapter === chapterNumber) {
          chapterFound = true;
          for (let k = 0; k < chapter.parts.length; k++) {
            if (chapter.parts[k].part === partNumber) {
              return;
            }
          }
          chapter.parts.push({ part: partNumber });
          break;
        }
      }
      if (!chapterFound) {
        arc.chapters.push({
          chapter: chapterNumber,
          parts: [{ part: partNumber }],
        });
      }
      break;
    }
  }

  if (!arcFound) {
    existingChapters.push({
      arc: arcNumber,
      chapters: [{ chapter: chapterNumber, parts: [{ part: partNumber }] }],
    });
  }
}
