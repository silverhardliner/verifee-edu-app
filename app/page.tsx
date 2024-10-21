import Link from "next/link";
import { Lexend_Exa } from "next/font/google";

const lexend_exa = Lexend_Exa({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className={`flex flex-col justify-center bg-blue-500 h-full w-full py-6 gap-4 ${lexend_exa.className}`}>
      <p className="text-5xl font-bold bg-blue-500 text-white text-center uppercase">Verifee Education</p>
      <Link href={"/dezinformace"} className="text-center text-3xl underline text-white">Dezinformace</Link>
      <Link href={"/konspiracni-teorie"} className="text-center text-3xl underline text-white">Konspirační teorie</Link>
    </div>
  );
}
