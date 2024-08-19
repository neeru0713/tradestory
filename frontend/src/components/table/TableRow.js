import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateTrade, deleteTrade } from "../../redux/actions/tradeAction";
import { TradeForm } from "../trade/TradeForm";
import Drawer from "../drawer/Drawer";
import ConfirmationModal from "../modal/ConfirmationModal";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const TableRow = ({ item }) => {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editClickHandler = () => {
    dispatch(updateTrade(item));
    setIsDrawerOpen(true);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTrade(item._id));
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const marketIndexMap = {
    N: "Nifty 50",
    NB: "Nifty Bank",
    FN: "Fin Nifty",
    MN: "Midcap Nifty",
    S: "Sensex",
  };

  return (
    <>
      <tr className="w-full flex p-2 text-sm hover:bg-[#f4f7f9] border-b">
        <td className="">{marketIndexMap[item.marketIndex]}</td>
        <td className="">{item.lotSize}</td>
        <td className="">{item.time}</td>
        <td className="">{item.date}</td>
        <td className="">{item.entryPrice}</td>
        <td className="">{item.exitPrice}</td>
        <td className={`${item.pnl > 0 ? 'text-green-600' : 'text-red-600'}`}>{item.pnl}</td>
        <td className="">{item.riskRewardRatio}</td>
        <td className="">
          <div className="flex justify-center items-center text-lg">
            {item.backTest === true ? (
              <IoIosCheckmarkCircleOutline className="text-[#3da40b]" />
            ) : (
              <IoIosCloseCircleOutline className="text-[#a33e0b]" />
            )}
          </div>
        </td>
        <td className="flex gap-5 items-center justify-center">
          <div
            onClick={handleDelete}
            className="rounded-md bg-[#f0f0f0] border hover:border-gray-400 hover:bg-gray-50 p-1 shadow-inner"
          >
            <IoTrashOutline />
          </div>

          <div
            onClick={editClickHandler}
            className="rounded-md bg-[#f0f0f0] p-1 shadow-inner border hover:border-gray-400 hover:bg-gray-50"
          >
            <FiEdit />
          </div>
        </td>

        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} tradeId={item._id}>
          <TradeForm />
        </Drawer>
      </tr>

      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message="Are you sure you want to delete this trade?"
      />
    </>
  );
};

export default TableRow;
