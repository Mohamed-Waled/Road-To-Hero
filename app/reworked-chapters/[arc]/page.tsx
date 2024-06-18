import ArcsComponent from "@/components/arcs/ArcsComponent";

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
