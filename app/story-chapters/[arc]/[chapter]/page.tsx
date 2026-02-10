import ChaptersComponent from "@/components/chapters/ChaptersComponent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ arc: string; chapter: string }>;
}) {
  const { arc, chapter } = await params;
  return {
    title: `Road to Hero - Arc ${arc.split("-")[1]} - Chapter ${
      chapter.split("-")[1]
    }`,
    description: "Chapters",
  };
}

async function Chapters({ params }: { params: Promise<{ arc: string; chapter: string }> }) {
  const { arc, chapter } = await params;
  return (
    <>
      <ChaptersComponent
        type="story-chapters"
        arcNumber={Number(arc.split("-")[1])}
        chapterNumber={Number(chapter.split("-")[1])}
      />
    </>
  );
}

export default Chapters;
