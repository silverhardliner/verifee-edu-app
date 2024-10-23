"use client";

import BasicPage from "../ui/basic-page";
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname();
  const exercise_name = pathname.split("/").filter(Boolean).pop() || "";
  return (
    <BasicPage
      exercise_name={exercise_name}
    />
  );
}

