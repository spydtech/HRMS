import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import accept from "../../../assets/employee/leaves/accept.png";
import reject from "../../../assets/employee/leaves/reject.png";

const sampleData = [
  {
    id: 1,
    dp: "https://via.placeholder.com/40",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    employeeId: "EMP001",
    joiningDate: "2023-01-01",
    role: "Developer",
    leaveType: "Sick Leave",
    date: "2023-05-15",
    reason: "Fever",
    department: "Engineering",
    departmentHead: "Jack Johnson",
    totalEmployees: 10,
  },
  {
    id: 2,
    dp: "https://via.placeholder.com/40",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    employeeId: "EMP002",
    joiningDate: "2023-02-01",
    role: "Designer",
    leaveType: "Casual Leave",
    date: "2023-07-20",
    reason: "Travel",
    department: "Design",
    departmentHead: "Emma Watson",
    totalEmployees: 8,
  },
  // Add more sample data as needed
];

function LeaveRequest() {
  return (
    <>
      <div id="main" className="h-screen w-screen bg-[#dbf2ff] p-4">
        <div className="ml-5">
          <p className="text-[#e65f2b] font-semibold">
            Employees/DepartmentList
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <div
            id="addemployee"
            className="w-auto inline-block bg-[#0098f1] h-[48px] rounded-lg justify-end items-center"
          >
            <button
              type="button"
              className="flex justify-center items-center w-[228px] h-[48px] text-white"
            >
              <FiPlusCircle className="text-2xl font-bold mr-2" /> Add New
              Department
            </button>
          </div>
        </div>
        <div id="table" className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-[#dbf2ff]"></th>

                <th className="py-2 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Department
                </th>
                <th className="py-2 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Department Head
                </th>
                <th className="py-2 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Total Employees
                </th>

                <th className="py-2 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((employee) => (
                <tr key={employee.id} className="bg-[#dbf2ff]">
                  <td className="py-2 px-4 border-b text-center">
                    <img
                      src={employee.dp}
                      alt="DP"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>

                  <td className="py-2 px-4 border-b text-center">
                    {employee.department}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {employee.departmentHead}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {employee.totalEmployees}
                  </td>

                  <td className="py-2 px-4 border-b text-center flex items-center justify-center space-x-2">
                    <button className="flex items-center">
                      <img src={accept} alt="Accept" className="w-6 h-6 mr-1" />
                    </button>
                    <button className="flex items-center">
                      <img src={reject} alt="Reject" className="w-6 h-6 mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default LeaveRequest;
