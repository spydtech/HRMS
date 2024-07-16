import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaUser,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaClipboardList,
  FaBuilding,
} from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import RecruitmentTab from "./Employeetab/EmployeeTab";

function SideBar() {
  const [activeTab, setActiveTab] = useState("");
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);

  const options = [
    {
      title: "HR Dashboard",
      component: "RecruitmentTab",
      icon: <FaTachometerAlt />,
    },
    { title: "Holidays", component: "", icon: <FaCalendarAlt /> },
    { title: "Events", component: "", icon: <FaCalendarCheck /> },
    { title: "Activities", component: "", icon: <FaTasks /> },
    { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
    { title: "Employee", component: "", icon: <FaUserFriends /> },
    { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
    { title: "Report", component: "", icon: <FaFileAlt /> },
    { title: "User", component: "", icon: <FaUser /> },
    { title: "Authentication", component: "", icon: <FaLock /> },
  ];

  const employeeOptions = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Leave Requests", icon: <FaClipboardList /> },
    { title: "Attendance", icon: <FaCalendarCheck /> },
    { title: "Department", icon: <FaBuilding /> },
  ];

  const handleOptionClick = (option) => {
    if (option.title === "Employee") {
      setShowEmployeeOptions(!showEmployeeOptions);
    } else {
      setActiveTab(option.component);
      setShowEmployeeOptions(false);
    }
  };

  return (
    <div className="flex h-auto pb-10 bg-[#dbf2ff]">
      <div className="bg-[#0098f1] w-[240px] pt-20 pb-10 h-auto rounded-br-[48px]">
        <div className="flex flex-col pr-3 text-white">
          {options.map((option, index) => (
            <div key={index}>
              <div
                className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                <div className="p-3 pl-4 text-xl flex items-center">
                  {option.icon}
                  <span className="ml-3">{option.title}</span>
                </div>
                {option.title === "Employee" && (
                  <div className="ml-auto pr-4">
                    {showEmployeeOptions ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                )}
              </div>
              {option.title === "Employee" && showEmployeeOptions && (
                <div className="transition-all duration-500 ml-8">
                  {employeeOptions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#0098f1] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                    >
                      <div className="p-3 pl-4 text-xl flex items-center">
                        {item.icon}
                        <span className="ml-3">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-[240px] flex-1">
        {/* {activeTab === "RecruitmentTab" && <RecruitmentTab />} */}
        {/* Add more conditional renderings for other components as needed */}
      </div>
    </div>
  );
}

export default SideBar;