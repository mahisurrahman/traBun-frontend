import React from "react";
import MonthlyProgressCardTitle from "./montlyProgressCardTitle/MonthlyProgressCardTitle";
import MonthlyProgressChart from "./monthlyProgressChart/MonthlyProgressChart";
import MonthlyReportDownload from "./monthlyReportDownload/MonthlyReportDownload";

function MonthlyProgressCard() {
  return (
    <div className="border-2 border-white bg-white bg-opacity-90 w-full h-full rounded-3xl px-[2vw] py-[3vh] text-primary shadow-lg">
      <MonthlyProgressCardTitle />
      <MonthlyProgressChart/>
      <MonthlyReportDownload/>
    </div>
  );
}

export default MonthlyProgressCard;
