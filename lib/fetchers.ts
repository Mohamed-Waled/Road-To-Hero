import { story_chapters } from "@/utils/types";

export async function fetchNovel() {
  try {
    const response = await fetch(
      "https://road-to-hero-bot.onrender.com/story-chapters-modified",
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

export async function getArcsNumber() {
  const arcs = await fetchNovel();

  return arcs.length;
}

export async function getArcs() {
  const arcs = await fetchNovel();

  return arcs;
}

export async function getChaptersNumber(arc: number) {
  const chapters = await fetchNovel();

  return chapters[arc].chapters.length;
}
