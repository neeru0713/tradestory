import React, { useState } from "react";


import { GoChevronDown } from "react-icons/go";

const Accordian = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordian-wrapper cursor-pointer ${isOpen ? 'border border-1 border-[#e6e6e6]' : 'bg-white'}`}>
      <div className={`accordian flex flex-col gap-1 px-2 ${isOpen ? 'pt-2 pb-8 px-4' : ''}`}>
        <div
          className="flex items-center justify-between p-2"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <div className="flex items-center gap-5">
            <span className="text-lg text-[#3f4754]">{icon}</span>
            {/* <icon className="text-2xl" /> */}
            <h1 className="text-lg text-left font-semibold text-[#3f4754]">{title}</h1>
          </div>
          <GoChevronDown className="text-2xl" />
        </div>
        {isOpen && <div className=" overflow-y-scroll border bg-white">{children}</div>}
      </div>
    </div>
  );
};

export default Accordian;
