/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Sidebar from "./components/home/Sidebar";
import LeaveRequest from './components/home/employeetab/LeaveRequest';
import DepartmentList from "./components/home/employeetab/DepartmentList";
import AllEmployees from './components/home/employeetab/AllEmployees';
// import Login from "./components/login/Login";
import NewEmployee from "./components/home/employeeForm/NewEmployee";
import AddDepartment from "./components/home/employeeForm/AddDepartment";
import AddLeavePage from "./components/home/employeeForm/AddLeavePage";
import EditDepartmentList from "./components/home/employeeForm/EditDepartmentList";
import EditEmployee from "./components/home/employeeForm/EditEmployee";
import EditDepartment from "./components/home/employeeForm/EditDepartment"
// import EmployeeNavBar from "./components/home/employeetab/EmployeeNavBar"
import Login from "./components/authentication/login/Login";

import Register from './components/authentication/register/Register';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/navbar" element={<EmployeeNavBar />} /> */}
          <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/leaverequest" element={<LeaveRequest />} />
          {/* <Route path="/departmentlist" element={<DepartmentList />} /> */}
          <Route path="/new-employee" element={<NewEmployee />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/add-leavePage" element={<AddLeavePage />} />
          <Route path="/edit-departmentList/:id" element={<EditDepartmentList />} />
          <Route  path="/edit-employee/:id"  element={<EditEmployee />} />
          <Route path="/edit-department" element={<EditDepartment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;