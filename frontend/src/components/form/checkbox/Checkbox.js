import React, { useEffect } from "react";

const Checkbox = ({ data, onChange }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    console.log("++++++++", value);
    console.log("++++++++", checked);
    onChange(event)
};


  return (
    <div className="checkbox flex items-center gap-5 text-[#71757d] p-4 border rounded-lg">
      <input
        type="checkbox"
        value={data.value}
        onChange={handleCheckboxChange}
      />
      <label className="text-[#4b5563]">{data.label}</label>
    </div>
  );
};
export default Checkbox;
