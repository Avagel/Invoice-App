import React from "react";

const AddButton = ({ text }) => {
  return (
    <button className="flex bg-custom-accent h-full shrink-0 p-1.5 rounded-3xl text-white gap-2 items-center pr-3.75">
      <div className="w-7 aspect-square bg-white rounded-full"></div>

      <p className="bold">{text}</p>
    </button>
  );
};

export default AddButton;
