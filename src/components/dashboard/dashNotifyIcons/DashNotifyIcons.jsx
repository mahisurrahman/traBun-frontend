import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

function DashNotifyIcons() {
  return (
    <div className="w-full flex items-center justify-end">
      <div className="flex justify-center items-center gap-x-4">
        <button className="duration-200 px-[2vw] py-[1.5vh] flex items-center justify-center gap-x-1 bg-primary rounded-3xl text-white text-xs font-normal hover:bg-white hover:text-primary hover:cursor-pointer hover:duration-200">
          <FaPlus />
          <span className="mt-[0.10vh]">Create</span>
        </button>
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-xl bg-white duration-200 hover:bg-primary hover:text-white hover:duration-200 hover:cursor-pointer">
          <IoIosSearch />
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-xl bg-white duration-200 hover:bg-primary hover:text-white hover:duration-200 hover:cursor-pointer">
          <IoNotificationsOutline />
        </div>
        <img
          className="inline-block h-10 w-10 rounded-full duration-200 hover:duration-200 hover:cursor-pointer hover:scale-110"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default DashNotifyIcons;
