import axios from "axios";
import React, { useEffect, useState } from "react";

const AccountExpenses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get("./expenses_mock_data.json");
      setData(list.data);
    };
    getData();
  },[]);

  return (
    <div className="bg-[#E6F5FE] h-screen p-20">
      <h1 className="text-[#E65F2B] text-[20px]">
        <span>Accounts</span> / <span>Expenses</span>
      </h1>
      <div className="mt-14">
        <table className="w-full">
          <thead>
            <tr className="bg-[#8fcff5] text-left ">
              <th className="py-2 pl-5 ">Items</th>
              <th>Order By</th>
              <th>From</th>
              <th>Date</th>
              <th>Paid By</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id} className="font-semibold">
                <td className="py-2 pl-5">{data.item}</td>
                <td>{data.orderBy}</td>
                <td>{data.from}</td>
                <td>{data.date}</td>
                <td>
                  <img src={data.paidBy} alt="image" />
                </td>
                <td>
                  <p
                    type="button"
                    className={`${
                      data.status === "Approved"
                        ? "bg-[#2A8F4C]"
                        : "bg-[#F78822]"
                    } w-40 py-1 rounded-lg text-white text-center`}
                  >
                    {data.status}
                  </p>
                </td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountExpenses;
