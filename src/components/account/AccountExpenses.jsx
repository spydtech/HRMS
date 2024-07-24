/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
const ExpensesList = [
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/accounts/Frame_masterCard.png",
    status: "Approved",
    amount: "$205",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/accounts/Frame_Paypal.png",
    status: "Pending",
    amount: "$205",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/accounts/Frame_Paypal.png",
    status: "Approved",
    amount: "$4,205",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/accounts/Frame_Visa.png",
    status: "Pending",
    amount: "$800",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/accounts/Frame_Paypal.png",
    status: "Approved",
    amount: "$355",
  },
];
const AccountExpenses = () => {
  const [ExpensesData, setExpenseData] = useState([]);
  useEffect(() => {
    setExpenseData(ExpensesList);
  }, []);
  return (
    <div className=" pl-8 mt-24">
      <h1 className="text-[#E65F2B] text-[20px]">
        <span>Accounts</span> / <span>Expenses</span>
      </h1>
      <div className="mt-14">
        <table className="w-full text-left">
          <thead className="bg-[#0098f1]  text-white ">
            <tr >
              <th className="py-2 px-4">Items</th>
              <th className="py-2 px-4">Order By</th>
              <th className="py-2 px-4">From</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Paid By</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {ExpensesData.map((data) => (
              <tr key={data.id} className="font-semibold">
                <td className="py-2 px-4">{data.item}</td>
                <td className="py-2 px-4">{data.orderBy}</td>
                <td className="py-2 px-4">{data.from}</td>
                <td className="py-2 px-4">{data.date}</td>
                <td className="py-2 px-4">
                  <img src={data.paidBy} alt="image" />
                </td>
                <td className="py-2 px-4">
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
                <td className="py-2 px-4">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountExpenses;