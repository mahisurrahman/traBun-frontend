import React from "react";
import { TbProgressBolt } from "react-icons/tb";

function TotalProgressTasks() {
  return (
    <div className="w-[9vw] h-[15vh] px-[0.5vw] py-[1.5vh] bg-gray-300 rounded-xl text-primary duration-200 hover:duration-200 hover:cursor-pointer hover:bg-gray-400 hover:scale-95">
      <div className="flex items-center justify-center">
        <TbProgressBolt className="text-2xl" />
      </div>
      <div className="mt-[2vh] flex items-center justify-center">
        <h1 className="text-3xl font-semibold">15</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-xs font-semibold">Progress</h1>
      </div>
    </div>
  );
}

export default TotalProgressTasks;
