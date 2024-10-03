import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GrTasks } from "react-icons/gr";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { FaFolderOpen } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { IoPersonRemove } from "react-icons/io5";
import { BsKanban } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { RiPresentationLine } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function SidebarMenu() {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <MdDashboard className="text-lg" />
          Dashboard
        </span>
      </NavLink>
      <NavLink
        to="/mytasks"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <GrTasks className="text-lg" />
          My Tasks
        </span>
      </NavLink>
      <NavLink
        to="/calender"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <BsCalendar2DateFill className="text-lg" />
          Calender
        </span>
      </NavLink>
      <NavLink
        to="/stats"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <GoGraph className="text-lg" />
          Statistics
        </span>
      </NavLink>
      <NavLink
        to="/documents"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <FaFolderOpen className="text-lg" />
          Documents
        </span>
      </NavLink>
    </>
  );

  const linksTwo = (
    <>
      <NavLink
        to="/add-people"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <IoMdPersonAdd className="text-lg" />
          Add People
        </span>
      </NavLink>
      <NavLink
        to="/assigned-tasks"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <MdOutlineAssignmentTurnedIn className="text-lg" />
          Assigned Tasks
        </span>
      </NavLink>
      <NavLink
        to="/remove-people"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <IoPersonRemove className="text-lg" />
          Remove People
        </span>
      </NavLink>
    </>
  );

  const linksThree = (
    <>
      <NavLink
        to="/kanbun"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <BsKanban className="text-lg" />
          Kanban
        </span>
      </NavLink>
      <NavLink
        to="/notes"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <GrNotes className="text-lg" />
          Notes
        </span>
      </NavLink>
      <NavLink
        to="/attendance"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <RiPresentationLine className="text-lg" />
          Attendance
        </span>
      </NavLink>
      <NavLink
        to="/salary"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <MdOutlineAttachMoney className="text-lg" />
          Salary Clearance
        </span>
      </NavLink>
    </>
  );

  const linksFour = (
    <>
      <NavLink
        to="/settings"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-gray-900 text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-black py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-4 text-sm">
          <IoSettingsOutline className="text-lg" />
          Settings
        </span>
      </NavLink>
    </>
  );

  return (
    <div className="w-full h-[70vh]">
      <div>{links}</div>
      <div className="mt-[4vh]">
        <p className="uppercase mb-[0.25vh] font-semibold w-full py-[1.25vh] px-[1vw]">
          INTERACTIONS
        </p>
        <div className="px-[0.25vw]">{linksTwo}</div>
      </div>
      <div className="mt-[4vh]">
        <p className="uppercase mb-[0.25vh] font-semibold w-full py-[1.25vh] px-[1vw]">
          Tools
        </p>
        <div className="px-[0.25vw]">{linksThree}</div>
      </div>
      <div className="mt-[5vh]">
        <div className="px-[0.25vw]">{linksFour}</div>
      </div>
    </div>
  );
}

export default SidebarMenu;
