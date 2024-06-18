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


