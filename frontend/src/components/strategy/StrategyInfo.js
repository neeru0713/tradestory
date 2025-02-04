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
import TextField from "../form/TextField";
import { FiPlus } from "react-icons/fi";
import BackTestDataForm from "./BackTestDataForm";



const StrategyInfo = (tableName, showSubmitButton) => {
  const [isInfoIconClicked, setIsInfoIconClicked] = useState(false)
    const [isAddNewIconClicked, setIsAddNewIconClicked] = useState(false);
  const { name } = useParams();
  const dispatch = useDispatch();
  const strategyDetail = useSelector((state) => state.strategy.strategyDetail);
    // const strategyInput = useSelector((state) => state.strategy.strategyInput);

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

  //  const inputChangeHandler = (name, value, type) => {
  //     let val = value;
  //     if (type === "number") {
  //       if (value) {
  //         val = parseFloat(value);
  //       } else {
  //         val = "";
  //       }
  //     }
  //       let obj = {
  //         ...strategyInput,
  //       [name]: val,
  //     };
  //     dispatch(updateStrategy(obj));
  // };
  

  //  const descriptionChangeHandler = (e) => {
  //         let name = e.target.name;
  //         let val = e.target.value
  //         let obj = {
  //             ...strategyInput,
  //             [name]: val
  //         }
  //         dispatch(updateStrategy(obj));
  //     }

  const clickInfoHandler = () => {
    setIsInfoIconClicked(true);
    dispatch(openDrawer());
  };

  const clickBackTestDataFormHandler = () => {
    setIsAddNewIconClicked(true)
     dispatch(openDrawer());
  }

  const drawerCloseHandler = () => {
    setIsInfoIconClicked(false)
    setIsAddNewIconClicked(false)
  }

  return (
    <div className="">
      <div className="flex flex-col gap-2 ">
        {/* <div
          className="flex items-center justify-between p-4 cursor-pointer "
          onClick={toggleAccordion}
        > */}
        <div className="flex p-4 m-4 align-items items-center gap-3 cursor-pointer">
          <h1 className="text-2xl font-semibold ">{name}</h1>
          <BsInfoCircle onClick={clickInfoHandler} className="text-lg" />
          {isInfoIconClicked && (
            <Drawer
              showSubmitButton={false}
              drawerCloseHandler={drawerCloseHandler}
            >
              <h1 className="font-semibold text-2xl m-4 text-gray-800">
                Strategy Info
              </h1>
              <div className="flex flex-col text-left p-4 gap-4">
                <div className="">
                  <h1 className="text-gray-500">Name :</h1>
                  <p className="text-gray-800">{strategyDetail.name}</p>
                </div>
                <div className="text-gray-500">
                  <h1 className="">Accuracy :</h1>
                  <p className="text-gray-800">{strategyDetail.accuracy}</p>
                </div>
                <div className="">
                  <h1 className="text-gray-500">Description :</h1>
                  <p className="text-gray-800">{strategyDetail.description}</p>
                </div>
              </div>
              {/* <TextField
              type="string"
              name="name"
              value={strategyInput.name}
              updateValue={inputChangeHandler}
              label="Name"
            />
            <TextField
              type="string"
              name="accuracy"
              value={strategyInput.accuracy}
              updateValue={inputChangeHandler}
              label="Accuracy"
            />
            <textarea
              id="description"
              name="description"
              value={strategyInput.description}
              onChange={descriptionChangeHandler}
              placeholder="Description"
              rows={5}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
            </Drawer>
          )}
        </div>
        <div className="flex">
          <FiPlus
            onClick={clickBackTestDataFormHandler}
            className="flex m-4 text-algin text-right text-xl cursor-pointer"
          />
          {isAddNewIconClicked && (
            <Drawer drawerCloseHandler={drawerCloseHandler}>
              <BackTestDataForm />
            </Drawer>
          )}
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
