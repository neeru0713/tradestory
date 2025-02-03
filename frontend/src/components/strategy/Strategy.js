import { React, useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import Table from "../table/Table";
import Modal from "../modal/Modal";
import { createStrategy } from "../../redux/actions/strategyAction";
import { getStrategies } from "../../redux/actions/strategyAction";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modalAction";
import StrategyForm from "./StrategyForm";



const Strategy = (tableName) => {

  const dispatch = useDispatch();
  const strategies = useSelector((state) => state.strategy?.strategies);

    const createBtnClickHandler = () => {
    dispatch(openModal());
  };

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "accuracy",
      label: "Accuracy",
    },
    {
      key: "actions",
      label: "Actions",
    }
  ];

  const createStrategyHandler = () => {
    dispatch(createStrategy());
    };
    

    useEffect(() => {
    dispatch(getStrategies());
      },[]);
    
    
     useEffect(() => {
       console.log("...........", strategies);
     }, [strategies]);
    

  return (
    <div className="Strategy">
      <div className="flex w-[180px] p-[30px] justify-between items-center cursor-pointer text-[#4039ad]">
        <h1 className="font-semibold text-xl">Strategy</h1>
        <FaPlus
          onClick={createBtnClickHandler}
          className="font-bold text-lg mt-2"
        />
      </div>

      <div className="table-container max-h-[calc(100vh-150px)]  border-b m-4">
        <Table data={strategies} columns={columns} tableName="strategy" />
      </div>

      <Modal
        title="New Strategy"
        numberOfPages={1}
        saveClickHandler={createStrategyHandler}
      >
        <StrategyForm />
      </Modal>
    </div>
  );
};

export default Strategy;
