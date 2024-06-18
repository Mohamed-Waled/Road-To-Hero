import MemesComponent from "@/components/memes/MemesComponent";
import afterMeme from "@/public/memes/after-meme.png";

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
