import React from 'react';

const holidays = [
  { day: "Thursday", date: "25 Apr 2024", name: "Maharshi Parasuram Jayanti" },
  
  // Add more holidays here
];

function HolidayList() {
  return (
    <div className=" h-screen" style={{background: "#0098F11A"}} >
    <div className="p-4 " >
      <h2 className="text-xl font-bold text-[#E65F2B]  mb-4">Holidays List</h2>
      <table className="min-w-full ">
        <thead className="" style={{background:" rgba(0, 152, 241, 0.1)"}}>
          <tr >
            <th className="py-2 px-4 text-left">Day</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Holiday Name</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index} className=" " >
              <td className="py-2 px-4 ">{holiday.day}</td>
              <td className="py-2 px-4 ">{holiday.date}</td>
              <td className="py-2 px-4 ">{holiday.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default HolidayList;
