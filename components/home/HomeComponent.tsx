import Link from "next/link";

import { raleway } from "@/utils/fonts";
import { getArcsNumber } from "@/lib/fetchers";

async function HomeComponent() {
  const arcsNumber = await getArcsNumber("story-chapters");

  return (
    <div className="flex min-h-[calc(100vh-150px)] w-full items-center justify-center text-gray-200 lg:min-h-[calc(100vh-250px)]">
      <div className="flex max-w-[90%] flex-col items-center lg:max-w-[70%] xl:max-w-[55%]">
        <h1
          className={`${raleway.className} text-4xl font-semibold leading-relaxed tracking-wider lg:text-5xl`}
        >
          Road to Hero
        </h1>
        <p className="mt-5 text-center text-lg tracking-wide text-gray-300 lg:text-xl">
          The Story of an Ordinary Student who became a Hero in Fantasy World -
          written by the fabulous{" "}
          <span className="text-2xl tracking-wider text-gray-100">
            <Link href="https://x.com/ShehabLasheen1" target="_blank">
              Shehab Lashen
            </Link>
          </span>{" "}
          and his wonderful editor{" "}
          <span className="text-2xl tracking-wider text-gray-100">
            Tree Topper
          </span>{" "}
          .
        </p>
        <p className="text-center text-lg tracking-wide text-gray-300 lg:text-xl">
          The future light novel is now in{" "}
          <span className="text-2xl tracking-wider text-gray-100">
            Arc {arcsNumber}
          </span>{" "}
          and is still going feel free to start and catch the last chapters with
          us.
        </p>
        <div className="mt-5 text-center text-lg font-semibold leading-relaxed tracking-wider text-gray-200 lg:text-2xl">
          Get started by choosing between the{" "}
          <span className="text-2xl text-gray-50 lg:text-4xl">
            <Link href="/story-chapters">Story Chapters</Link>
          </span>{" "}
          or the{" "}
          <span className="text-2xl text-gray-50 lg:text-4xl">
            <Link href="/reworked-chapters">Reworked Chapters</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
