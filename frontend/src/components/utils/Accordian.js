import React from "react";
import { GoChevronDown } from "react-icons/go";

const Accordian = ({ name, title, icon, children, onClick, isOpen }) => {
  return (
    <div
      className={`accordian-wrapper cursor-pointer rounded-lg ${
        isOpen ? "bg-white" : "bg-white"
      }`}
    >
      <div
        className={`accordian  flex flex-col gap-1 p-1 px-5 ${
          isOpen ? "pb-4 " : ""
        }`}
      >
        <div
          className="flex items-center justify-between p-2"
          onClick={() => {
            onClick(name);
          }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[16px] text-[#3f4754]">{icon}</span>
            <h1 className="text-[16px] text-left font-semibold text-[#3f4754]">
              {title}
            </h1>
          </div>
          <GoChevronDown
            className={`text-lg transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
