import Image, { StaticImageData } from "next/image";

function MemesComponent({
  image,
  alt,
  content,
}: {
  image: StaticImageData;
  alt: string;
  content: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-[100px] flex w-full justify-center md:mt-0">
        <div className="flex flex-col items-center lg:w-11/12 xl:w-9/12 2xl:w-7/12">
          <div className="text-center text-gray-300 lg:text-2xl">
            {/* <p>404! Sorry we couldn't find this page.</p>
            <p>Make sure that the URL is correct</p> */}
            {content}
          </div>
          <Image
            src={image}
            alt="The body of died Gojo Saturo as an error image"
            className="m-w-full mt-5 rounded-3xl object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default MemesComponent;
