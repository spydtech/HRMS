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
// import AllEmployeesTab from "./employeetab/AllEmployees";
// import LeaveRequestsTab from "./employeetab/LeaveRequest";
// import AttendanceTab from "./employeetab/Attendance";
// import DepartmentTab from "./employeetab/DepartmentList";
// import NavBar from "./employeetab/EmployeeNavBar"
// import AccountExpenses from "../account/AccountExpenses";
// import AccountPayments from "../account/AccountPayments";
// // import AccountInvoice from "../Account/AccountInvoice";
// import HolidayList from "../holiday/HolidayList"
// function SideBar() {
//   const [activeTab, setActiveTab] = useState("");
//   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
//   const [showAccountOptions, setShowAccountOptions] = useState(false);
//   const [selectedHeader, setSelectedHeader] = useState("");

//   const options = [
//     { title: "HR Dashboard", component: "", icon: <FaTachometerAlt /> },
//     { title: "Holidays", component: "HolidayList", icon: <FaCalendarAlt /> },
//     { title: "Events", component: "", icon: <FaCalendarCheck /> },
//     { title: "Activities", component: "", icon: <FaTasks /> },
//     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
//     { title: "Employee", component: "", icon: <FaUserFriends /> },
//     { title: "Account", component: "", icon: <FaUserFriends /> },
//     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
//     { title: "Report", component: "", icon: <FaFileAlt /> },
//     { title: "User", component: "", icon: <FaUser /> },
//     { title: "Authentication", component: "", icon: <FaLock /> },
//   ];

//   const employeeOptions = [
//     { title: "All Employees", component: "AllEmployeesTab", icon: <FaUsers /> },
//     { title: "Leave Requests", component: "LeaveRequestsTab", icon: <FaClipboardList /> },
//     { title: "Attendance", component: "AttendanceTab", icon: <FaCalendarCheck /> },
//     { title: "Department", component: "DepartmentTab", icon: <FaBuilding /> },
//   ];
//   const accountOptions = [
//     { title: "Payments", component: "PaymentsTab", icon: <FaUsers /> },
//     { title: "Expenses", component: "ExpensesTab", icon: <FaClipboardList /> },
//     // { title: "Invoice", component: "InvoiceTab", icon: <FaCalendarCheck /> },
//     // { title: "Department", component: "DepartmentTab", icon: <FaBuilding /> },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Employee") {
//       setShowEmployeeOptions(!showEmployeeOptions);
//     } else if (option.title === "Account") {
//       setShowAccountOptions(!showAccountOptions);
//     } else {
//       setActiveTab(option.component);
//       setShowEmployeeOptions(false);
//       setShowAccountOptions(false);
//     }
//   };

//   const handleEmployeeOptionClick = (option) => {
//     setActiveTab(option.component);
//     setShowEmployeeOptions(false);
//   };

//   const handleAccountOptionClick = (option) => {
//     setActiveTab(option.component);
//     setShowAccountOptions(false);
//   };

//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//   };

//   return (
//     <div className="relative">
//       <NavBar />
//       <div className="absolute top-0">
//         <div className="flex h-auto pb-10">
//           <div className="bg-[#0098f1] w-[240px] pt-10 pb-10 h-auto rounded-br-[48px]">
//             <div className="px-2 flex pb-5">
//               <img src={profile} className="rounded-full w-[70px] h-[70px]" alt="Profile" />
//               <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
//             </div>
//             <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
//               <span
//                 className={`cursor-pointer ${
//                   selectedHeader === "Hr" ? "underline decoration-2 underline-offset-8" : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Hr")}
//               >
//                 Hr
//               </span>
//               <span
//                 className={`cursor-pointer ${
//                   selectedHeader === "Projects" ? "underline decoration-2 underline-offset-8" : ""
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
//                         {showEmployeeOptions ? <FaChevronUp /> : <FaChevronDown />}
//                       </div>
//                     )}
//                     {option.title === "Account" && (
//                       <div className="ml-auto pr-4">
//                         {showAccountOptions ? <FaChevronUp /> : <FaChevronDown />}
//                       </div>
//                     )}
//                   </div>
//                   {option.title === "Employee" && showEmployeeOptions && (
//                     <div className="transition-all duration-500 ml-8">
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
//                   {option.title === "Account" && showAccountOptions && (
//                     <div className="transition-all duration-500 ml-8">
//                       {accountOptions.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                           onClick={() => handleAccountOptionClick(item)}
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
//             {activeTab === "AllEmployeesTab" && <AllEmployeesTab />}
//             {activeTab === "LeaveRequestsTab" && <LeaveRequestsTab />}
//             {activeTab === "AttendanceTab" && <AttendanceTab />}
//             {activeTab === "HolidayList" && <HolidayList />}
            // {activeTab === "DepartmentTab" && <DepartmentTab />}
            // {activeTab === "PaymentsTab" && <AccountExpenses />}
            // {activeTab === "ExpensesTab" && <AccountPayments />}
//             {/* {activeTab === "InvoiceTab" && <AccountInvoice />} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBar;

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
import profile from "../../assets/employee/profile/profile.jpg";
// import EmployeeTab from "./Employeetab/EmployeeTab";
import AllEmployees from "./employeetab/AllEmployees";
import LeaveRequestsTab from "./employeetab/LeaveRequest";
import AttendanceTab from "./employeetab/Attendance";
import DepartmentTab from "./employeetab/DepartmentList";
import AccountPayments from "../account/AccountPayments"
import NavBar from "./employeetab/EmployeeNavBar";

function SideBar() {
  const [activeTab, setActiveTab] = useState("");
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("");

  const options = [
    {
      title: "HR Dashboard",
      component: "",
      icon: <FaTachometerAlt />,
    },
    { title: "Holidays", component: "", icon: <FaCalendarAlt /> },
    { title: "Events", component: "", icon: <FaCalendarCheck /> },
    { title: "Activities", component: "", icon: <FaTasks /> },
    { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
    { title: "Employee", component: "", icon: <FaUserFriends /> },
    { title: "Account", component: "", icon: <FaUserFriends /> },
    { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
    { title: "Report", component: "", icon: <FaFileAlt /> },
    { title: "User", component: "", icon: <FaUser /> },
    { title: "Authentication", component: "", icon: <FaLock /> },
  ];

  const employeeOptions = [
    { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
    {
      title: "Leave Requests",
      component: "LeaveRequestsTab",
      icon: <FaClipboardList />,
    },
    {
      title: "Attendance",
      component: "AttendanceTab",
      icon: <FaCalendarCheck />,
    },
    { title: "Department", component: "DepartmentTab", icon: <FaBuilding /> },
  ];

  const accountOptions = [
    { title: "All Accounts", component: "AllEmployees", icon: <FaUsers /> },
    {
      title: "Account Requests",
      component: "LeaveRequestsTab",
      icon: <FaClipboardList />,
    },
    {
      title: "Account Payment",
      component: "PaymentsTab",
      icon: <FaCalendarCheck />,
    },
    { title: "Account Department", component: "DepartmentTab", icon: <FaBuilding /> },
  ];

  const handleOptionClick = (option) => {
    if (option.title === "Employee") {
      setShowEmployeeOptions(!showEmployeeOptions);
    }
    else if(option.title === "Account"){
      setShowAccountOptions(!showAccountOptions);
    }
     else {
      setActiveTab(option.component);
      setShowEmployeeOptions(false);
      setShowAccountOptions(false);
    }
  };

  const handleEmployeeOptionClick = (option) => {
    setActiveTab(option.component);
  };

  const handleAccountOptionClick = (option) => {
    setActiveTab(option.component);
  };

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  return (
    <>
    
    
    <div className="relative">
      <NavBar />
    </div>
    <div className="absolute top-0">

    <div className="flex h-auto pb-10 ">
      <div className="bg-[#0098f1] w-[240px] pt-10 pb-10 h-auto rounded-br-[48px]">
        <div className="px-2 flex pb-5">
          <img src={profile} className="rounded-full w-[70px] h-[70px]" />
          <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
        </div>
        <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
          <span
            className={`cursor-pointer  ${
              selectedHeader === "Hr"
                ? "underline decoration-2 underline-offset-8 "
                : ""
            }`}
            onClick={() => handleHeaderClick("Hr")}
          >
            Hr
          </span>
          <span
            className={`cursor-pointer  ${
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
                {option.title === "Account" && (
                  <div className="ml-auto pr-4">
                    {showAccountOptions ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                )}
              </div>
              {option.title === "Employee" && showEmployeeOptions && (
                <div className="transition-all duration-500 ml-8 ">
                  {employeeOptions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
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
              {option.title === "Account" && showAccountOptions && (
                <div className="transition-all duration-500 ml-8 ">
                  {accountOptions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                      onClick={() => handleAccountOptionClick(item)}
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
        {/* {activeTab === "EmployeeTab" && <EmployeeTab />} */}
        {activeTab === "AllEmployees" && <AllEmployees />}
        {activeTab === "LeaveRequestsTab" && <LeaveRequestsTab />}
        {activeTab === "AttendanceTab" && <AttendanceTab />}
        {activeTab === "DepartmentTab" && <DepartmentTab />}
        {/* {activeTab === "DepartmentTab" && <DepartmentTab />} */}
            {activeTab === "PaymentsTab" && < AccountPayments />}
            {activeTab === "ExpensesTab" && <AccountExpenses />}
      </div>
    </div>
    </div>
    </>
  );
}

export default SideBar;