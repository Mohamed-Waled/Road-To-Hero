import Footer from "../footer/Footer";
import Header from "../header/Header";

function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="absolute top-[80px] -z-10 w-full lg:right-0 lg:top-[100px] lg:min-h-[calc(100vh-100px)] lg:w-[calc(100%-20rem)] lg:p-4">
        <div className="min-h-[calc(100vh-145px)] p-4 lg:min-h-[calc(100vh-200px)]">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default MainContainer;
