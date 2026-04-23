import { Plus } from "lucide-react";
import React from "react";

const Button = ({ type = "regular", text, full = false, onClick }) => {
  if (type == "error") {
    return <ErrorButton text={text} onClick={onClick} />;
  } else if (type == "edit") {
    return <EditButton text={text} full={full} onClick={onClick} />;
  } else if (type == "add") {
    return <AddButton text={text} onClick={onClick} />;
  } else if (type == "draft") {
    return <DraftButton text={text} onClick={onClick} />;
  } else {
    return <RegularButton text={text} onClick={onClick} />;
  }
};

const ErrorButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-custom-error  shrink-0 py-4 px-7 rounded-full text-white hover:bg-[#FF9797]"
    >
      <p className="bold">{text}</p>
    </button>
  );
};
const RegularButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-custom-accent  shrink-0 py-4 px-7 rounded-full text-white hover:bg-[#9277FF]"
    >
      <p className="bold">{text}</p>
    </button>
  );
};
const AddButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 flex bg-custom-accent h-full  p-1.5 rounded-3xl text-white  items-center pr-3.75 md:w-37.5 text-center hover:bg-[#9277FF]"
    >
      <div className="shrink-0 w-7 h-7 bg-white rounded-full text-custom-accent flex items-center justify-center font-bold">
        <Plus size={15} />
      </div>

      <p className="bold flex-1 ml-2 shrink-0 little md:hidden">{text}</p>
      <p className="bold flex-1 shrink-0 little hidden md:block">New Invoice</p>
    </button>
  );
};

const DraftButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-[#373B53] shrink-0 py-4 px-7 rounded-full text-custom-text-secondary hover:bg-[#1E2139]`}
    >
      <p className="bold">{text}</p>
    </button>
  );
};
const EditButton = ({ text, full, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-custom-tetiary  shrink-0 py-4 px-7 rounded-full text-custom-text-tertiary hover:bg-[#DFE3FA] ${full && "w-full"}`}
    >
      <p className="bold">{text}</p>
    </button>
  );
};

export default Button;
