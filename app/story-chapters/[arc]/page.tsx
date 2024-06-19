import ArcsComponent from "@/components/arcs/ArcsComponent";

export async function generateMetadata({
  params,
}: {
  params: { arc: string };
}) {
  return {
    title: `Road to Hero - Arc ${params.arc.split("-")[1]}`,
    description: "Arcs",
  };
}

function Arcs({ params }: { params: { arc: string } }) {
  return (
    <>
      <ArcsComponent
        type="story-chapters"
        arcNumber={Number(params.arc.split("-")[1])}
      />
    </>
  );
}

export default Arcs;
