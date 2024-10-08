import React from "react";
import WeeklyProgressTitle from "./weeklyProgressTitle/WeeklyProgressTitle";
import DevelopersAndPersonalButtons from "./developersAndPersonalButtons/DevelopersAndPersonalButtons";
import WeeklyProgressGraph from "./weeklyProgressGraph/WeeklyProgressGraph";

function WeeklyProgressCard() {
  return (
    <div className="bg-transparent border-2 border-white bg-white bg-opacity-20 w-full h-full rounded-3xl px-[2vw] py-[3vh] text-primary shadow-lg">
      <WeeklyProgressTitle />
      <DevelopersAndPersonalButtons/>
      <WeeklyProgressGraph/>
    </div>
  );
}

export default WeeklyProgressCard;
