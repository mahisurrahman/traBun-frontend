import React from "react";
import DashTitle from "../../components/dashboard/dashTitle/DashTitle";
import DashNotifyIcons from "../../components/dashboard/dashNotifyIcons/DashNotifyIcons";

function Dashboard() {
  return (
    <div className="w-full h-full bg-transparent rounded-3xl px-[1vw] py-[2vh]">
      <div className="mt-[2vh] flex justify-between items-center">
        <DashTitle />
        <DashNotifyIcons/>
      </div>
    </div>
  );
}

export default Dashboard;
