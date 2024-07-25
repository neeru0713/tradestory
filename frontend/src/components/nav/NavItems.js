import React from "react";
import NavItem from "./NavItem";
import { RiHome2Line } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";

const NavItems = () => {
  return (
    <ul className="flex flex-col gap-2">
      <NavItem icon={<RiHome2Line/>} name="Home" routePath="/"/>
      <NavItem icon={<IoIosCreate/>} name="Trade" routePath="/trade"/>
    </ul>
  );
};

export default NavItems;
