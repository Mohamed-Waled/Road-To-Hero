import MemesComponent from "@/components/memes/MemesComponent";
import beforeMeme from "@/public/memes/before-meme.jpeg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road to Hero - Before The Start",
  description: "Before The Start",
};

function BeforeMeme() {
  return (
    <>
      <MemesComponent
        image={beforeMeme}
        alt="A famous Egyptian character Mohamed Henedy with a disgusted face"
        content={
          <>
            <p>What more?!</p>
            <p>Want the sperm that birthed the novel?!</p>
          </>
        }
      />
    </>
  );
}

export default BeforeMeme;
