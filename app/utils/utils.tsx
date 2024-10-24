import exercises from "@/app/data/exercises";
import { usePathname } from "next/navigation";

export function getExerciseName() {
  const pathname = usePathname();
  const exercise_name = pathname.split("/").filter(Boolean).pop() || "";
  return exercise_name;
}

export function getExerciseIndex() {
  const exercise_name = getExerciseName();
  const exerciseEntries = Object.entries(exercises);
  return exerciseEntries.findIndex(([key]) => key === exercise_name);
}

export function getExerciseCount() {
  return Object.keys(exercises).length;
}
