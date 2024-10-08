import React from "react";
import DashTitle from "../../components/dashboard/dashTitle/DashTitle";
import DashNotifyIcons from "../../components/dashboard/dashNotifyIcons/DashNotifyIcons";
import OverAllInformationCard from "../../components/dashboard/overallInformationCard/OverAllInformationCard";
import WeeklyProgressCard from "../../components/dashboard/weeklyProgressCard/WeeklyProgressCard";
import MonthlyProgressCard from "../../components/dashboard/monthlyProgressCard/MonthlyProgressCard";

function Dashboard() {
  return (
    <div className="w-full h-full bg-transparent rounded-3xl px-[1vw] py-[2vh]">
      <div className="mt-[2vh] flex justify-between items-center">
        <DashTitle />
        <DashNotifyIcons/>
      </div>
      <div className="mt-[5vh] grid grid-cols-12 gap-x-3 h-[40vh]">
        <div className="col-span-5">
          <OverAllInformationCard/>
        </div>
        <div className="col-span-4">
          <WeeklyProgressCard/>
        </div>
        <div className="col-span-3">
          <MonthlyProgressCard/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
