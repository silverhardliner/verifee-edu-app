"use client";

import { Lexend_Exa } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import React from "react";
const lexend_exa = Lexend_Exa({ subsets: ["latin"], display: "swap" });
const kumbh_sans = Kumbh_Sans({ subsets: ["latin"], display: "swap" });
import exercises from "../data/exercises";
export default function BasicPage({
  exercise_name,
}: {
  exercise_name: string;
}) {
  const exercise = exercises[exercise_name as keyof typeof exercises];
  return (
    <div className={lexend_exa.className}>
      <div className={`text-6xl mb-4 font-bold`}>{exercise.title}</div>
      <p className={`${kumbh_sans.className} text-xl my-4`}>{exercise.info}</p>
      <div className="text-2xl font-bold">Úkol</div>    
      <p className={`${kumbh_sans.className} text-xl my-4`}>{exercise.task}</p>
      {exercise.interactive}
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
