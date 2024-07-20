"use client";

import { useRouter } from "next/navigation";
import { GrPowerReset } from "react-icons/gr";

function ResetProgress() {
  const router = useRouter();

  function resetLocalStorage() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("reworked-chapters");
      localStorage.removeItem("story-chapters");
    }
    router.push("/");
  }

  return (
    <button
      className="group flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gray-800 p-3 text-center text-lg text-gray-50 shadow-xl transition-all duration-300 hover:bg-gray-700 active:bg-gray-800"
      onClick={() => {
        resetLocalStorage();
      }}
    >
      <GrPowerReset className="transition-all duration-500 group-hover:rotate-[360deg]" />
      Reset Progress
    </button>
  );
}

export default ResetProgress;
