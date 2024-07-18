// import React from 'react';
// import data from '../invoice.json';

// const AccountInvoice = () => {
//   return (
//     <div className='w-full md:w-[calc(100%-280px)] mx-6 md:mx-12 my-7'>
//         <h2 className='text-[#E65F2B] text-2xl md:text-3xl mb-8 md:mb-16'>Accounts/Invoice</h2>
//             <table className='min-w-full md:table border-collapse'>
//                 <thead style={{backgroundColor:'rgba(0, 152, 241, 0.3)'}}>
//                     <tr className="text-left">
//                         <th className="p-2">Invoice Number</th>
//                         <th className="p-2">Client</th>
//                         <th className="p-2">Date</th>
//                         <th className="p-2">Type</th>
//                         <th className="p-2">Status</th>
//                         <th className="p-2">Amount</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((item, index) => (
//                     <tr key={index} className="text-left font-medium text-[15px]">
//                         <td className="px-2">{item.Invoice_Number}</td>
//                         <td className="px-2">{item.Client}</td>
//                         <td className="px-2">{item.Date}</td>
//                         <td className="px-2">
//                             <img src={item.Type} alt="Type" />
//                         </td>
//                         <td className="py-2 font-normal">
//                             {item.Status === "Approved" ? (
//                                 <button className="text-white py-1 w-28 rounded-xl" style={{ backgroundColor: 'rgba(42, 143, 76, 1)' }}>Approved</button>
//                             ) : (
//                                 <button className="text-white py-1 w-28 rounded-xl" style={{ backgroundColor: 'rgba(247, 136, 34, 1)' }}>Pending</button>
//                             )}
//                         </td>
//                         <td className="p-2">{item.Amount}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//   );
// };

// export default AccountInvoice;
