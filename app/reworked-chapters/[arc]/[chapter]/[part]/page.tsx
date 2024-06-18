import PartsComponent from "@/components/parts/PartsComponent";

function ReworkedParts({
  params,
}: {
  params: { arc: string; chapter: string; part: string };
}) {
  return (
    <>
      <PartsComponent
        type="reworked-story-chapters"
        arcNumber={Number(params.arc.split("-")[1])}
        chapterNumber={Number(params.chapter.split("-")[1])}
        partNumber={Number(params.part.split("-")[1])}
      />
    </>
  );
}

export default ReworkedParts;
