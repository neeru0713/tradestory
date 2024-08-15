import React, { useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTrade } from "../../redux/actions/tradeAction";

import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const TableRow = ({ item }) => {
  const dispatch = useDispatch();
  const marketIndexMap = {
    N: "Nifty 50",
    NB: "Nifty Bank",
    FN: "Fin Nifty",
    MN: "Midcap Nifty",
    S: "Sensex",
  };

  return (
    <tr className="w-full flex p-2 text-sm">
      <td className="">{marketIndexMap[item.marketIndex]}</td>
      <td className="">{item.lotSize}</td>
      <td className="">{item.time}</td>
      <td className="">{item.date}</td>
      <td className="">{item.entryPrice}</td>
      <td className="">{item.exitPrice}</td>
      <td className="">{item.pnl}</td>
      <td className="">{item.riskRewardRatio}</td>
      <td className="">
        <div className="flex justify-center items-center">
          {item.backTest === true ? (
            <IoIosCheckmarkCircleOutline className="text-[#3da40b]" />
          ) : (
            <IoIosCloseCircleOutline className="text-[#a33e0b]" />
          )}
        </div>
      </td>
      <td>
        <RiDeleteBinLine onClick={() => dispatch(deleteTrade(item._id))} />
      </td>
    </tr>
  );
};

export default TableRow;
