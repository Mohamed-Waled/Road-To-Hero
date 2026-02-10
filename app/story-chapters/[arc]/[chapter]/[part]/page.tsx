import PartsComponent from "@/components/parts/PartsComponent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ arc: string; chapter: string; part: string }>;
}) {
  const { arc, chapter, part } = await params;
  return {
    title: `Road to Hero - Arc ${arc.split("-")[1]} - Chapter ${
      chapter.split("-")[1]
    } - Part ${part.split("-")[1]}`,
    description: "Parts",
  };
}

async function Parts({
  params,
}: {
  params: Promise<{ arc: string; chapter: string; part: string }>;
}) {
  const { arc, chapter, part } = await params;
  return (
    <>
      <PartsComponent
        type="story-chapters"
        arcNumber={Number(arc.split("-")[1])}
        chapterNumber={Number(chapter.split("-")[1])}
        partNumber={Number(part.split("-")[1])}
      />
    </>
  );
}

export default Parts;
