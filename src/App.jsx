import { Routes, Route, BrowserRouter } from "react-router-dom";

import Sidebar from "./components/home/Sidebar";
// import EmployeeTab from "./components/home/employeetab/EmployeeTab";
import EmployeeNavBar from "./components/home/employeeTab/EmployeeNavBar";
import AllEmployees from "./components/home/employeeTab/AllEmployees";
import LeaveRequest from "./components/home/employeeTab/LeaveRequest";
import DepartmentList from "./components/home/employeeTab/DepartmentList";
import Attendance from "./components/home/employeeTab/Attendance";
// import Login from "./components/login/Login";
import NewEmployee from "./components/home/employeeForm/AddEmployee";
import AddDepartment from "./components/home/employeeForm/AddDepartment";
import AddLeavePage from "./components/home/employeeForm/AddLeavePage";
import EditDepartmentList from "./components/home/employeeForm/EditDepartmentList";
import EditEmployee from "./components/home/employeeForm/EditEmployee";
import Popup from "./components/home/Popup";
// import Todo from "./components/Todo";
import AddProject from "./components/home/projects/addProjects/AddProject";
// import EditDepartment from "./components/home/employeeForm/EditDepartment";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/employee" element={<EmployeeTab />} /> */}

          {/* <Route path="/navbar" element={<EmployeeNavBar />} /> */}
          <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leaverequest" element={<LeaveRequest />} />
          <Route path="/departmentlist" element={<DepartmentList />} />
          <Route path="/add-employee" element={<NewEmployee />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/add-leavePage" element={<AddLeavePage />} />
          <Route path="/popup" element={<Popup />} />
          {/* <Route path="/todo" element={<Todo />} /> */}
          <Route path="/addproject" element={<AddProject />} />
          <Route
            path="/edit-departmentList/:id"
            element={<EditDepartmentList />}
          />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
          {/* <Route path="/edit-department" element={<EditDepartment />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
