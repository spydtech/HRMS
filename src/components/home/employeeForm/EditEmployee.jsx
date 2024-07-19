import React, { useRef, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

const EMPLOYEE_KEY = "employee_data";

const EditEmployee = () => {
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

  const onEditClick = (id) => {
    const element = document.querySelector("#" + id);
    element.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
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
      const data = {
        name,
        empId,
        contact,
        date,
        email,
        role,
        file: URL.createObjectURL(file),
      };
      localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(data));
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }
  };

  const onButtonClick = () => {
    buttonRef.current.click();
  };

  const onfileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="bg-blue-100 p-4 md:p-16 bg-fit md:h-screen">
      <div className="bg-white md:m-4 md:px-[88px] md:py-[44px] rounded-lg p-3">
        <h1 className="text-orange-600 md:text-4xl text-xl">Edit Employee</h1>
        <form className="md:my-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div>
              <div className="flex items-center justify-between mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="name">
                  Name
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("name")}
                  />
                </button>
              </div>
              <input
                id="name"
                type="text"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="E_id">
                  Employee ID
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("empId")}
                  />
                </button>
              </div>
              <input
                id="empId"
                type="text"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setEmpId(e.target.value)}
                value={empId}
              />
              {errors.empId && <p className="text-red-500">{errors.empId}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="contact">
                  Contact Number
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("contact")}
                  />
                </button>
              </div>
              <input
                id="contact"
                type="number"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
              {errors.contact && <p className="text-red-500">{errors.contact}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="date">
                  Joining Date
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("date")}
                  />
                </button>
              </div>
              <input
                id="date"
                type="date"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              {errors.date && <p className="text-red-500">{errors.date}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="email">
                  E-mail ID
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("email")}
                  />
                </button>
              </div>
              <input
                id="email"
                type="email"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="role">
                  Role
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("role")}
                  />
                </button>
              </div>
              <input
                id="role"
                type="text"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              />
              {errors.role && <p className="text-red-500">{errors.role}</p>}
            </div>
          </div>
          <div className="mt-10 border border-blue-300 w-full rounded-lg p-2">
            <button
              type="button"
              onClick={onButtonClick}
              className="border bg-orange-600 px-8 py-1 rounded-md text-white"
            >
              Choose File
            </button>
            <input
              id="file"
              type="file"
              className=""
              ref={buttonRef}
              onChange={onfileUpload}
              hidden
              multiple
            />
            
          </div>
          {errors.file && <p className="text-red-500">{errors.file}</p>}
          <div className="mt-10 flex justify-center gap-4 ">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-1  rounded-lg"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button className="font-bold px-8 py-1 text-blue-400 border border-blue-400  rounded-lg">
              Cancel
            </button>
          </div>
        </form>
        {showSuccess && (
          <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#2a97db] py-8 px-4 md:py-10 md:px-16 rounded-lg">
              <div className=" md:mt-4 flex flex-col justify-center items-center gap-3">
                <BsCheck2Circle className="text-white text-[24px] md:text-[80px]" />
                <span className="text-white text-lg md:text-2xl text-center">
                  Successfully Save The <br /> Changes
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditEmployee;
