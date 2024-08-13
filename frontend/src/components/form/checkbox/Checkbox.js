import React, { useEffect } from "react";

const Checkbox = ({ data , value}) => {

  return (
    <div className="checkbox flex items-center gap-5 text-[#71757d] p-4 border rounded-lg">
      <input
        type="checkbox"
        value={data.value}
        checked={value}
      />
      <label className="text-[#4b5563]">{data.label}</label>
    </div>
  );
};
export default Checkbox;
