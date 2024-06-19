import NextTopLoader from "nextjs-toploader";

import type { Metadata } from "next";
import { cairo } from "@/utils/fonts";
import MainContainer from "@/components/layout/MainContainer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Road to Hero",
  description:
    "The Story of an Ordinary Student who became a Hero in Fantasy World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} bg-gray-800`}>
        <MainContainer>
          <NextTopLoader color="#7289da" height={4} showSpinner={false} />
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
