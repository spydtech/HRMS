import React, { useState } from "react";
import { MdCheck } from "react-icons/md";

function Userlist() {
  // State to control the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const handleSaveClick = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  setTimeout(() => {
    setIsPopupOpen(false);
  }, 5000);

  return (
    <>
      <div>
        <div className="bg-blue-100">
          <div className="bg-white  h-[1200px] ml-10 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg w-[1200px]">
            <h1 className="text-[#E65F2B] px-32 mt-10 ml-10 font-['Inter'] font-medium text-[20px] leading-[38.73px] tracking-[0.5%]">
              Add Department List
            </h1>

            <div className="grid grid-cols-1 px-32 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-6">
                <div>
                  <label className="block ml-10 text-[#201410] font-inter text-[17px] leading-[38.73px] tracking-[0.5%] mb-2">
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="w-[400px] ml-10 h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Enter your firstname"
                  />
                </div>
                <div>
                  <label className="block ml-10 text-[#201410] font-inter text-[15px] leading-[38.73px] tracking-[0.5%] mb-2">
                    E-Mail ID
                  </label>
                  <input
                    type="text"
                    className="w-[400px] ml-10 h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div>
                  <label className="block ml-10 text-[#201410] font-inter text-[15px] leading-[38.73px] tracking-[0.5%] mb-2">
                    Employee ID
                  </label>
                  <input
                    type="text"
                    className="w-[400px] ml-10 h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Enter your employee ID"
                  />
                </div>
                <div>
                  <label className="block ml-10 text-[#201410] font-inter text-[15px] leading-[38.73px] tracking-[0.5%] mb-2">
                    UserName
                  </label>
                  <input
                    type="text"
                    className="w-[880px] h-[48px] px-4 ml-10 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Select your role type"
                  />
                </div>
                <div>
                  <label className="block ml-10 text-[#201410] font-inter text-[17px] leading-[38.73px] tracking-[0.5%] mb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    className="w-[400px] ml-10 h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <div>
                  <label className="block text-[#201410] font-inter text-[17px] leading-[38.73px] tracking-[0.5%] mb-2">
                    Lastname
                  </label>
                  <input
                    type="text"
                    className="w-[400px] h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Enter your lastname"
                  />
                </div>
                <div>
                  <label className="block text-[#201410] font-inter text-[15px] leading-[38.73px] tracking-[0.5%] mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="w-[400px] h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label className="block text-[#201410] font-inter text-[15px] leading-[38.73px] tracking-[0.5%] mb-2">
                    Select Role Type
                  </label>
                  <input
                    type="text"
                    className="w-[400px] h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Select your role type"
                  />
                </div>
                <div>
                  <label className="block mt-28 text-[#201410] font-inter text-[17px] leading-[38.73px] tracking-[0.5%] mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="w-[400px] h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-[#E65F2B] mt-10 ml-10 font-['Inter'] font-medium text-[20px] leading-[38.73px] tracking-[0.5%]">
                  Module Permission
                </h2>

                <table className="w-[900px] ml-8">
                  <thead className="bg-[#0098F1] text-primary-foreground">
                    <tr>
                      <th className="px-4 py-2 text-white">Role</th>
                      <th className="px-4 py-2 text-white">Read</th>
                      <th className="px-4 py-2 text-white">Write</th>
                      <th className="px-4 py-2 text-white">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Super Admin</td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Admin</td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">HR Admin</td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Employee</td>
                      <td className="px-4 py-2 text-center">
                        <MdCheck className="h-8 w-8 text-white bg-[#2A8F4C] p-2 rounded-full" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-6 ml-[300px] mb-20 w-[400px] flex space-x-4 justify-center">
                  <button
                    type="submit"
                    onClick={handleSaveClick}
                    className="bg-[#0098F1] text-white px-4 py-2 rounded-md w-[200px] hover:bg-[#007bb5] focus:outline-none focus:ring-2 focus:ring-[#0098F1] focus:ring-opacity-50 transition duration-150 ease-in-out"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleClosePopup}
                    className="text-black px-4 py-2 ring-1 ring-[#0098F1] w-[200px] rounded-md hover:bg-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#0098F1] focus:ring-opacity-50 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0098F1] p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <MdCheck className="h-12 w-12  text-white mb-4" />
              <h2 className="text-white font-semibold text-lg mb-4">
                Saved Successfully
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Userlist;
