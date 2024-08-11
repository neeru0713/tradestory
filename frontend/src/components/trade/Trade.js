import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { TradeForm } from "./TradeForm";
import { TradeSelection } from "./TradeSelection";
import Modal from "../modal/Modal";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Trade = () => {
  const dispatch = useDispatch();
  const trade = useSelector((state) => state.trade);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const clickPlusHandler = () => {
    setShowModal(true);
  };

  async function getTrades() {
    const response = await axios.get("http://localhost:8080/api/trade");
    console.log(response.data);
    setData(response.data.trades);
  }

  useEffect(() => {
    getTrades();
  }, []);

  return (
    <div className="flex flex-col p-6 relative">
      <div className="flex items-center gap-6">
        <h1 className="text-[#30313d] text-lg font-semibold">Trade Manage</h1>
        <div
          onClick={clickPlusHandler}
          className="flex cursor-pointer items-center p-2 gap-2 text-[#4039ad] text-lg font-semibold  hover:bg-[#edecf9] hover:rounded-lg"
        >
          <h1>New Trade</h1>
          <FiPlus className="font-semibold" />
        </div>
        <div>
        {data?.map((item,index) => (
          <div>{item.pnl}</div>
          ))}
          </div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="New Trade"
        numberOfPages={2}
        height={800}
        width={600}
      >
        <TradeSelection />
        <TradeForm />
      </Modal>
    </div>
  );
};

export default Trade;
