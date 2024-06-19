import { unstable_noStore } from "next/cache";

export async function fetchNovel(type: string) {
  unstable_noStore();
  try {
    const response = await fetch(
      `https://road-to-hero-bot.onrender.com/${type}-modified`,
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

export async function getArcsNumber(type: string) {
  const arcs = await fetchNovel(type);

  return arcs.length;
}

export async function getArcs(type: string) {
  const arcs = await fetchNovel(type);

  return arcs;
}

export async function getChaptersNumber(type: string, arc: number) {
  const chapters = await fetchNovel(type);

  return chapters[arc].chapters.length;
}
