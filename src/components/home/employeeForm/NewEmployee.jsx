import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import SideBar from "../Sidebar";

const EMPLOYEE_KEY = "employee_data";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [empId, setEmpId] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!empId.trim()) newErrors.empId = "Employee ID is required";
    if (!contact.trim()) newErrors.contact = "Contact Number is required";
    if (!date.trim()) newErrors.date = "Joining Date is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!role.trim()) newErrors.role = "Role is required";
    if (!file) newErrors.file = "File is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newEmployee = {
        id: Date.now(),
        name,
        empId,
        contact,
        date,
        email,
        role,
        dp: "https://via.placeholder.com/40", // Example placeholder for dp
      };

      const existingEmployees =
        JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
      localStorage.setItem(
        EMPLOYEE_KEY,
        JSON.stringify([...existingEmployees, newEmployee])
      );

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/allemployees");
      }, 1000);
    }
  };

  const onButtonClick = () => {
    buttonRef.current.click();
  };

  const onFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <SideBar />
      <div className="ml-[240px] p-4 bg-fit">
        <div className="bg-white md:m-4 md:px-[88px] md:py-[44px] rounded-lg p-3">
          <h1 className="text-orange-600 md:text-4xl text-xl">
            Add New Employee
          </h1>
          <form className="md:my-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.name ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Employee ID */}
            <div className="mb-4">
              <label
                htmlFor="empId"
                className="block text-sm font-medium text-gray-700"
              >
                Employee ID
              </label>
              <input
                type="text"
                id="empId"
                name="empId"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.empId ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.empId && (
                <p className="mt-1 text-xs text-red-500">{errors.empId}</p>
              )}
            </div>

            {/* Contact Number */}
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.contact ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.contact && (
                <p className="mt-1 text-xs text-red-500">{errors.contact}</p>
              )}
            </div>

            {/* Joining Date */}
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Joining Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.date ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.date && (
                <p className="mt-1 text-xs text-red-500">{errors.date}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Role */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.role ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.role && (
                <p className="mt-1 text-xs text-red-500">{errors.role}</p>
              )}
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Photo
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*" // <-- Restrict to image files only
                onChange={onFileUpload}
                ref={buttonRef}
                className="hidden"
              />
              <div className="flex items-center mt-1">
                <button
                  type="button"
                  onClick={onButtonClick}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md focus:outline-none"
                >
                  Choose File
                </button>
                <span className="ml-2">
                  {file ? file.name : "No file chosen"}
                </span>
              </div>
              {errors.file && (
                <p className="mt-1 text-xs text-red-500">{errors.file}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#0098f1] text-white px-4 py-2 rounded-md focus:outline-none w-full"
            >
              Add Employee
            </button>
          </form>

          {/* Success message */}
          {showSuccess && (
            <div className="mt-4 bg-green-100 p-4 rounded-md flex items-center">
              <BsCheck2Circle className="text-green-600 text-2xl mr-2" />
              <span className="text-green-600 text-lg">
                Employee added successfully!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
