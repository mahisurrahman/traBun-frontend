import React, { useState } from "react";

function MonthlyGoalsTasks() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-[2vh]">
      <form className="h-[30vh] overflow-y-scroll">
        <div className="mb-[2vh] flex items-center gap-x-2">
          <input onChange={()=>setChecked(!checked)} className="w-4 h-4" type="checkbox" name="readBooks" id="readBooks" />
          {
            checked === true ? <p className="font-semibold text-sm">Read Books</p> : <p className="text-sm">Read Books</p>
          }
        </div>
        <div className="mb-[2vh] flex items-center gap-x-2">
          <input onChange={()=>setChecked(!checked)} className="w-4 h-4" type="checkbox" name="readBooks" id="readBooks" />
          {
            checked === true ? <p className="font-semibold text-sm">Read Books</p> : <p className="text-sm">Read Books</p>
          }
        </div>
        <div className="mb-[2vh] flex items-center gap-x-2">
          <input onChange={()=>setChecked(!checked)} className="w-4 h-4" type="checkbox" name="readBooks" id="readBooks" />
          {
            checked === true ? <p className="font-semibold text-sm">Read Books</p> : <p className="text-sm">Read Books</p>
          }
        </div>
        <div className="mb-[2vh] flex items-center gap-x-2">
          <input onChange={()=>setChecked(!checked)} className="w-4 h-4" type="checkbox" name="readBooks" id="readBooks" />
          {
            checked === true ? <p className="font-semibold text-sm">Read Books</p> : <p className="text-sm">Read Books</p>
          }
        </div>
        <div className="mb-[2vh] flex items-center gap-x-2">
          <input onChange={()=>setChecked(!checked)} className="w-4 h-4" type="checkbox" name="readBooks" id="readBooks" />
          {
            checked === true ? <p className="font-semibold text-sm">Read Books</p> : <p className="text-sm">Read Books</p>
          }
        </div>
        <div className="mb-[2vh] flex items-center gap-x-2">
          <input onChange={()=>setChecked(!checked)} className="w-4 h-4" type="checkbox" name="readBooks" id="readBooks" />
          {
            checked === true ? <p className="font-semibold text-sm">Read Books</p> : <p className="text-sm">Read Books</p>
          }
        </div>
      </form>
    </div>
  );
}

export default MonthlyGoalsTasks;
