// import React from "react";
// import { BsCheck2Circle } from "react-icons/bs";

// function Popup() {
//   return (
//     <div className="fixed inset-0 bg-[#0098f1] bg-opacity-10 flex justify-center items-center">
//       <div className="bg-[#0098f1] w-[320px] h-[240px] sm:w-[440px] sm:h-[320px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg text-white flex flex-col justify-center items-center">
//         <BsCheck2Circle className="text-3xl sm:text-4xl md:text-6xl mb-4" />
//         <p className="text-center text-xl sm:text-2xl">
//           New Department Added Successfully!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Popup;
// import React from "react";
// import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.png";
// import img3 from "../../assets/img3.png";

// const ResponsiveCards = () => {
//   return (
//     <div className="container mx-auto px-4 py-10 ">
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:lg:xl:grid-cols-3 gap-6 justify-items-center">
//         <div className="bg-white border-r-2 border-[#f6ac14] border-b-2 border-opacity-20 px-6  shadow-md text-center w-[350px] h-[250px] flex flex-col items-center">
//           <img src={img1} alt="Popular" className=" w-[130px] h-[130px]" />
//           <h2 className="text-[26px] font-bold mb-2 bg-gradient-to-r from-[#0098f1]  to-[#f6ac14] bg-clip-text text-transparent">
//             It's Popular
//           </h2>
//           <p className="text-sm">
//             Helps To Gain Knowledge And Jobs Worldwide Which Requires High
//             Technical Skills
//           </p>
//         </div>
//         <div className="bg-white px-6 border-r-2 border-[#f6ac14] border-b-2 border-opacity-20  shadow-md text-center w-[350px] h-[250px] flex flex-col items-center">
//           <img src={img2} alt="Promising" className=" w-[130px] h-[130px]" />
//           <h2 className="text-[26px] font-bold bg-gradient-to-r from-[#0098f1]  to-[#f6ac14] bg-clip-text text-transparent mb-2 text-gradient">
//             It's Promising
//           </h2>
//           <p className="text-sm">
//             Enter With Zero Skills And Gain The Advance Level Skills To Start
//             And Having A Dream Career
//           </p>
//         </div>
//         <div className="bg-white border-r-2 border-[#f6ac14] border-b-2 border-opacity-20  px-6  shadow-md text-center w-[350px] h-[250px] flex flex-col items-center">
//           <img src={img3} alt="Fun" className="w-[130px] h-[130px]" />
//           <h2 className="text-[26px] font-bold bg-gradient-to-r from-[#0098f1]  to-[#f6ac14] bg-clip-text text-transparent mb-2 text-gradient">
//             It's Fun
//           </h2>
//           <p className="text-sm">
//             Join With Interest Collaborate Into Passion With Your Creativity And
//             Skills To Experience Something New Every Day
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveCards;
// import React from "react";
// import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.png";
// import img3 from "../../assets/img3.png";
// import img4 from "../../assets/img3.png";
// import img5 from "../../assets/img3.png";

// const ResponsiveCards = () => {
//   return (
//     <div className="container mx-auto px-4 py-8 bg-yellow-100">
//       <h1 className="text-center text-2xl font-bold mb-8 text-gradient">
//         Features of <span className="text-blue-500">E-Education</span>
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[390px] h-[280px] flex flex-col items-center">
//           <img src={img1} alt="Feature 1" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">It's Popular</h2>
//           <p className="text-sm">
//             Helps To Gain Knowledge And Jobs Worldwide Which Requires High
//             Technical Skills
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[390px] h-[280px] flex flex-col items-center">
//           <img src={img2} alt="Feature 2" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">
//             It's Promising
//           </h2>
//           <p className="text-sm">
//             Enter With Zero Skills And Gain The Advance Level Skills To Start
//             And Having A Dream Career
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[390px] h-[280px] flex flex-col items-center">
//           <img src={img3} alt="Feature 3" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">It's Fun</h2>
//           <p className="text-sm">
//             Join With Interest Collaborate Into Passion With Your Creativity And
//             Skills To Experience Something New Every Day
//           </p>
//         </div>
//         <div className="bg-white md:sm:xl:2xl:3xl:ml-0 ml-96 p-6 rounded-lg shadow-md text-center w-[390px] h-[280px] flex flex-col items-center">
//           <img src={img4} alt="Feature 4" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">
//             It's Interactive
//           </h2>
//           <p className="text-sm">
//             Allows real-time interaction with instructors and fellow students.
//           </p>
//         </div>
//         <div className="bg-white p-6 md:sm:xl:2xl:3xl:ml-0 ml-96 rounded-lg shadow-md text-center w-[390px] h-[280px] flex flex-col items-center">
//           <img src={img5} alt="Feature 5" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">
//             It's Flexible
//           </h2>
//           <p className="text-sm">
//             Learn at your own pace and schedule from the comfort of your home.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveCards;

// import React from "react";
// import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.png";
// import img3 from "../../assets/img3.png";
// import img4 from "../../assets/img3.png";
// import img5 from "../../assets/img3.png";

// const ResponsiveCards = () => {
//   return (
//     <div className="container mx-auto px-4 py-8 bg-yellow-100">
//       <h1 className="text-center text-2xl font-bold mb-8 text-gradient">
//         Features of <span className="text-blue-500">E-Education</span>
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg: gap-6 justify-items-center">
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[360px] h-[260px] flex flex-col items-center">
//           <img src={img1} alt="Feature 1" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">It's Popular</h2>
//           <p className="text-sm">
//             Helps To Gain Knowledge And Jobs Worldwide Which Requires High
//             Technical Skills
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[360px] h-[260px] flex flex-col items-center">
//           <img src={img2} alt="Feature 2" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">
//             It's Promising
//           </h2>
//           <p className="text-sm">
//             Enter With Zero Skills And Gain The Advance Level Skills To Start
//             And Having A Dream Career
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[360px] h-[260px]flex flex-col items-center">
//           <img src={img3} alt="Feature 3" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">It's Fun</h2>
//           <p className="text-sm">
//             Join With Interest Collaborate Into Passion With Your Creativity And
//             Skills To Experience Something New Every Day
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[360px] h-[260px] flex flex-col items-center lg:ml-[410px]">
//           <img src={img4} alt="Feature 4" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">
//             It's Interactive
//           </h2>
//           <p className="text-sm">
//             Allows real-time interaction with instructors and fellow students.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center w-[360px] h-[260px] flex flex-col items-center lg:ml-[410px]">
//           <img src={img5} alt="Feature 5" className="mb-4 w-[60px] h-[60px]" />
//           <h2 className="text-xl font-bold mb-2 text-gradient">
//             It's Flexible
//           </h2>
//           <p className="text-sm">
//             Learn at your own pace and schedule from the comfort of your home.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveCards;

import React, { useState } from "react";

const CrudComponent = () => {
  //first use useState,with items,newitems,editing index,editing items
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingItem, setEditingItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setEditingItem(items[index]);
  };

  const handleUpdateItem = () => {
    const updatedItems = [...items];
    updatedItems[editingIndex] = editingItem;
    setItems(updatedItems);
    setEditingIndex(null);
    setEditingItem("");
  };

  const handleDeleteItem = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">CRUD Operations</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="p-2 border rounded w-full"
          placeholder="Add a new item"
        />
        <button
          onClick={handleAddItem}
          className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Item
        </button>
      </div>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 border rounded"
          >
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingItem}
                  onChange={(e) => setEditingItem(e.target.value)}
                  className="p-2 border rounded w-full mr-2"
                />
                <button
                  onClick={handleUpdateItem}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <div>
                  <button
                    onClick={() => handleEditItem(index)}
                    className="bg-yellow-500 text-white p-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
