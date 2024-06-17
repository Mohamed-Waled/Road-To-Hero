async function HomeComponent() {
  const response = await fetch(
    "https://road-to-hero-bot.onrender.com/story-chapters",
  );
  const data = await response.json();

  console.log(data);

  return (
    <div className="text-gray-200">
      {data.map((chapter: any) => {
        return (
          <div
            key={
              chapter.chapterName
                ? chapter.chapterName
                : `${chapter.arc} ${chapter.chapter} ${chapter.part} ${chapter.chapterName}`
            }
            className=""
          >
            <div>
              {typeof chapter.content === "object"
                ? chapter.content.map((line: any) => {
                    return (
                      <div>
                        <br />
                        {line}
                      </div>
                    );
                  })
                : chapter.content}
            </div>
            <p>{chapter.author}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default HomeComponent;
