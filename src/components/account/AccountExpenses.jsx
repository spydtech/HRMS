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
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#0098f1]  text-white ">
              <th className="pl-5 pr-28 py-3 text-left">Items</th>
              <th className="px-14 py-3 text-left">Order By</th>
              <th className="px-14 py-3 text-left">From</th>
              <th className="px-14 py-3 text-left">Date</th>
              <th className="px-16 py-3 text-left">Paid By</th>
              <th className="px-10 py-3 text-left">Status</th>
              <th className="px-20 py-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {ExpensesData.map((data) => (
              <tr key={data.id} className="font-semibold">
                <td className="pl-5 pr-28 py-2  ">{data.item}</td>
                <td className="px-14 py-2   ">{data.orderBy}</td>
                <td className="px-14 py-2   ">{data.from}</td>
                <td className="px-14 py-2   ">{data.date}</td>
                <td className="px-16">
                  <img src={data.paidBy} alt="image" />
                </td>
                <td className="py-2 px-10">
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
                <td className="px-20 py-2 ">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountExpenses;
