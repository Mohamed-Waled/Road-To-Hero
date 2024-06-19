import type { Metadata } from "next";
import HomeComponent from "@/components/home/HomeComponent";

export const metadata: Metadata = {
  title: "Road to Hero",
  description:
    "The Story of an Ordinary Student who became a Hero in Fantasy World",
};

function Home() {
  return (
    <>
      <HomeComponent />
    </>
  );
}

export default Home;
