import ChaptersComponent from "@/components/chapters/ChaptersComponent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ arc: string; chapter: string }>;
}) {
  const { arc, chapter } = await params;
  return {
    title: `Road to Hero - Reworked Arc ${arc.split("-")[1]} - Chapter ${chapter.split("-")[1]}`,
    description: "Reworked Chapters",
  };
}

async function ReworkedChapters({
  params,
}: {
  params: Promise<{ arc: string; chapter: string }>;
}) {
  const { arc, chapter } = await params;
  return (
    <>
      <ChaptersComponent
        type="reworked-story-chapters"
        arcNumber={Number(arc.split("-")[1])}
        chapterNumber={Number(chapter.split("-")[1])}
      />
    </>
  );
}

export default ReworkedChapters;
