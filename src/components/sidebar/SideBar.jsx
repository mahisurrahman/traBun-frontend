import React from "react";
import SideBarLogo from "./sideBarLogo/SideBarLogo";
import "./Sidebar.css";
import SidebarMenu from "./sidebarMenu/SidebarMenu";

function SideBar() {
  return (
    <div className="w-full h-full bg-white rounded-3xl px-[2vw] py-[2vh]">
      <SideBarLogo />
      <div className="mt-[4vh] w-full h-5/6 overflow-y-scroll no-scrollbar">
        <SidebarMenu />
      </div>
    </div>
  );
}

export default SideBar;
