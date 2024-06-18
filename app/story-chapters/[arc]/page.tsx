import ArcsComponent from "@/components/arcs/ArcsComponent";

function Arcs({ params }: { params: { arc: string } }) {
  return (
    <>
      <ArcsComponent arcNumber={Number(params.arc.split("-")[1])} />
    </>
  );
}

export default Arcs;
