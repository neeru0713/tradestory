import React, { useState } from "react";


import { GoChevronDown } from "react-icons/go";

const Accordian = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordian-wrapper border shadow-lg rounded-lg">
      <div className="accordian flex flex-col gap-2  px-6">
        <div
          className="flex items-center justify-between p-2"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <div className="flex items-center gap-5">
            {icon}
            {/* <icon className="text-2xl" /> */}
            <h1 className="text-lg text-left font-semibold">{title}</h1>
          </div>
          <GoChevronDown className="text-2xl" />
        </div>
        {isOpen && <div className="h-[300px] overflow-y-scroll">{children}</div>}
      </div>
    </div>
  );
};

export default Accordian;
