import ArcsComponent from "@/components/arcs/ArcsComponent";

function Arcs({ params }: { params: { arc: string } }) {
  return (
    <>
      <ArcsComponent type="story-chapters" arcNumber={Number(params.arc.split("-")[1])} />
    </>
  );
}

export default Arcs;
