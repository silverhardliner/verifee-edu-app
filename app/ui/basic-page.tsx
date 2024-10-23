"use client";

// Import necessary fonts and components
import { Lexend_Exa } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";
import exercises from "../data/exercises";

// Initialize fonts
const lexend_exa = Lexend_Exa({ subsets: ["latin"], display: "swap" });
const kumbh_sans = Kumbh_Sans({ subsets: ["latin"], display: "swap" });

// Main component
export default function BasicPage({
  exercise_name,
}: {
  exercise_name: string;
}) {
  // Get the exercise data
  const exercise = exercises[exercise_name as keyof typeof exercises];
  
  // State for toggling sources visibility
  const [showSources, setShowSources] = useState(false);

  return (
    <div className={lexend_exa.className}>
      {/* Exercise title */}
      <div className={`text-6xl mb-4 font-bold`}>{exercise.title}</div>

      {/* Exercise information */}
      <p className={`${kumbh_sans.className} text-xl my-4`}>{exercise.info}</p>

      {/* Task description */}
      <div className="text-2xl font-bold">Úkol</div>
      <p className={`${kumbh_sans.className} text-xl my-4`}>{exercise.task}</p>

      {/* Interactive component */}
      {exercise.interactive}

      {/* Sources section */}
      <div className="mt-8">
        <div className={`text-2xl font-bold mb-4`}>
          <span className="cursor-pointer" onClick={() => setShowSources(!showSources)}>Zdroje</span>{" "}
          {showSources ? "▲" : "▼"}
        </div>
        {showSources && (
          <ul className={`${kumbh_sans.className} list-disc pl-5`}>
            {exercise.sources.map((source) => (
              <li key={source.id} className="mb-2">
                <Link
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {source.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Navigation buttons */}
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
