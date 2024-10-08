import React from "react";
import { MdOutlineDownloading } from "react-icons/md";

function TotalUnassignedTasks() {
  return (
    <div className="w-[6vw] px-[0.5vw] py-[1.5vh] bg-gray-200 rounded-xl text-primary duration-200 hover:duration-200 hover:cursor-pointer hover:bg-gray-400 hover:scale-95">
      <div className="flex items-center justify-center">
        <MdOutlineDownloading className="text-3xl" />
      </div>
      <div className="mt-[2vh] flex items-center justify-center">
        <h1 className="text-3xl font-semibold">5</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-xs font-semibold">Pending</h1>
      </div>
    </div>
  );
}

export default TotalUnassignedTasks;
