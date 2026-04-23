import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Input = ({
  type = "input",
  label,
  placeholder,
  name,
  options,
  defaultValue,
  focus,
}) => {
  if (type == "number")
    return (
      <NumberInput
        label={label}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
      />
    );
  if (type == "date")
    return (
      <DateInput
        label={label}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
      />
    );
  if (type == "select")
    return (
      <SelectInput
        label={label}
        placeholder={placeholder}
        name={name}
        options={options}
        defaultValue={defaultValue}
      />
    );

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      focus={focus}
    />
  );
};

const SelectInput = ({
  label,
  placeholder = "",
  name,
  options = [],
  defaultValue,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div tabIndex={0} className="select font-bold">
      <label htmlFor={name}>
        <p className="text-custom-text-tertiary little">{label}</p>
      </label>
      {/* <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="bg-custom-tetiary font-bold text-[15px] border text-custom-text-dark border-custom-border px-5 py-4 w-full rounded-sm mt-2 "
      >
        {options.map((item) => {
          console.log(item);
          return (
            <option className="appearance-none text-[15px] pt-4 py-6" value={item}>
              {item}
            </option>
          );
        })}
      </select> */}

      <div className="relative bg-custom-bg-card">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="w-full px-6 py-4 flex items-center justify-between border dark:border-transparent border-custom-border rounded-sm cursor-pointer hover:border-custom-accent text-left text-[15px]"
        >
          {selected}
          <ChevronDown size={15} />
        </button>

        {open && (
          <ul className="absolute z-10 w-full mt-1 bg-custom-bg-card border border-custom-bg-card rounded-lg shadow-soft">
            {options.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="px-6 border-custom-bg-card py-4 cursor-pointer hover:text-custom-accent 
                dark:hover:bg-custom-bg-card
                hover:bg-custom-bg-white text-[15px]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
const DateInput = ({ label, placeholder = "", name, defaultValue }) => {
  return (
    <div>
      <label htmlFor={name}>
        <p className="text-custom-text-tertiary little">{label}</p>
      </label>
      <input
        defaultValue={defaultValue}
        id={name}
        name={name}
        type="date"
        placeholder={placeholder}
        className="bg-custom-tetiary font-bold text-[15px] border text-custom-text-dark border-custom-border px-5 py-4 w-full rounded-sm mt-2 "
      />
    </div>
  );
};
const TextInput = ({
  label,
  placeholder = "",
  name,
  defaultValue = "",
  focus = false,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        <p className="text-custom-text-tertiary little">{label}</p>
      </label>
      <input
        autoFocus={focus}
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className=" bg-custom-tetiary font-bold text-[15px] border border-custom-border px-5 py-4 w-full rounded-sm mt-2 "
      />
    </div>
  );
};
const NumberInput = ({ label, placeholder = "", name, defaultValue }) => {
  return (
    <div>
      <label htmlFor={name}>
        <p className="text-custom-text-tertiary little">{label}</p>
      </label>
      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        type="number"
        placeholder={placeholder}
        className="bg-custom-tetiary font-bold text-[15px] border border-custom-border px-5 py-4 w-full rounded-sm mt-2 "
      />
    </div>
  );
};

export default Input;
