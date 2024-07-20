import { arcs, chapters, part, parts } from "@/utils/types";
import { unstable_noStore } from "next/cache";

export async function fetchNovel(
  type: string,
  arcNumber?: number,
  chapterNumber?: number,
  partNumber?: number,
) {
  unstable_noStore();

  let queries;

  if (
    Number.isNaN(arcNumber) &&
    Number.isNaN(chapterNumber) &&
    Number.isNaN(partNumber)
  ) {
    queries = "";
  } else if (Number.isNaN(chapterNumber) && Number.isNaN(partNumber)) {
    queries = `?arc=${arcNumber}`;
  } else if (Number.isNaN(partNumber)) {
    queries = `?arc=${arcNumber}&chapter=${chapterNumber}`;
  } else {
    queries = `?arc=${arcNumber}&chapter=${chapterNumber}&part=${partNumber}`;
  }

  try {
    const response = await fetch(
      `https://road-to-hero-bot.onrender.com/${type}-modified${queries}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(response.statusText || "Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

export async function getArcsNumber(type: string): Promise<number> {
  const arcs = await fetchNovel(type);

  return arcs.length;
}

export async function getArcs(type: string): Promise<arcs[]> {
  const arcs = await fetchNovel(type);

  return arcs;
}

export async function getChapters(
  type: string,
  arc: number,
): Promise<chapters[]> {
  const chapters = await fetchNovel(type, arc);

  return chapters;
}

export async function getParts(
  type: string,
  arc: number,
  chapter: number,
): Promise<parts[]> {
  const parts = await fetchNovel(type, arc, chapter);

  return parts;
}

export async function getPart(
  type: string,
  arc: number,
  chapter: number,
  part: number,
): Promise<part> {
  const content = await fetchNovel(type, arc, chapter, part);

  return content;
}
