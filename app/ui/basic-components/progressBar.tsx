import React from "react";
import { getExerciseIndex, getExerciseCount } from "@/app/utils/utils"; 


const ProgressBar: React.FC = () => {
  
  const exercise_index = getExerciseIndex() + 1;
  const exercise_count = getExerciseCount();
  const percentage = Math.round((exercise_index / exercise_count) * 100);
  
  return (
    <div className="flex items-center my-4">
      <div className="mr-2 font-bold">{percentage}%</div>
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
