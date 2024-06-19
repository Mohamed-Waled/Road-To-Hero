import MemesComponent from "@/components/memes/MemesComponent";
import afterMeme from "@/public/memes/after-meme.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road to Hero - After The End",
  description: "After The End",
};

function AfterMeme() {
  return (
    <>
      <MemesComponent
        image={afterMeme}
        alt="A famous Egyptian character Mohamed Henedy Holding a paper and writting"
        content={
          <>
            <p>لازم امخمخ علشان اطلعلكم شغل نضيف</p>
            <p>يتم الكتابة</p>
          </>
        }
      />
    </>
  );
}

export default AfterMeme;
