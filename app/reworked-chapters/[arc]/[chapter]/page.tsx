import ChaptersComponent from "@/components/chapters/ChaptersComponent";

export async function generateMetadata({
  params,
}: {
  params: { arc: string; chapter: string };
}) {
  return {
    title: `Road to Hero - Reworked Arc ${params.arc.split("-")[1]} - Chapter ${params.chapter.split("-")[1]}`,
    description: "Reworked Chapters",
  };
}

function ReworkedChapters({
  params,
}: {
  params: { arc: string; chapter: string };
}) {
  return (
    <>
      <ChaptersComponent
        type="reworked-story-chapters"
        arcNumber={Number(params.arc.split("-")[1])}
        chapterNumber={Number(params.chapter.split("-")[1])}
      />
    </>
  );
}

export default ReworkedChapters;
