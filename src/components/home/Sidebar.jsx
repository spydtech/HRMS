// import React, { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
//   FaUserFriends,
//   FaMoneyCheckAlt,
//   FaFileAlt,
//   FaUser,
//   FaLock,
//   FaChevronDown,
//   FaChevronUp,
//   FaUsers,
//   FaClipboardList,
//   FaBuilding,
// } from "react-icons/fa";
// import { MdOutlineSocialDistance } from "react-icons/md";
// import profile from "../../assets/employee/profile/profile.jpg";
// // import RecruitmentTab from "./Employeetab/RecruitmentTab";
// import AllEmployeesTab from "./Employeetab/AllEmployees";
// import LeaveRequestsTab from "./Employeetab/LeaveRequest";
// import AttendanceTab from "./Employeetab/Attendance";
// import DepartmentTab from "./Employeetab/DepartmentList";
// import NavBar from "./Employeetab/EmployeeNavBar";

// function SideBar() {
//   const [activeTab, setActiveTab] = useState("");
//   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
//   const [selectedHeader, setSelectedHeader] = useState("");

//   const options = [
//     {
//       title: "HR Dashboard",
//       component: "",
//       icon: <FaTachometerAlt />,
//     },
//     { title: "Holidays", component: "", icon: <FaCalendarAlt /> },
//     { title: "Events", component: "", icon: <FaCalendarCheck /> },
//     { title: "Activities", component: "", icon: <FaTasks /> },
//     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
//     { title: "Employee", component: "", icon: <FaUserFriends /> },
//     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
//     { title: "Report", component: "", icon: <FaFileAlt /> },
//     { title: "User", component: "", icon: <FaUser /> },
//     { title: "Authentication", component: "", icon: <FaLock /> },
//   ];

//   const employeeOptions = [
//     { title: "All Employees", component: "AllEmployeesTab", icon: <FaUsers /> },
//     {
//       title: "Leave Requests",
//       component: "LeaveRequestsTab",
//       icon: <FaClipboardList />,
//     },
//     {
//       title: "Attendance",
//       component: "AttendanceTab",
//       icon: <FaCalendarCheck />,
//     },
//     { title: "Department", component: "DepartmentTab", icon: <FaBuilding /> },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Employee") {
//       setShowEmployeeOptions(!showEmployeeOptions);
//     } else {
//       setActiveTab(option.component);
//       setShowEmployeeOptions(false);
//     }
//   };

//   const handleEmployeeOptionClick = (option) => {
//     setActiveTab(option.component);
//   };

//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//   };

//   return (
//     <>
//       <div className="relative">
//         <NavBar />
//       </div>
//       <div className="absolute top-0">
//         <div className="flex h-auto pb-10 ">
//           <div className="bg-[#0098f1] w-[240px] pt-10 pb-10 h-auto rounded-br-[48px]">
//             <div className="px-2 flex pb-5">
//               <img src={profile} className="rounded-full w-[70px] h-[70px]" />
//               <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
//             </div>
//             <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
//               <span
//                 className={`cursor-pointer  ${
//                   selectedHeader === "Hr"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Hr")}
//               >
//                 Hr
//               </span>
//               <span
//                 className={`cursor-pointer  ${
//                   selectedHeader === "Projects"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Projects")}
//               >
//                 Projects
//               </span>
//             </div>

//             <div className="flex flex-col pr-3 text-white">
//               {options.map((option, index) => (
//                 <div key={index}>
//                   <div
//                     className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                     onClick={() => handleOptionClick(option)}
//                   >
//                     <div className="p-3 pl-4 text-xl flex items-center">
//                       {option.icon}
//                       <span className="ml-3">{option.title}</span>
//                     </div>
//                     {option.title === "Employee" && (
//                       <div className="ml-auto pr-4">
//                         {showEmployeeOptions ? (
//                           <FaChevronUp />
//                         ) : (
//                           <FaChevronDown />
//                         )}
//                       </div>
//                     )}
//                   </div>
//                   {option.title === "Employee" && showEmployeeOptions && (
//                     <div className="transition-all duration-500 ml-8 ">
//                       {employeeOptions.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                           onClick={() => handleEmployeeOptionClick(item)}
//                         >
//                           <div className="p-3 pl-4 text-xl flex items-center">
//                             {item.icon}
//                             <span className="ml-3">{item.title}</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex-1">
//             {/* {activeTab === "RecruitmentTab" && <RecruitmentTab />} */}{" "}
//             {activeTab === "AllEmployeesTab" && <AllEmployeesTab />}
//             {activeTab === "LeaveRequestsTab" && <LeaveRequestsTab />}
//             {activeTab === "AttendanceTab" && <AttendanceTab />}
//             {activeTab === "DepartmentTab" && <DepartmentTab />}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SideBar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import profile from "../../assets/employee/profile/profile.jpg";
import AllEmployeesTab from "./Employeetab/AllEmployees";
import LeaveRequestsTab from "./Employeetab/LeaveRequest";
import AttendanceTab from "./Employeetab/Attendance";
import DepartmentTab from "./Employeetab/DepartmentList";
import NavBar from "./Employeetab/EmployeeNavBar";

function SideBar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("");

  const options = [
    { title: "HR Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { title: "Holidays", path: "/holidays", icon: <FaCalendarAlt /> },
    { title: "Events", path: "/events", icon: <FaCalendarCheck /> },
    { title: "Activities", path: "/activities", icon: <FaTasks /> },
    {
      title: "HR Social",
      path: "/hr-social",
      icon: <MdOutlineSocialDistance />,
    },
    { title: "Employee", path: "", icon: <FaUserFriends /> },
    { title: "PayRoll", path: "/payroll", icon: <FaMoneyCheckAlt /> },
    { title: "Report", path: "/report", icon: <FaFileAlt /> },
    { title: "User", path: "/user", icon: <FaUser /> },
    { title: "Authentication", path: "/auth", icon: <FaLock /> },
  ];

  const employeeOptions = [
    { title: "All Employees", path: "/allemployees", icon: <FaUsers /> },
    {
      title: "Leave Requests",
      path: "/leaverequest",
      icon: <FaClipboardList />,
    },
    {
      title: "Attendance",
      path: "/attendance",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Department",
      path: "/departmentlist",
      icon: <FaBuilding />,
    },
  ];

  const handleOptionClick = (option) => {
    if (option.title === "Employee") {
      setShowEmployeeOptions(!showEmployeeOptions);
    } else {
      navigate(option.path);
      setShowEmployeeOptions(false);
      setActiveTab(option.path);
    }
  };

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  const handleEmployeeOptionClick = (option) => {
    navigate(option.path);
    setShowEmployeeOptions(false);
    setActiveTab(option.path);
  };

  return (
    <div className="relative">
      <NavBar />
      <div className="absolute top-0">
        <div className="flex h-auto pb-10 ">
          <div className="bg-[#0098f1] w-[240px] pt-10 pb-10 h-auto rounded-br-[48px]">
            <div className="px-2 flex pb-5">
              <img
                src={profile}
                className="rounded-full w-[70px] h-[70px]"
                alt="Profile"
              />
              <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
            </div>
            <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
              <span
                className={`cursor-pointer ${
                  selectedHeader === "Hr"
                    ? "underline decoration-2 underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleHeaderClick("Hr")}
              >
                Hr
              </span>
              <span
                className={`cursor-pointer ${
                  selectedHeader === "Projects"
                    ? "underline decoration-2 underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleHeaderClick("Projects")}
              >
                Projects
              </span>
            </div>

            <div className="flex flex-col pr-3 text-white">
              {options.map((option, index) => (
                <div key={index}>
                  <div
                    className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                      activeTab === option.path ? "bg-white text-black" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="p-3 pl-4 text-xl flex items-center">
                      {option.icon}
                      <span className="ml-3">{option.title}</span>
                    </div>
                    {option.title === "Employee" && (
                      <div className="ml-auto pr-4">
                        {showEmployeeOptions ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    )}
                  </div>
                  {option.title === "Employee" && showEmployeeOptions && (
                    <div className="transition-all duration-500 ml-8">
                      {employeeOptions.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                            activeTab === item.path
                              ? "bg-white text-[#e65f2b]"
                              : ""
                          }`}
                          onClick={() => handleEmployeeOptionClick(item)}
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
          <div className="flex-1">
            {/* Render components based on activeTab */}
            {activeTab === "/allemployees" && <AllEmployeesTab />}
            {activeTab === "/leaverequest" && <LeaveRequestsTab />}
            {activeTab === "/attendance" && <AttendanceTab />}
            {activeTab === "/departmentlist" && <DepartmentTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
