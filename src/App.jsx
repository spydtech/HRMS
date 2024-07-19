import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Sidebar from "./components/home/Sidebar";
// import EmployeeNavBar from "./components/home/employeetab/EmployeeNavBar";
// import AllEmployees from "./components/home/employeetab/AllEmployees";
// import LeaveRequest from "./components/home/employeetab/LeaveRequest";
// import DepartmentList from "./components/home/employeetab/DepartmentList";
import Login from "./components/login/Login";
// import NewEmployee from "./components/home/employeeForm/NewEmployee";
// import AddDepartment from "./components/home/employeeForm/AddDepartment";
// import AddLeavePage from "./components/home/employeeForm/AddLeavePage";
// import EditDepartmentList from "./components/home/employeeForm/EditDepartmentList";
// import EditEmployee from "./components/home/employeeForm/EditEmployee";
// import EditDepartment from "./components/home/employeeForm/EditDepartment"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/navbar" element={<EmployeeNavBar />} /> */}
          {/* <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/leaverequest" element={<LeaveRequest />} />
          <Route path="/departmentlist" element={<DepartmentList />} />
          <Route path="/new-employee" element={<NewEmployee />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/add-leavePage" element={<AddLeavePage />} />
          <Route path="/edit-departmentList" element={<EditDepartmentList />} />
          <Route path="/edit-employee" element={<EditEmployee />} />
          <Route path="/edit-department" element={<EditDepartment />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;