import React from "react";
import DashTitle from "../../components/dashboard/dashTitle/DashTitle";
import DashNotifyIcons from "../../components/dashboard/dashNotifyIcons/DashNotifyIcons";
import OverAllInformationCard from "../../components/dashboard/overallInformationCard/OverAllInformationCard";

function Dashboard() {
  return (
    <div className="w-full h-full bg-transparent rounded-3xl px-[1vw] py-[2vh]">
      <div className="mt-[2vh] flex justify-between items-center">
        <DashTitle />
        <DashNotifyIcons/>
      </div>
      <div className="mt-[2vh] grid grid-cols-12 gap-x-3 h-[35vh]">
        <div className="col-span-4">
          <OverAllInformationCard/>
        </div>
        <div className="col-span-4"></div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
}

export default Dashboard;
