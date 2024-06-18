import ChaptersComponent from "@/components/chapters/ChaptersComponent";

function Chapters({ params }: { params: { arc: string; chapter: string } }) {
  return (
    <>
      <ChaptersComponent
        arcNumber={Number(params.arc.split("-")[1])}
        chapterNumber={Number(params.chapter.split("-")[1])}
      />
    </>
  );
}

export default Chapters;
