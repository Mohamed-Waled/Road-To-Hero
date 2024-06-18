import PartsComponent from "@/components/parts/PartsComponent";

function Parts({
  params,
}: {
  params: { arc: string; chapter: string; part: string };
}) {
  return (
    <>
      <PartsComponent
        arcNumber={Number(params.arc.split("-")[1])}
        chapterNumber={Number(params.chapter.split("-")[1])}
        partNumber={Number(params.part.split("-")[1])}
      />
    </>
  );
}

export default Parts;
