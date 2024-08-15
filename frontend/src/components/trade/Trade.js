import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { TradeForm } from "./TradeForm";
import { TradeSelection } from "./TradeSelection";
import Modal from "../modal/Modal";
import axios from "axios";
import Table from "../table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getTrades } from "../../redux/actions/tradeAction";

const Trade = () => {
  const dispatch = useDispatch();
  const tradeData = useSelector((state) => state.trade.tradeData);
  const [showModal, setShowModal] = useState(false);

  const clickPlusHandler = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getTrades());
  }, []);

  return (
    <div className="flex flex-col p-8 relative">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-[#30313d] text-lg font-semibold">Trade Manage</h1>
          <div
            onClick={clickPlusHandler}
            className="flex cursor-pointer items-center p-2 gap-2 text-[#4039ad] text-lg font-semibold  hover:bg-[#edecf9] hover:rounded-lg"
          >
            <h1>New Trade</h1>
            <FiPlus className="font-semibold" />
          </div>
        </div>
        <Table tradeData={tradeData} />
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="New Trade"
        numberOfPages={2}
        height={800}
        width={600}
      >
         <TradeForm />
        <TradeSelection />
       
      </Modal>
    </div>
  );
};

export default Trade;
