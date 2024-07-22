// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
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
// import AllEmployeesTab from "./employeeTab/AllEmployees";
// import LeaveRequestsTab from "./employeeTab/LeaveRequest";
// import AttendanceTab from "./employeeTab/Attendance";
// import DepartmentTab from "./employeeTab/DepartmentList";
// import NavBar from "./employeeTab/EmployeeNavBar";

// function SideBar() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("");
//   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
//   const [selectedHeader, setSelectedHeader] = useState("");

//   const options = [
//     { title: "HR Dashboard", path: "/", icon: <FaTachometerAlt /> },
//     { title: "Holidays", path: "/holidays", icon: <FaCalendarAlt /> },
//     { title: "Events", path: "/events", icon: <FaCalendarCheck /> },
//     { title: "Activities", path: "/activities", icon: <FaTasks /> },
//     {
//       title: "HR Social",
//       path: "/hr-social",
//       icon: <MdOutlineSocialDistance />,
//     },
//     { title: "Employee", path: "", icon: <FaUserFriends /> },
//     { title: "PayRoll", path: "/payroll", icon: <FaMoneyCheckAlt /> },
//     { title: "Report", path: "/report", icon: <FaFileAlt /> },
//     { title: "User", path: "/user", icon: <FaUser /> },
//     { title: "Authentication", path: "/auth", icon: <FaLock /> },
//   ];

//   const employeeOptions = [
//     { title: "All Employees", path: "/allemployees", icon: <FaUsers /> },
//     {
//       title: "Leave Requests",
//       path: "/leaverequest",
//       icon: <FaClipboardList />,
//     },
//     {
//       title: "Attendance",
//       path: "/attendance",
//       icon: <FaCalendarCheck />,
//     },
//     {
//       title: "Department",
//       path: "/departmentlist",
//       icon: <FaBuilding />,
//     },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Employee") {
//       setShowEmployeeOptions(!showEmployeeOptions);
//     } else if (activeTab !== option.path) {
//       navigate(option.path);
//       setShowEmployeeOptions(false);
//       setActiveTab(option.path);
//     }
//   };

//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//   };

//   const handleEmployeeOptionClick = (option) => {
//     if (activeTab !== option.path) {
//       navigate(option.path);
//       setShowEmployeeOptions(false);
//       setActiveTab(option.path);
//     }
//   };

//   return (
//     <div className="relative">
//       <NavBar />
//       <div className="absolute top-0">
//         <div className="flex h-auto pb-10">
//           <div className="bg-[#0098f1] w-[240px] pt-10 pb-10 h-auto rounded-br-[48px]">
//             <div className="px-2 flex pb-5">
//               <img
//                 src={profile}
//                 className="rounded-full w-[70px] h-[70px]"
//                 alt="Profile"
//               />
//               <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
//             </div>
//             <div className="text-[16px] text-white flex justify-around pr-10 pb-5 items-center">
//               <span
//                 className={`cursor-pointer ${
//                   selectedHeader === "Hr"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Hr")}
//               >
//                 Hr
//               </span>
//               <span
//                 className={`cursor-pointer ${
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
//                     className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                       activeTab === option.path ? "" : ""
//                     }`}
//                     onClick={() => handleOptionClick(option)}
//                   >
//                     <div className="p-3 pl-4 text-[16px] flex items-center">
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
//                     <div className="transition-all duration-500 ml-8">
//                       {employeeOptions.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                             activeTab === item.path
//                               ? "bg-white text-[#e65f2b]"
//                               : ""
//                           }`}
//                           onClick={() => handleEmployeeOptionClick(item)}
//                         >
//                           <div className="p-3 pl-4 text-[16px] flex items-center">
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
//             {/* Render components based on activeTab */}
//             {activeTab === "/allemployees" && <AllEmployeesTab />}
//             {activeTab === "/leaverequest" && <LeaveRequestsTab />}
//             {activeTab === "/attendance" && <AttendanceTab />}
//             {activeTab === "/departmentlist" && <DepartmentTab />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoProjectSymlink } from "react-icons/go";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
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
import AllEmployeesTab from "./employeeTab/AllEmployees";
import LeaveRequestsTab from "./employeeTab/LeaveRequest";
import AttendanceTab from "./employeeTab/Attendance";
import DepartmentTab from "./employeeTab/DepartmentList";
import NavBar from "./employeeTab/EmployeeNavBar";
import AddProject from "./projects/addProjects/AddProject";

function SideBar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("Hr");

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

  const projectOptions = [
    { title: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { title: "Inbox", path: "/inbox", icon: <FaFileAlt /> },
    { title: "Chat", path: "/chat", icon: <FaUser /> },
    { title: "Projects", path: "", icon: <FaTasks /> },
    { title: "Clients", path: "/clients", icon: <FaUserFriends /> },
    { title: "Teams", path: "/teams", icon: <FaUsers /> },
    { title: "Tickets", path: "/tickets", icon: <FaClipboardList /> },
  ];

  const projectDropdownOptions = [
    { title: "Add Project", path: "/addproject", icon: <GoProjectSymlink /> },
    { title: "Project List", path: "/projectlist", icon: <GoProjectRoadmap /> },
    { title: "Project Grid", path: "/projectgrid", icon: <GrProjects /> },
    {
      title: "Project Details",
      path: "/projectdetails",
      icon: <TbListDetails />,
    },
  ];

  const handleOptionClick = (option) => {
    if (option.title === "Employee") {
      setShowEmployeeOptions(!showEmployeeOptions);
    } else if (option.title === "Projects") {
      setShowProjectOptions(!showProjectOptions);
    } else if (activeTab !== option.path) {
      navigate(option.path);
      setShowEmployeeOptions(false);
      setShowProjectOptions(false);
      setActiveTab(option.path);
    }
  };

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
    setShowEmployeeOptions(false);
    setShowProjectOptions(false);
  };

  const handleEmployeeOptionClick = (option) => {
    if (activeTab !== option.path) {
      navigate(option.path);
      setShowEmployeeOptions(false);
      setActiveTab(option.path);
    }
  };

  const handleProjectOptionClick = (option) => {
    if (activeTab !== option.path) {
      navigate(option.path);
      setShowProjectOptions(false);
      setActiveTab(option.path);
    }
  };

  return (
    <div className="relative  ">
      <NavBar />
      <div className="absolute  top-0">
        <div className="flex h-auto pb-10">
          <div className="bg-[#0098f1] w-[240px] text-[16px] overflow-x-hidden pt-10 pb-10 h-screen  fixed overflow-y-auto">
            <div className="px-2 flex pb-5">
              <img
                src={profile}
                className="rounded-full w-[70px] h-[70px]"
                alt="Profile"
              />
              <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
            </div>
            <div className="text-[16px] text-white flex justify-around pr-10 pb-5 items-center">
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
              {selectedHeader === "Hr" &&
                options.map((option, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                        activeTab === option.path ? "" : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="p-3 pl-4 text-[16px] flex items-center">
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
                            <div className="p-3 pl-4 text-[16px] flex items-center">
                              {item.icon}
                              <span className="ml-3">{item.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

              {selectedHeader === "Projects" &&
                projectOptions.map((option, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                        activeTab === option.path ? "" : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="p-3 pl-4 text-[16px] flex items-center">
                        {option.icon}
                        <span className="ml-3">{option.title}</span>
                      </div>
                      {option.title === "Projects" && (
                        <div className="ml-auto pr-4">
                          {showProjectOptions ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </div>
                      )}
                    </div>
                    {option.title === "Projects" && showProjectOptions && (
                      <div className="transition-all duration-500 ml-8">
                        {projectDropdownOptions.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                              activeTab === item.path
                                ? "bg-white text-[#e65f2b]"
                                : ""
                            }`}
                            onClick={() => handleProjectOptionClick(item)}
                          >
                            <div className="p-3 pl-4 text-[16px] flex items-center">
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
            {activeTab === "/allemployees" && <AllEmployeesTab />}
            {/* {activeTab === "/addproject" && <AddProject />} */}
            {/* Add other components for project options here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
