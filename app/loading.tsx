import LoadingComponent from "@/components/loading/LoadingComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road to Hero - Loading...",
};

function loading() {
  return (
    <>
      <LoadingComponent />
    </>
  );
}

export default loading;
