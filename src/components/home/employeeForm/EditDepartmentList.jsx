import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import SideBar from "../Sidebar";

const EditDepartment = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [head, setHead] = useState("");
  const [employees, setEmployees] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const departments = JSON.parse(localStorage.getItem("departments")) || [];
    const department = departments.find((dept) => dept.id === Number(id));
    if (department) {
      setName(department.department);
      setHead(department.departmentHead);
      setEmployees(department.totalEmployees);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDepartment = {
      id: Number(id),
      department: name,
      departmentHead: head,
      totalEmployees: employees,
    };
    const departments = JSON.parse(localStorage.getItem("departments")) || [];
    const updatedDepartments = departments.map((dept) =>
      dept.id === Number(id) ? updatedDepartment : dept
    );
    localStorage.setItem("departments", JSON.stringify(updatedDepartments));
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/departmentlist");
    }, 1500);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <SideBar />
      <div className="max-w-full px-14 py-11 rounded-lg bg-white">
        <h2 className="text-2xl font-semibold mb-10 mt-4 text-center text-orange-400">
          Edit Department
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:mx-[240px] mx-[0px]"
        >
          <div className="mb-6">
            <label className="block text-md font-medium text-gray-700">
              Department Name
            </label>
            <input
              className="w-full mt-4 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-md font-medium text-gray-700">
              Department Head
            </label>
            <input
              className="w-full mt-4 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
              value={head}
              onChange={(e) => setHead(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-md font-medium text-gray-700">
              Total Employees
            </label>
            <input
              className="w-full mt-4 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-9 text-md py-1 text-medium rounded-md focus:outline-none"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-white text-blue-500 border border-blue-400 px-7 text-sm font-medium rounded-md focus:outline-none"
              onClick={() => navigate("/departmentlist")}
            >
              Cancel
            </button>
          </div>
        </form>
        {showSuccess && (
          <div className="fixed inset-0 bg-[#0098f1] bg-opacity-10 flex justify-center items-center">
            <div className="bg-[#0098f1] w-[320px] h-[240px] sm:w-[440px] sm:h-[320px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg text-white flex flex-col justify-center items-center">
              <BsCheck2Circle className="text-3xl sm:text-4xl md:text-6xl mb-4" />
              <p className="text-center text-xl sm:text-2xl">
                Department Updated Successfully!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditDepartment;
