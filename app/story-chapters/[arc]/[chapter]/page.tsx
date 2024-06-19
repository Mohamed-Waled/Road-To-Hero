import ChaptersComponent from "@/components/chapters/ChaptersComponent";

export async function generateMetadata({
  params,
}: {
  params: { arc: string; chapter: string };
}) {
  return {
    title: `Road to Hero - Arc ${params.arc.split("-")[1]} - Chapter ${
      params.chapter.split("-")[1]
    }`,
    description: "Chapters",
  };
}

function Chapters({ params }: { params: { arc: string; chapter: string } }) {
  return (
    <>
      <ChaptersComponent
        type="story-chapters"
        arcNumber={Number(params.arc.split("-")[1])}
        chapterNumber={Number(params.chapter.split("-")[1])}
      />
    </>
  );
}

export default Chapters;
