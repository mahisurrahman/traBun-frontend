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
import logo from "../../../../public/traideas.png";

function SidebarMenu() {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <MdDashboard className="text-xs" />
          Dashboard
        </span>
      </NavLink>
      <NavLink
        to="/mytasks"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <GrTasks className="text-xs" />
          My Tasks
        </span>
      </NavLink>
      <NavLink
        to="/calender"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <BsCalendar2DateFill className="text-xs" />
          Calender
        </span>
      </NavLink>
      <NavLink
        to="/stats"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <GoGraph className="text-xs" />
          Statistics
        </span>
      </NavLink>
      <NavLink
        to="/documents"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <FaFolderOpen className="text-xs" />
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
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <IoMdPersonAdd className="text-xs" />
          Add People
        </span>
      </NavLink>
      <NavLink
        to="/assigned-tasks"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <MdOutlineAssignmentTurnedIn className="text-xs" />
          Assigned Tasks
        </span>
      </NavLink>
      <NavLink
        to="/remove-people"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <IoPersonRemove className="text-xs" />
          Remove People
        </span>
      </NavLink>
    </>
  );

  const linksThree = (
    <>
      <NavLink
        to="/trabun"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          {/* <BsKanban className="text-xs" /> */}
          <img src={logo} className="w-[1.2vw]" alt="TraIdeas Logo" />
          TraBun
        </span>
      </NavLink>
      <NavLink
        to="/notes"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <GrNotes className="text-xs" />
          Notes
        </span>
      </NavLink>
      <NavLink
        to="/attendance"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <RiPresentationLine className="text-xs" />
          Attendance
        </span>
      </NavLink>
      <NavLink
        to="/salary"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <MdOutlineAttachMoney className="text-xs" />
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
            ? "mb-[0.25vh] duration-700 flex items-center w-full bg-primary text-white py-[1vh] px-[1vw] rounded-3xl"
            : "mb-[0.25vh] flex items-center w-full bg-white text-primary py-[1vh] px-[1vw] hover:font-semibold"
        }
        style={{ display: "block" }}
      >
        <span className="flex items-center gap-x-2 text-xs">
          <IoSettingsOutline className="text-xs" />
          Settings
        </span>
      </NavLink>
    </>
  );

  return (
    <div className="w-full h-[70vh]">
      <div>{links}</div>
      <div className="mt-[4vh]">
        <p className="uppercase mb-[0.25vh] font-semibold w-full py-[1.25vh] px-[0.25vw]">
          INTERACTIONS
        </p>
        <div className="px-[0.25vw]">{linksTwo}</div>
      </div>
      <div className="mt-[4vh]">
        <p className="uppercase mb-[0.25vh] font-semibold w-full py-[1.25vh] px-[0.25vw]">
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
