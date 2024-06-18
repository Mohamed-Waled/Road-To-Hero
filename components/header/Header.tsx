"use client";

import { useState, RefObject } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FaBookBookmark, FaBookMedical } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

import useCloseOutSide from "@/hooks/useCloseOutSide";
import Logo from "../logo/Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useCloseOutSide(() => {
    setIsOpen(false);
  });
  const ref2 = useCloseOutSide(() => {
    setIsOpen(false);
  });

  return (
    <>
      <header className="lg:fixed lg:left-0 lg:top-0 lg:h-[115px] lg:w-full lg:bg-gray-800">
        <div className="fixed left-0 top-0 flex w-full items-center justify-between bg-gray-700 p-4 shadow-lg lg:left-1/2 lg:top-4 lg:w-[calc(100%-40px)] lg:-translate-x-1/2 lg:rounded-3xl">
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="lg:hidden"
          >
            {isOpen ? (
              <GoSidebarExpand className="text-2xl text-white shadow-lg" />
            ) : (
              <GoSidebarCollapse className="text-2xl text-white shadow-lg" />
            )}
          </div>
          <Logo />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-discord/50 shadow-lg">
            <FaDiscord className="text-2xl text-white" />
          </div>
        </div>
      </header>
      <nav
        className={`fixed h-[calc(100vh-80px)] w-7/12 bg-gray-900 shadow-xl sm:w-5/12 md:w-4/12 lg:w-72 ${
          isOpen ? "left-0" : "-left-full"
        } top-[80px] rounded-r-3xl p-6 transition-all duration-500 lg:left-5 lg:top-1/2 lg:h-[calc(100vh-140px)] lg:-translate-y-[calc(50%-50px)] lg:rounded-3xl`}
      >
        <ul>
          <li
            className="w-full overflow-hidden rounded-lg text-center text-gray-100 transition-all duration-300 hover:bg-gray-700 active:bg-gray-800"
            ref={ref as RefObject<HTMLLIElement>}
          >
            <Link
              href="/story-chapters"
              className="flex h-full w-full items-center gap-2 rounded p-3 text-lg"
            >
              <FaBookBookmark className="text-lg text-discord" />
              Story Chapters
            </Link>
          </li>
          <li
            className="mt-4 w-full overflow-hidden rounded-lg text-center text-gray-100 transition-all duration-300 hover:bg-gray-700 active:bg-gray-800"
            ref={ref2 as RefObject<HTMLLIElement>}
          >
            <Link
              href="/reworked-chapters"
              className="flex h-full w-full items-center gap-2 rounded p-3 text-lg"
            >
              <FaBookMedical className="text-lg text-discord" />
              Reworked Chapters
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
