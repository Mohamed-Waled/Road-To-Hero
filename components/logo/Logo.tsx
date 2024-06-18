import Image from "next/image";
import logo from "@/public/images/logo.png";
import { raleway } from "@/utils/fonts";
import Link from "next/link";

function Logo() {
  return (
    <>
      <Link href="/" className="flex w-fit items-center justify-center">
        <span
          className={`${raleway.className} text-xl font-semibold tracking-wider text-gray-200`}
        >
          Road
        </span>
        <Image
          src={logo}
          alt="The logo of Road to Hero light novel"
          className="mx-2 w-12 rounded-full"
          priority
        />
        <span
          className={`${raleway.className} text-xl font-semibold tracking-wider text-gray-200`}
        >
          Hero
        </span>
      </Link>
    </>
  );
}

export default Logo;
