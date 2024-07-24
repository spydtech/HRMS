/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const initialData = [
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "07,Mar,2021",
    type: "src/assets/accounts/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Nexa Wordpress",
    date: "25,Jun,2021",
    type: "src/assets/accounts/Frame_masterCard.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Lucid HR Management",
    date: "12,Jul,2021",
    type: "src/assets/accounts/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "13,Jul,2021",
    type: "src/assets/accounts/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "07,Mar,2021",
    type: "src/assets/accounts/Frame_Visa.png",
    amount: "$4,205",
  },
];

const AccountPayments = () => {
  return (
    <div className=" mt-24 pl-8" >
      <h1 className="text-[#E65F2B] text-[20px]">
        <span>Accounts</span> / <span>Payments</span>
      </h1>
      <div className="mt-14">
      <table className="w-full text-left">
          <thead className="bg-[#0098F1] text-white">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Client Name</th>
              <th className="py-2 px-4">Project Name</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((data) => (
              <tr key={data.id} className="font-semibold">
                <td className="py-2 px-4">{data.id}</td>
                <td className="py-2 px-4">{data.clientName}</td>
                <td className="py-2 px-4">{data.projectName}</td>
                <td className="py-2 px-4">{data.date}</td>
                <td className="py-2 px-4"><img src={data.type} alt="image" /></td>
                <td className="py-2 px-4">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPayments;