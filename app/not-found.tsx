import type { Metadata } from "next";
import gojo from "@/public/images/gojo.jpeg";
import MemesComponent from "@/components/memes/MemesComponent";

export const metadata: Metadata = {
  title: "Road to Hero - 404",
};

function notFound() {
  return (
    <>
      <MemesComponent
        image={gojo}
        alt={"The body of died Gojo Saturo as an error image"}
        content={
          <>
            <p>404! Sorry we couldn't find this page.</p>
            <p>Make sure that the URL is correct</p>
          </>
        }
      />
    </>
  );
}

export default notFound;
