"use client";

import { Lexend_Exa } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import React from "react";
const lexend_exa = Lexend_Exa({ subsets: ["latin"], display: "swap" });
const kumbh_sans = Kumbh_Sans({ subsets: ["latin"], display: "swap" });
export default function BasicPage({
  title,
  info,
  interactive,
  task,
}: {
  title: string;
  info: string;
  interactive: React.ReactNode;
  task: string;
}) {
  return (
    <div className={lexend_exa.className}>
      <div className={`text-6xl mb-4 font-bold`}>{title}</div>
      <p className={`${kumbh_sans.className} text-xl my-4`}>{info}</p>
      <div className="text-2xl font-bold">Úkol</div>    
      <p className={`${kumbh_sans.className} text-xl my-4`}>{task}</p>
      {interactive}
      <div className="flex justify-between mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48">
          Zpět
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48">
          Další
        </button>
      </div>
    </div>
  );
}
