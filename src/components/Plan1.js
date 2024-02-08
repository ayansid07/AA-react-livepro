import React from "react";
const Plan1 = ({ title, description, price, image }) => {
  return (
    <div className="bg-slate-200 rounded-3xl shadow-md p-4 md:p-8">
      <div className="flex justify-center md:justify-start">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 md:w-40 md:h-40 rounded-full"
        />
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mt-4 md:mt-6">{title}</h2>
      <p className="text-gray-600 mt-2 md:mt-4">{description}</p>
      <div className="flex justify-between items-center mt-4 md:mt-6">
        <span className="text-gray-800 font-extrabold">{price}</span>
      </div>
      <button className="bg-green-500 text-center w-full rounded-3xl hover:bg-blue-600 text-white font-bold py-2 px-4">
        Try for free
      </button>
    </div>
  );
};

export default Plan1;