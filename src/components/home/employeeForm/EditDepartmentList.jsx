import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

const DEPARTMENT_KEY = "department_data";

const EditDepartmentList = () => {
  const [depName, setDepName] = useState("");
  const [depHead, setDepHead] = useState("");
  const [totalEmp, setTotalEmp] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState({});

  const onEditClick = (id) => {
    const element = document.querySelector("#" + id);
    element.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    const newErrors = {};
    if (!depName.trim()) newErrors.depName = "Department Name is required";
    if(!depHead.trim()) newErrors.depHead = "Department Head is required"
    if(!totalEmp.trim()) newErrors.totalEmp = "Total Employees is required"

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data = { depName, depHead, totalEmp };
      localStorage.setItem(DEPARTMENT_KEY, JSON.stringify(data));
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }
  };

  return (
    <div className="bg-blue-100 p-4 md:p-16 h-screen">
      <div className="bg-white md:m-4 md:px-[88px] md:py-[44px] rounded-lg p-3">
        <h1 className="text-orange-600 md:text-4xl text-xl">
          Edit Department List
        </h1>
        <form className="md:my-4">
          <div className="flex flex-col gap-5 justify-center  md:items-center">
            <div className="md:w-[50%]">
              <div className="flex items-center justify-between md:mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="depName">
                  Department Name
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("depName")}
                  />
                </button>
              </div>
              <input
                id="depName"
                type="text"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setDepName(e.target.value)}
                value={depName}
              />
              {error.depName && <p className="text-red-500">{error.depName}</p>}
            </div>

            <div className="md:w-[50%]">
              <div className="flex items-center justify-between md:mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="depHead">
                  Department Head
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("depHead")}
                  />
                </button>
              </div>
              <input
                id="depHead"
                type="text"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setDepHead(e.target.value)}
                value={depHead}
              />
              {error.depHead && <p className="text-red-500">{error.depHead}</p>}
            </div>

            <div className="md:w-[50%]">
              <div className="flex items-center justify-between md:mr-4 my-2">
                <label className="font-bold text-lg" htmlFor="totalEmp">
                  Total Employees
                </label>
                <button type="button">
                  <FiEdit3
                    className="text-orange-600"
                    onClick={() => onEditClick("totalEmp")}
                  />
                </button>
              </div>
              <input
                id="totalEmp"
                type="number"
                className="border border-blue-300 w-full rounded-lg p-2"
                onChange={(e) => setTotalEmp(e.target.value)}
                value={totalEmp}
              />
              {error.totalEmp && <p className="text-red-500">{error.totalEmp}</p>}
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 mx-3 rounded-lg"
            >
              Save
            </button>
            <button className="font-bold px-8 py-2 text-blue-400 border border-blue-400 mx-3 rounded-lg">
              Cancel
            </button>
          </div>
        </form>
        {showSuccess && (
          <div className="  fixed inset-0 bg-blue-100 bg-opacity-50 flex justify-center items-center">
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

export default EditDepartmentList;
