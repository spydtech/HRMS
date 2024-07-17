import React, { useState } from "react";
import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility toggle

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store credentials in local storage (Not recommended for production; use secure methods for handling passwords)
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // Clear the inputs
    setEmail("");
    setPassword("");
    // Optionally redirect or show a success message
    alert("Logged In Successfully");
  };

  return (
    <div className="bg-[#0098F1] w-screen h-screen flex items-center justify-center px-4 md:px-8 lg:px-12">
      <div
        className="relative w-full max-w-md md:max-w-lg lg:max-w-xl h-[350px] rounded-[30px] flex flex-col items-center justify-center shadow-xl p-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-4"
        >
          <div className="relative">
            <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-[50px] px-12 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
            />
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {showPassword ? (
                <IoMdEyeOff
                  className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <IoMdEye
                  className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-[50px] pl-12 pr-4 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
            />
            <div className="text-sm text-white mt-2 ml-96">
              <Link className="hover:underline cursor-pointer ">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#FFFFFF] text-[#0098F1] transition duration-300 hover:bg-[#e0f7ff] focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
