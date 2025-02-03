import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import axios from "axios";
import { API_URL } from "../../config/config";
import { useSelector, useDispatch } from "react-redux";
import { getStrategyDetail } from "../../redux/actions/strategyAction";
import Table from "../table/Table";
import { BsInfoCircle } from "react-icons/bs";
import { openDrawer } from "../../redux/actions/drawerAction";
import Drawer from "../drawer/Drawer";


const StrategyInfo = (tableName) => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const strategyDetail = useSelector((state) => state.strategy.strategyDetail);

  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getStrategyDetail(name));
  }, [name]);

  // const toggleAccordion = () => {
  //   setIsOpen((prev) => !prev);
  // };


    const columns = [
      {
        key: "time",
        label: "Time",
      },
      {
        key: "date",
        label: "Date",
      },
      {
        key: "result",
        label: "Result",
      },
  ];
  
  const clickInfoHandler = () => {
      dispatch(openDrawer());
    };

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        {/* <div
          className="flex items-center justify-between p-4 cursor-pointer "
          onClick={toggleAccordion}
        > */}
        <div className="flex p-4 m-4 align-items items-center gap-3 cursor-pointer">
          <h1 className="text-2xl font-semibold ">{name}</h1>
          <BsInfoCircle onClick={clickInfoHandler} className="text-lg" />
          <Drawer>
            <h1>this is drawwr for strategy info</h1>
            </Drawer>
        </div>
        {/* <FaChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          /> */}
        {/* </div> */}

        {/* {isOpen && (
          <div className="p-4 border-t bg-gray-50">
            <p className="text-gray-700">{strategyDetail.description}</p>
          </div>
        )} */}

        <div className="table-container max-h-[calc(100vh-150px)] m-4 border w-[50%] ">
          <Table tableName="strategyDetail" columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default StrategyInfo;
