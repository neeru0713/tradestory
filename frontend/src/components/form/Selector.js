import React from "react";

const Selector = ({
  options,
  name,
  value,
  updateValue,
  width,
  label,
  type,
  text
}) => {
  let styles = {
    width: `${width}px`,
  };

  const inputChangeHandler = (event) => {
    updateValue(event.target.name, event.target.value, event.target.type);
  };

  return (
    <div className="flex flex-col m-1 ">
      <label className="text-left text-[#4b5563]" htmlFor={`${name}-select`}>
        {label}
      </label>
      <select
        type={text}
        name={name}
        id={`${name}-select`}
        value={value}
        style={styles}
        onChange={inputChangeHandler}
        className="w-full py-1 px-2 border border-1 rounded-lg text-[#4b5563]"
      >
        {options &&
          options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Selector;
