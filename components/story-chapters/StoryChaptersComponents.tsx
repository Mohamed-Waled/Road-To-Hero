import { IoBook } from "react-icons/io5";
import Link from "next/link";

import { getArcs } from "@/lib/fetchers";
import { arcs } from "@/utils/types";
import { getCurrentTimeStamp } from "@/utils/helperFunctions";
import BreadCrumb from "@/helper_components/bread-crumb/BreadCrumb";
import Read from "@/helper_components/read/Read";

async function StoryChaptersComponents({ type }: { type: string }) {
  const arcs = await getArcs(type);

  return (
    <>
      <BreadCrumb />
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-start gap-6 p-6">
          {arcs.map((arc: arcs) => {
            return (
              <Link
                key={`${arc.arc} - ${arc.arcIndex}`}
                href={`/${type.split("-")[0]}-chapters${arc.href}`}
                className="relative flex h-36 w-full flex-col items-center justify-between rounded-lg bg-gray-700 p-4 text-gray-200 shadow-xl sm:w-[calc(50%-12px)] xl:w-[calc((100%/3)-16px)]"
              >
                <h2 className="p-7 text-2xl">{arc.arc}</h2>
                <div className="flex w-full items-center justify-center p-1">
                  <IoBook className="mr-2 text-xl text-discord" />
                  <p>{`Chapters: ${arc.numberOfChapters}`}</p>
                </div>
                {getCurrentTimeStamp() - arc.createdAt <= 604800000 && (
                  <span className="absolute bottom-3 left-3 rounded-xl bg-discord/50 px-2 py-1 text-sm text-white">
                    New
                  </span>
                )}
                <span className="absolute right-[1rem] top-[44%] rounded-xl">
                  <Read
                    arcNumber={Number(arc.arc.split(" ")[1])}
                    totalChapters={arc.numberOfChapters}
                    type={type}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StoryChaptersComponents;
