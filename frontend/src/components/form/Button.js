import React from "react";

const Button = ({ name, width }) => {
  const styles = {
    width: `${width}px`,
  };

  return (
    <button
      className="border rounded-md shadow-lg p-2 bg-[#635bff] text-white"
      style={styles}
    >
      {name}
    </button>
  );
};

export default Button;
