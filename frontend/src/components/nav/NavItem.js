import React from "react";

import { Link } from "react-router-dom";
const NavItem = ({ icon, name, routePath }) => {
  return (
    <li className="flex items-center gap-4 ">
      <div className="text-[#6c7688] text-lg">{icon}</div>
      <p className="text-md text-[#414552]">
        <Link to={routePath}>{name}</Link>
      </p>
    </li>
  );
};

export default NavItem;
