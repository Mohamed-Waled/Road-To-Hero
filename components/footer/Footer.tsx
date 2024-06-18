import { getCurrentYear } from "@/utils/helperFunctions";

function Footer() {
  return (
    <footer className="bg-gray-700 p-2 text-center text-gray-200 shadow-lg lg:w-full lg:rounded-3xl">
      <p>Build with ♥ By Soft</p>
      <p>{getCurrentYear()} All copyrights reserved by Shehab Lashen ©</p>
    </footer>
  );
}

export default Footer;
