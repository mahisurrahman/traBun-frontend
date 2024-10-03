import React from "react";
import logo from "../../../../public/traideas.png";

function SideBarLogo() {
  return (
    <div className="w-full flex justify-center items-center gap-x-4">
      <img src={logo} className="w-[3vw] h-[5vh]" alt="traideasLogo" />
      <h1 className="text-[2vw] font-pacifico">TraBun</h1>
    </div>
  );
}

export default SideBarLogo;
