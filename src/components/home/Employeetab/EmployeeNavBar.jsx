import React, { useState } from "react";
import message from "../../../assets/employee/properties/message.png";
import folder from "../../../assets/employee/properties/folder.png";
import mail from "../../../assets/employee/properties/mail.png";
import bell from "../../../assets/employee/properties/bell.png";
import filter from "../../../assets/employee/properties/filter.png";
import { FaCalendarDay } from "react-icons/fa";

//hovered images
import hovermessage from "../../../assets/employee/hoverproperties/message.png";
import hoverfolder from "../../../assets/employee/hoverproperties/folder.png";
import hovermail from "../../../assets/employee/hoverproperties/mail.png";
import hoverbell from "../../../assets/employee/hoverproperties/bell.png";
import hoverfilter from "../../../assets/employee/hoverproperties/filter.png";

function EmployeeNavBar() {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  return (
    <>
      <div id="main" className="bg-[#dbf2ff] h-screen">
        <div
          id="topbar"
          className="flex flex-row items-center pt-2 mx-2 gap-x-10 justify-end"
        >
          <div className="w-[628px] h-[48px] bg-[#0098f1] rounded-xl flex justify-center items-center">
            <input
              className="pl-20 placeholder:text-white outline-none placeholder:text-start w-[628px] rounded-xl text-white h-[48px] border-none bg-[#0098f1]"
              type="search"
              placeholder="Search Anything here...."
            />
          </div>
          <div
            id="icons"
            className="w-[300px] h-[48px] text-white rounded-xl flex justify-around items-center"
          >
            <img
              src={hoveredIcon === "folder" ? hoverfolder : folder}
              alt="folder"
              className="w-6 h-6"
              onMouseEnter={() => handleMouseEnter("folder")}
              onMouseLeave={handleMouseLeave}
            />
            <FaCalendarDay className="w-6 h-6 text-[#0098f1] hover:text-orange-500" />
            <img
              src={hoveredIcon === "message" ? hovermessage : message}
              alt="message"
              className="w-6 h-6"
              onMouseEnter={() => handleMouseEnter("message")}
              onMouseLeave={handleMouseLeave}
            />

            <img
              src={hoveredIcon === "mail" ? hovermail : mail}
              alt="mail"
              className="w-6 h-6"
              onMouseEnter={() => handleMouseEnter("mail")}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={hoveredIcon === "bell" ? hoverbell : bell}
              alt="bell"
              className="w-6 h-6"
              onMouseEnter={() => handleMouseEnter("bell")}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={hoveredIcon === "filter" ? hoverfilter : filter}
              alt="filter"
              className="w-6 h-6"
              onMouseEnter={() => handleMouseEnter("filter")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeNavBar;
