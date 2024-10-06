import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import bubble from "@/public/images/mluvena.PNG";

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
    <div className="flex-1 relative object-contain flex flex-col items-center px-4">
      <p className="text-center text-xl">{content.title}</p>
      <div className="relative w-1/3 h-44">
        <Image src={bubble} alt={content.alt} fill />
        <div className="absolute inset-14 flex items-center justify-center">
          <p className="text-center text-sm text-black">{content.bubbleText}</p>
        </div>
      </div>
      <div className="relative w-1/3 h-96 mt-[-80px]">
        <Image src={content.img} alt={content.alt} fill />
      </div>
      <p className="text-center text-lg italic">{content.detail}</p>
    </div>
  );
}
