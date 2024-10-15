import React from "react";
import DashTitle from "../../components/dashboard/dashTitle/DashTitle";
import DashNotifyIcons from "../../components/dashboard/dashNotifyIcons/DashNotifyIcons";
import OverAllInformationCard from "../../components/dashboard/overallInformationCard/OverAllInformationCard";
import WeeklyProgressCard from "../../components/dashboard/weeklyProgressCard/WeeklyProgressCard";
import MonthlyProgressCard from "../../components/dashboard/monthlyProgressCard/MonthlyProgressCard";
import MonthlyGoals from "../../components/dashboard/monthlyGoals/MonthlyGoals";
import TaskProgress from "../../components/dashboard/taskProgress/TaskProgress";
import AddTasks from "../../components/dashboard/addTasks/AddTasks";
import logo from "../../../public/traideas.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="w-full h-[85vh] overflow-y-scroll bg-transparent rounded-3xl px-[1vw] pt-[2vh]">
      <div className="mt-[2vh] flex justify-between items-end">
        <DashTitle />
        <DashNotifyIcons />
      </div>
      <div className="mt-[2vh] grid grid-cols-12 gap-x-6 h-[40vh]">
        <div className="col-span-5">
          <OverAllInformationCard />
        </div>
        <div className="col-span-4">
          <WeeklyProgressCard />
        </div>
        <div className="col-span-3">
          <MonthlyProgressCard />
        </div>
      </div>
      <div className="mt-[3vh] grid grid-cols-12 gap-x-6 h-[41vh] .no-scrollbar">
        <div className="col-span-3">
          <MonthlyGoals />
        </div>
        <div className="col-span-6">
          <div className="my-[4vh] flex justify-between items-center">
            <h1 className="font-semibold">
              Tasks In Progress <span>{`(2)`}</span>
            </h1>
            <p className="font-semibold duration-200 hover:duration-200 hover:cursor-pointer hover:scale-110">
              Show More...
            </p>
          </div>
          <div className="w-full h-[30vh] grid grid-cols-2 gap-x-6">
            <TaskProgress
              progressTasks={
                "Handling the Dashboard of the Consumer Panel With Dynamic API & .... "
              }
              assignedTo={"Mahisur"}
            />
            <TaskProgress
              progressTasks={"Consumer Panel Stepper Animation Apply"}
              assignedTo={"Turjo"}
            />
          </div>
        </div>
        <div className="col-span-3 w-full h-[30vh]">
          <div className="flex items-center justify-end my-[3.2vh] text-sm font-bold">
            <div className="flex items-center gap-x-2 px-[1vw] py-[0.5vh] border-2 rounded-md border-black duration-200 hover:scale-105 hover:cursor-pointer hover:duration-200">
              <img src={logo} className="w-6 h-6" alt="" />
              <h1>TraBun</h1>
              <FaLongArrowAltRight className="mt-[0.25vh]"/>
            </div>
          </div>
          <AddTasks />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
