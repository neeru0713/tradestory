import React from "react";
import './Button.css';
const Button = ({ name, width, className, type }) => {
  let styles = {
    width: `${width}px`,
  };

  if (type === "primary") {
    let customStyles = {
      background: "#635bff",
      color: "white",
      fontWeight: "500"
      
    };
    styles = { ...styles, ...customStyles };
  } else if (type === "secondary") {
    let customStyles = {
      background: "white",
      color: "#0f0f0f",
    

    };
    styles = { ...styles, ...customStyles };
  }

  return (
    <button
      className={`${className} ${type === 'secondary' ? 'secondary-button' : null} border rounded-md shadow-lg p-2 shadow-lg`}
      style={styles}
    >
      {name}
    </button>
  );
};

export default Button;
