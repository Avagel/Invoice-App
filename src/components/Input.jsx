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
  error,
  value,
  onChange,
}) => {
  if (type == "number")
    return (
      <NumberInput
        label={label}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        error={error}
        value={value || defaultValue}
        onChange={onChange}
      />
    );
  if (type == "date")
    return (
      <DateInput
        label={label}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        error={error}
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
      error={error}
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
      <input type="hidden" name="paymentTerms" value={selected} />

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

const DateInput = ({
  label,
  placeholder = "",
  name,
  defaultValue,
  error = "",
}) => {
  return (
    <div>
      <label htmlFor={name} className="flex w-full justify-between">
        <p className="little text-custom-text-tertiary little">{label}</p>
        {error && (
          <p className="text-custom-error right-0">{error.toLowerCase()} </p>
        )}
      </label>
      <input
        defaultValue={defaultValue}
        id={name}
        name={name}
        type="date"
        placeholder={placeholder}
        className={`bg-custom-tetiary font-bold text-[15px] border text-custom-text-dark  px-5 py-4 w-full rounded-sm mt-2 ${error ? "border-custom-error" : "border-custom-border dark:border-0"}`}
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
  error = "",
}) => {
  return (
    <div className="">
      <label htmlFor={name} className="flex w-full justify-between">
        <p className="little text-custom-text-tertiary little">{label}</p>
        {error && (
          <p className="text-custom-error right-0">{error.toLowerCase()} </p>
        )}
      </label>
      <input
        autoFocus={focus}
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`bg-custom-tetiary placeholder-custom-text-primary font-bold text-[15px] border  px-5 py-4 w-full rounded-sm mt-2 ${error ? "border-custom-error" : "border-custom-border dark:border-0"}`}
      />
    </div>
  );
};

const NumberInput = ({
  label,
  placeholder = "",
  name,
  defaultValue,
  error = "",
  onChange,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        <p className="text-custom-text-tertiary little">{label}</p>
      </label>
      <input
        min={1}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        type="number"
        placeholder={placeholder}
        className={`bg-custom-tetiary font-bold text-[15px] border px-5 py-4 w-full rounded-sm mt-2 ${error ? "border-custom-error" : "border-custom-border dark:border-0"}`}
      />
    </div>
  );
};

export default Input;
