import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";

function MonthlyReportDownload() {
  return (
    <div className="mt-[2vh] flex items-center justify-between">
      <div className="w-8 h-8 rounded-full bg-primary boreder-2 border-white text-white flex items-center justify-center text-xl duration-200 hover:duration-200 hover:bg-white hover:text-primary hover:border-2 hover:border-primary">
        <IoShareSocialSharp />
      </div>
      <div className="flex items-center justify-center gap-x-2 text-xs rounded-3xl font-semibold px-[1vw] py-[1vh] border-2 text-primary border-primary duration-200 hover:duration-200 hover:bg-primary hover:border-white hover:text-white hover:cursor-pointer">
        <button>Download Report</button>
        <FaDownload />
      </div>
    </div>
  );
}

export default MonthlyReportDownload;
