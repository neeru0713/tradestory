import React from "react";
import { SiShutterstock } from "react-icons/si";
import NavItems from "./NavItems";


const SideNav = () => {
  return (
    <div className="side-nav h-full border border-0 border-r-2 p-12 flex flex-col gap-10">
      <div className="flex items-center gap-4 ">
        <SiShutterstock className="text-[#4039ad]"/>
        <h1 className="text-[#4039ad] text-xl font-bold">Trade Story</h1>
      </div>
      <NavItems/>
    </div>
  );
};

export default SideNav;
