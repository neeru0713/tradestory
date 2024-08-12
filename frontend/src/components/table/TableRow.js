import React from 'react';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';




const TableRow = ({ item }) => {

    const marketIndexMap = {
        N: "Nifty 50",
        NB: "Nifty Bank",
        FN: "Fin Nifty",
        MN: "Midcap Nifty",
        S: "Sensex",
      };
  return (
    <tr className="w-full flex justify-between p-2">
      <td className="w-[10%]">{marketIndexMap[item.marketIndex]}</td>
      <td className="w-[10%]">{item.lotSize}</td>
      <td className="w-[10%]">{item.time}</td>
      <td className="w-[10%]">{item.date}</td>
      <td className="w-[10%]">{item.entryPrice}</td>
      <td className="w-[10%]">{item.exitPrice}</td>
      <td className="w-[10%]">{item.pnl}</td>
      <td className="w-[10%]">{item.riskRewardRatio}</td>
      <td className="w-[12%]">
        {item.backTest === true ? <IoIosCheckmarkCircleOutline className='text-[#3da40b]'/> : <IoIosCloseCircleOutline className='text-[#a33e0b]'/>}
      </td>    </tr>
  );
};

export default TableRow;
