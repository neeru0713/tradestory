import React from "react";
import NavItem from "./NavItem";
import { RiHome2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const NavItems = () => {
  return (
    <ul className="flex flex-col gap-2">
      {/* <NavItem icon={<RiHome2Line />} name="Home" routePath="/" /> */}
      <NavItem icon={<IoCreateOutline />} name="Trade" routePath="/trade" />
      <NavItem
        icon={<HiOutlineCurrencyRupee />}
        name="Pricing"
        routePath="/pricing"
      />
    </ul>
  );
};

export default NavItems;
