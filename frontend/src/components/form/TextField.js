import React from "react";

const TextField = ({
  type,
  name,
  value,
  label,
  placeholder,
  updateValue,
  color = "black",
  date,
  id,
  disabled = false,
  checked,
  children,
  width,
  checkBoxWeight,
  checkBoxHeight
}) => {
  let styles = {
    color: color,
    width: `${width}px`,
  };

  if (type === "checkbox") {
    styles = { ...styles, height: `${checkBoxHeight}rem`, width: `${checkBoxWeight}rem`};
  }

  const inputChangeHandler = (event) => {
    updateValue(event.target.name, event.target.value, event.target.type);
  };

  return (
    <div className="flex flex-col text-left justify-start m-1 ">
       <label className="text-left text-gray-600 font-semibold" htmlFor={`${name}-select`}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        style={styles}
        date={date}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        onChange={inputChangeHandler}
        className="py-1 px-2 border border-2 border-gray-300 rounded-lg"
      />
      {children}
    </div>
  );
};

export default TextField;