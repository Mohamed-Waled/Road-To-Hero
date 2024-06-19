import ArcsComponent from "@/components/arcs/ArcsComponent";

export async function generateMetadata({
  params,
}: {
  params: { arc: string };
}) {
  return {
    title: `Road to Hero - Reworked Arc ${params.arc.split("-")[1]}`,
    description: "Reworked Arcs",
  };
}

function ReworkedArcs({ params }: { params: { arc: string } }) {
  return (
    <>
      <ArcsComponent
        type="reworked-story-chapters"
        arcNumber={Number(params.arc.split("-")[1])}
      />
    </>
  );
}

export default ReworkedArcs;
