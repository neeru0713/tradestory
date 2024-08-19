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
  error,
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
       <label className="text-left text-[#4b5563] " htmlFor={`${name}-select`}>{label}</label>
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
        className="py-[8px] px-2 border border-1 rounded-lg text-[#4b5563]"
      />
      {children}
      {error && (
          <p className="text-red-500 text-xs" style={{ width: `${width}px` }}>
            {error}
          </p>
        )}
    </div>
  );
};

export default TextField;