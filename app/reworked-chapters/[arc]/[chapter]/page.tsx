import ChaptersComponent from "@/components/chapters/ChaptersComponent";

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
