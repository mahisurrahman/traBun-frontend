import React from "react";
import { FaPlus } from "react-icons/fa";

function AddTasks() {
  return (
    <div className="w-full h-full rounded-3xl border-4 border-dotted border-black px-[2vw] py-[3vh] shadow-md flex justify-center items-center text-xl">
      <div className="flex flex-col items-center gap-x-2 duration-200 hover:scale-110 hover:cursor-pointer hover:duration-200">
        <FaPlus />
        <h1 className="font-semibold">Add Tasks</h1>
      </div>
    </div>
  );
}

export default AddTasks;
