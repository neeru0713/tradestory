import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import axios from "axios";
import { API_URL } from "../../config/config";
import { useSelector, useDispatch } from "react-redux";
import { getStrategyDetail } from "../../redux/actions/strategyAction";

const StrategyDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const strategyDetail = useSelector((state) => state.strategy.strategyDetail);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getStrategyDetail(name));
  }, [name]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-[50%] mx-auto mt-8 border rounded-lg border-slate-300 shadow-md">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h1 className="text-lg font-bold">{name}</h1>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpen && (
        <div className="p-4 border-t bg-gray-50">
          <h2 className="text-md font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{strategyDetail.description}</p>
        </div>
      )}
    </div>
  );
};

export default StrategyDetail;
