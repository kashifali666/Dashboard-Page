import React from "react";
import { MdOutlineDashboard, MdOutlineGroupAdd } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="w-1/8 sm:w-40 max-h-[450px] ml-4 mt-2 bg-white rounded-md shadow-md">
      <nav className="space-y-3 py-2">
        {[
          { icon: <MdOutlineDashboard />, label: "Dashboard" },
          { icon: <RiProfileLine />, label: "View Profile" },
          { icon: <GiTeamIdea />, label: "Practice Plans" },
          { icon: <CiCalendar />, label: "Calendar" },
          { icon: <IoIosFitness />, label: "Add Drills" },
          { icon: <MdOutlineGroupAdd />, label: "Add Coach" },
          { icon: <RiTeamLine />, label: "Add Teams" },
          { icon: <IoSettingsOutline />, label: "View Settings" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
