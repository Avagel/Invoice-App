import React from "react";

const Input = ({
  type = "input",
  label,
  placeholder,
  name,
  options,
  defaultValue,
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
  return (
    <div>
      <label htmlFor={name}>
        <p className="text-custom-text-tertiary little">{label}</p>
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="bg-custom-tetiary font-bold text-[15px] border text-custom-text-dark border-custom-border px-5 py-4 w-full rounded-sm mt-2 "
      >
        {options.map((item) => {
          console.log(item);
          return (
            <option className="text-[15px]" value={item}>
              {item}
            </option>
          );
        })}
      </select>
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
const TextInput = ({ label, placeholder = "", name, defaultValue = "" }) => {
  return (
    <div>
      <label htmlFor={name}>
        <p className="text-custom-text-tertiary little">{label}</p>
      </label>
      <input
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
