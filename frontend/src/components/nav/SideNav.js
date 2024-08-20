import React from "react";
import { SiShutterstock } from "react-icons/si";
import NavItems from "./NavItems";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { logout } from "../../redux/actions/authActions";

const SideNav = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="side-nav h-full border border-0 border-r p-12 flex flex-col gap-10 ">
      <div className="flex items-center gap-4 justify-start">
        <SiShutterstock className="text-[#4039ad] flex-shrink-0" />
        <h1 className="text-[#4039ad] text-lg font-bold">Trade Story</h1>
      </div>
      <NavItems />
      <footer className="absolute bottom-10 text-left">
        <ul className="flex flex-col gap-2 text-white">
          {auth?.isAuthenticated === true ? (
            <>
              <li className="flex gap-2 items-center text-gray-900">
                <div>
                  <FaRegUserCircle className="h-6 w-6" />
                </div>
                <div className="flex gap-4">
                  <p className="font-semibold text-xl">
                    {auth.user?.username}
                  </p>
                  {auth.planName && auth.planName.length && (
                    <p className="text-sm text-white bg-[#4039ad] font-semibold rounded-lg px-2 py-1">
                      {auth.planName}
                    </p>
                  )}
                </div>
              </li>

              <li className="py-2">
                <button
                  className="w-full p-2 rounded-lg bg-gray-600 hover:bg-gray-500"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <div className="flex flex-col text-black">
              <li>
                <Link to="/login" className="hover:text-[#7743ea]">Login</Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-[#7743ea]">Register</Link>
              </li>
            </div>
          )}
        </ul>
      </footer>
    </div>
  );
};

export default SideNav;
