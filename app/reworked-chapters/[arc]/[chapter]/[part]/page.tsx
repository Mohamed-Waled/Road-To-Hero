import PartsComponent from "@/components/parts/PartsComponent";

export async function generateMetadata({
  params,
}: {
  params: { arc: string; chapter: string; part: string };
}) {
  return {
    title: `Road to Hero - Reworked Arc ${params.arc.split("-")[1]} - Chapter ${params.chapter.split("-")[1]} - Part ${params.part.split("-")[1]}`,
    description: "Parts",
  };
}

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
