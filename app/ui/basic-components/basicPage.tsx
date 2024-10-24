"use client";

// Import necessary fonts and components
import React from "react";
import { Lexend_Exa } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import exercises from "../../data/exercises";
import Sources from "./sources";
import ProgressBar from "./progressBar";
import NavigationButtons from "./navigationButtons";

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

      {/* Progress bar */}
      <ProgressBar/>

      {/* Sources section */}
      <Sources sources={exercise.sources} />

      {/* Navigation buttons */}
      <NavigationButtons />
    </div>
  );
}
