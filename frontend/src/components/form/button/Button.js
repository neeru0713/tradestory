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
      
    };
    styles = { ...styles, ...customStyles };
  } else if (type === "secondary") {
    let customStyles = {
      background: "white",
      color: "#635bff",
    

    };
    styles = { ...styles, ...customStyles };
  }

  return (
    <button
      className={`${className} ${type === 'secondary' ? 'secondary-button' : null} border rounded-md shadow-lg p-2`}
      style={styles}
    >
      {name}
    </button>
  );
};

export default Button;
