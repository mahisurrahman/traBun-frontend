import React from "react";

function DevelopersAndPersonalButtons() {
  return (
    <div className="flex items-center justify-start gap-x-6 mt-[1vh]">
      <div className="flex items-center gap-x-2 duration-200 hover:cursor-pointer hover:duration-200 hover:scale-110">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <h1 className="text-xs font-semibold">Developers</h1>
      </div>
      <div className="flex items-center gap-x-2 duration-200 hover:cursor-pointer hover:duration-200 hover:scale-110">
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <h1 className="text-xs font-semibold">Personal</h1>
      </div>
    </div>
  );
}

export default DevelopersAndPersonalButtons;
