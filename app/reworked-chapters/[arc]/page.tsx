import ArcsComponent from "@/components/arcs/ArcsComponent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ arc: string }>;
}) {
  const { arc } = await params;
  return {
    title: `Road to Hero - Reworked Arc ${arc.split("-")[1]}`,
    description: "Reworked Arcs",
  };
}

async function ReworkedArcs({ params }: { params: Promise<{ arc: string }> }) {
  const { arc } = await params;
  return (
    <>
      <ArcsComponent
        type="reworked-story-chapters"
        arcNumber={Number(arc.split("-")[1])}
      />
    </>
  );
}

export default ReworkedArcs;
