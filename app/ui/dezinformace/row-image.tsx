import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import bubble from "@/public/images/mluvena.PNG";

// bubble div 
// <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-44">

// image div
// <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-96 mt-[-80px]">

export default function RowImage({
  content,
}: {
  content: {
    title: string;
    img: StaticImport;
    alt: string;
    detail: string;
    bubbleText: string;
  };
}) {
  return (
    <div className="flex-1 relative object-contain flex flex-col items-center sm:px-4">
      <p className="text-center text-xl">{content.title}</p>
      
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40%] h-44">
        <Image src={bubble} alt={content.alt} fill />
        <div className="absolute inset-14 top-9 flex items-center justify-center">
          <p className="text-center text-sm text-black">{content.bubbleText}</p>
        </div>
      </div>
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40%] aspect-[4/3] mt-[-80px]">
        <Image src={content.img} alt={content.alt} fill />
      </div>
      <p className="text-center text-lg italic">{content.detail}</p>
    </div>    
  );
}
