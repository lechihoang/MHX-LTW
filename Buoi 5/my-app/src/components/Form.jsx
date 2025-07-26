import React from "react";

const Form = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm mb-8 inline-block">
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Name"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <input
          type="text"
          placeholder="City"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Add contact
        </button>
      </div>
    </div>
  );
};

export default Form;
