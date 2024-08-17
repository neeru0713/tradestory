import React from "react";
import Button from "../form/button/Button";
import { useDispatch } from "react-redux";
import { editTrade } from "../../redux/actions/tradeAction";
const drawer = ({ isOpen, onClose, tradeId, children }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editTrade(tradeId));
  };
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-[30%] bg-gray-50 shadow-gray-500 transform ${
          isOpen ? "translate-x-0 shadow-xl" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-2 left-4 text-xl text-md hover:rounded-md hover:bg-gray-200 cursor-pointer py-[2px] px-[4px]"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="p-4">
          <h2 className="text-lg font-semibold">Edit Trade</h2>
          {children}
        </div>
        <div className="absolute bottom-6 right-2">
          <Button
            name="Submit"
            width="150"
            type="primary"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default drawer;
