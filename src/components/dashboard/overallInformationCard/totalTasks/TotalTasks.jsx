import React from "react";
import { PiDotsThreeCircleBold } from "react-icons/pi";

function TotalTasks() {
  return (
    <div className="w-[6vw] px-[0.5vw] py-[1.5vh] bg-gray-100 rounded-xl text-primary duration-200 hover:duration-200 hover:cursor-pointer hover:bg-gray-400 hover:scale-95">
      <div className="flex items-center justify-center">
        <PiDotsThreeCircleBold className="text-3xl"/>
      </div>
      <div className="mt-[2vh] flex items-center justify-center">
        <h1 className="text-3xl font-semibold">25</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-xs font-semibold">Total Tasks</h1>
      </div>
    </div>
  );
}

export default TotalTasks;
