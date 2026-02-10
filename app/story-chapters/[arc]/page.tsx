import ArcsComponent from "@/components/arcs/ArcsComponent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ arc: string }>;
}) {
  const { arc } = await params;
  return {
    title: `Road to Hero - Arc ${arc.split("-")[1]}`,
    description: "Arcs",
  };
}

async function Arcs({ params }: { params: Promise<{ arc: string }> }) {
  const { arc } = await params;
  return (
    <>
      <ArcsComponent
        type="story-chapters"
        arcNumber={Number(arc.split("-")[1])}
      />
    </>
  );
}

export default Arcs;
