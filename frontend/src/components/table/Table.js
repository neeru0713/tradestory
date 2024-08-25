import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Table = ({ tradeData }) => {
  const [sortedData, setSortedData] = useState(tradeData);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(()=>{
    sortPNL()
    setSortedData(tradeData)
  }, [tradeData])

  const sortPNL = () => {
    const sorted = [...sortedData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.pnl - b.pnl;
      } else {
        return b.pnl - a.pnl;
      }
    });

    setSortedData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <table className="w-full h-full border rounded-lg cursor-pointe">
      <thead className="text-[#1a1b25] bg-white text-sm sticky top-0 z-10 dark:bg-gray-800 dark:text-gray-200">
        <tr className="w-full flex p-2 text-sm border border-l-0 border-r-0 bg-[#f2f2f9] dark:bg-gray-700">
          <th className="">MARKET INDEX</th>
          <th className="">LOT SIZE</th>
          <th className="">TIME</th>
          <th className="">DATE</th>
          <th className="">ENTRY PRICE</th>
          <th className="">EXIT PRICE</th>
          <th className="cursor-pointer" onClick={sortPNL}>
            PNL {sortOrder === "asc" ? "↓" : "↑"}
          </th>
          <th className="">RETURNS </th>
          <th className="">MISTAKE TYPE </th>
          <th className="">R MULTIPLE</th>
          <th className="">BACK TEST</th>
          <th className="">ACTIONS</th>
        </tr>
      </thead>

      <tbody className="table-wrapper h-[500px] overflow-scroll dark:bg-gray-900">
        {sortedData?.map((item) => (
          <TableRow item={item} key={item._id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
