import React from "react";
import TotalTasksDone from "./totalTasksDone/TotalTasksDone";
import OverAllInformationTitle from "./overAllInformationTitle/OverAllInformationTitle";
import TotalTasksStopped from "./totalTasksStopped/TotalTasksStopped";
import TotalTasks from "./totalTasks/TotalTasks";
import TotalUnassignedTasks from "./totalUnassignedTasks/TotalUnassignedTasks";
import TotalProgressTasks from "./totalProgressTasks/TotalProgressTasks";

function OverAllInformationCard() {
  return (
    <div className="bg-primary w-full h-full rounded-3xl px-[2vw] py-[3vh] text-white">
      <OverAllInformationTitle />
      <div className="mt-[3vh] flex items-center justify-between">
        <TotalTasksDone />
        <TotalTasksStopped/>
      </div>
      <div className="mt-[3vh] px-[1vw] flex items-center justify-center gap-x-4">
        <TotalTasks/>
        <TotalUnassignedTasks/>
        <TotalProgressTasks/>
      </div>
    </div>
  );
}

export default OverAllInformationCard;
