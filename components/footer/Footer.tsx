import { getCurrentYear } from "@/utils/helperFunctions";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-700 p-2 text-center text-gray-200 shadow-lg lg:w-full lg:rounded-3xl">
      <p>
        Build with ♥ By{" "}
        <Link href="https://mohamedwaled.com" target="_blank">
          Soft
        </Link>
      </p>
      <p>{getCurrentYear()} All copyrights reserved by Shehab Lashen ©</p>
    </footer>
  );
}

export default Footer;
