import React from "react";
import { ImStatsDots } from "react-icons/im";

function WeeklyProgressTitle() {
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="font-semibold text-lg">Weekly Progress</h2>
      <div className="flex items-center justify-end gap-x-4">
        <ImStatsDots />
      </div>
    </div>
  );
}

export default WeeklyProgressTitle;
