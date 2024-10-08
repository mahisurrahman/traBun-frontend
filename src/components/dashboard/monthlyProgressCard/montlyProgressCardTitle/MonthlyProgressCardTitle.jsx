import React from "react";
import { VscGraphLine } from "react-icons/vsc";

function MonthlyProgressCardTitle() {
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="font-semibold text-lg">Monthly Progress</h2>
      <div className="flex items-center justify-end gap-x-4">
        <VscGraphLine />
      </div>
    </div>
  );
}

export default MonthlyProgressCardTitle;
