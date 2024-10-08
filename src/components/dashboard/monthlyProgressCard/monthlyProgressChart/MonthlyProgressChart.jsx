import React from "react";
import pieChartImg from "../../../../../public/pieChartImg.png";

function MonthlyProgressChart() {
  return (
    <div className="flex items-center gap-x-5">
      <div className="text-xs flex flex-col">
        <div className="flex items-center gap-x-2 my-[1vh]">
          <div className="w-2 h-2 rounded-full bg-red-300"></div>
          <h1 className="font-semibold uppercase">Istiak</h1>
        </div>
        <div className="flex items-center gap-x-2 my-[1vh]">
          <div className="w-2 h-2 rounded-full bg-blue-300"></div>
          <h1 className="font-semibold uppercase">Limon</h1>
        </div>
        <div className="flex items-center gap-x-2 my-[1vh]">
          <div className="w-2 h-2 rounded-full bg-green-300"></div>
          <h1 className="font-semibold uppercase">Sakib</h1>
        </div>
      </div>
      <img src={pieChartImg} className="w-40 h-40" alt="" />
    </div>
  );
}

export default MonthlyProgressChart;
