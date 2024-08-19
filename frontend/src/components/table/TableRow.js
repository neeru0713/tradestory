import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateTrade, deleteTrade } from "../../redux/actions/tradeAction";
import { TradeForm } from "../trade/TradeForm";
import Drawer from "../drawer/Drawer";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const TableRow = ({ item }) => {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const editClickHandler = () => {
    dispatch(updateTrade(item));
    setIsDrawerOpen(true);
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
      <tr className="w-full flex p-2 text-sm hover:bg-[#f4f7f9] dark:hover:bg-gray-700 border-b dark:border-gray-600">
        <td className="text-black dark:text-white">{marketIndexMap[item.marketIndex]}</td>
        <td className="text-black dark:text-white">{item.lotSize}</td>
        <td className="text-black dark:text-white">{item.time}</td>
        <td className="text-black dark:text-white">{item.date}</td>
        <td className="text-black dark:text-white">{item.entryPrice}</td>
        <td className="text-black dark:text-white">{item.exitPrice}</td>
        <td className={`${item.pnl > 0 ? 'text-green-600' : 'text-red-600'} dark:text-green-400 dark:text-red-400`}>{item.pnl}</td>
        <td className="text-black dark:text-white">{item.riskRewardRatio}</td>
        <td className="">
          <div className="flex justify-center items-center text-lg">
            {item.backTest === true ? (
              <IoIosCheckmarkCircleOutline className="text-[#3da40b] dark:text-green-500" />
            ) : (
              <IoIosCloseCircleOutline className="text-[#a33e0b] dark:text-red-500" />
            )}
          </div>
        </td>
        <td className="flex gap-5 items-center justify-center">
          <div
            onClick={() => dispatch(deleteTrade(item._id))}
            className="rounded-md bg-[#f0f0f0] dark:bg-gray-700 border hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 p-1 shadow-inner"
          >
            <IoTrashOutline className="text-black dark:text-white" />
          </div>

          <div
            onClick={editClickHandler}
            className="rounded-md bg-[#f0f0f0] dark:bg-gray-700 p-1 shadow-inner border hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <FiEdit className="text-black dark:text-white" />
          </div>
        </td>

        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} tradeId={item._id}>
          <TradeForm />
        </Drawer>
      </tr>
    </>
  );
};

export default TableRow;
