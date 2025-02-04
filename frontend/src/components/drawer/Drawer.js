import React, { useEffect } from "react";
import Button from "../form/button/Button";
import { editTrade } from "../../redux/actions/tradeAction";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../redux/actions/drawerAction";
// import { openDrawer } from "../../redux/actions/openAction";

const Drawer = ({
  tradeId,
  children,
  heading,
  submitHandler,
  showSubmitButton = true,
  drawerCloseHandler,
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.drawer.isOpen);

  useEffect(() => {
    console.log("..........", isOpen);
  }, [isOpen]);

  const handleSubmit = () => {
    submitHandler();
    dispatch(closeDrawer());
  };

  const handleClose = () => {
    drawerCloseHandler();
    dispatch(closeDrawer());
  };

  return (
    <>
      <div
        className={`drawer-overlay z-20 fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`drawer z-20 fixed top-0 right-0 h-full w-[30%] bg-gray-50 shadow-gray-500 transform   ${
          isOpen ? "translate-x-0 shadow-xl" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-2 left-4 text-xl text-md hover:rounded-md hover:bg-gray-200 cursor-pointer py-[2px] px-[4px]"
          onClick={handleClose}
        >
          &times;
        </button>

        <div className="p-4">
          <h2 className="text-lg font-semibold">{heading}</h2>
          {children}
        </div>
        <div className="absolute bottom-6 right-2">
          {showSubmitButton && (
            <Button
              name="Submit"
              width="150"
              type="primary"
              onClick={handleSubmit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;
