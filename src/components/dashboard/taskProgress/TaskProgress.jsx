import React from "react";
import { AiOutlineLinux } from "react-icons/ai";
import { RiFullscreenExitFill } from "react-icons/ri";

function TaskProgress({ progressTasks, assignedTo }) {
  return (
    <div className="w-full h-full bg-white rounded-3xl  px-[2vw] py-[3vh]">
      <div className="flex items-center justify-between">
        <AiOutlineLinux className="text-3xl" />
        <RiFullscreenExitFill className="text-xl hover:scale-110 hover:cursor-pointer" />
      </div>
      <div className="mt-[2vh] h-[14vh]">
        {progressTasks.length > 50 ? (
          <div>
            <h1 className="tracking-wide">
              {progressTasks.slice(0, 50)}... {/* Truncated text */}
            </h1>
            <button className="text-blue-500 mt-2 underline text-xs hover:scale-110">Read Details</button>{" "}
            {/* 'Read Details' button */}
          </div>
        ) : (
          <h1 className="tracking-wide">{progressTasks}</h1>
        )}
      </div>
      <div className="mt-[1vh]">
        <p className="text-xs">Assigned To: <span className="font-semibold">{assignedTo}</span></p>
      </div>
    </div>
  );
}

export default TaskProgress;
