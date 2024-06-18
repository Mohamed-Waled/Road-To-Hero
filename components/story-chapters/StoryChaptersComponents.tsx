import { IoBook } from "react-icons/io5";
import Link from "next/link";

import { getArcs } from "@/lib/fetchers";
import { story_chapters } from "@/utils/types";
import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";

async function StoryChaptersComponents() {
  const arcs = await getArcs();

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-start gap-6 p-6">
          {arcs.map((arc: story_chapters, index: number) => {
            return (
              <Link
                key={arc.arc}
                href={`/story-chapters/arc-${index + 1}`}
                className="flex h-36 w-full flex-col items-center justify-between rounded-lg bg-gray-700 p-4 text-gray-200 shadow-xl sm:w-[calc(50%-12px)] xl:w-[calc((100%/3)-16px)]"
              >
                <h2 className="p-7 text-2xl">{arc.arc}</h2>
                <div className="flex w-full items-center justify-center p-1">
                  <IoBook className="mr-2 text-xl text-discord" />
                  <p>{`Chapters: ${arc.chapters.length}`}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StoryChaptersComponents;
