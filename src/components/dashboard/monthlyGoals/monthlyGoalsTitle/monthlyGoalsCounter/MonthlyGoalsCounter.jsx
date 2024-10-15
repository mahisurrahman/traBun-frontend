import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";

function MonthlyGoalsCounter({ progress, total }) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="px-[0.25vw] py-[0.25vh] border-2 rounded shadow-md">
        <p className="font-semibold text-primary text-xs">
          {progress} /{total}
        </p>
      </div>
      <MdOutlineModeEdit className="duration-200 hover:duration-200 hover:cursor-pointer hover:scale-110"/>
    </div>
  );
}

export default MonthlyGoalsCounter;
