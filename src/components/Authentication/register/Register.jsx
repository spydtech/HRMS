import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0098F1]">
      <div className="bg-gradient-to-b w-full rounded-3xl max-w-md" style={{background: "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)"}}
      >
        <h2 className="text-lg font-medium  text-white text-start pt-8 pl-7 "
        >Create an account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4  p-4 justify-center">
          <div className=' pl-3  '>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className=" w-[97%] p-3 pl-5 h-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='pl-3'>
            <input
              type="email"
              id="email"
              placeholder="E-Mail ID"
              className="w-[97%] p-3 pl-5 h-10 border  border-zinc-300  rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='pl-3'>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-[97%] pl-5 h-10 border border-zinc-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className=" pl-3 pt-2">
          <button
            type="submit"
            className="w-[97%] pl-3 text-xl  font-semibold h-14 rounded-md text-[#0098f1] bg-white   "
          >
            Register
          </button>
          </div>
        </form>
        
        <p className=" text-center text-white pb-8">
          Already have an account? {" "}
          <Link to="/login" className="">
           {" "} Login
          </Link>
        </p>
        
      </div>
    </div>
  );
}

export default Register;
