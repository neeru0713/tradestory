import React from "react";
import TableRow from "./TableRow";

const Table = ({ tradeData }) => {
  return (
    <table className="table-Wrapper border rounded-lg cursor-pointer">
      <thead className="text-[#1a1b25] text-sm border-b">
        <tr className="w-full flex p-2 text-sm">
          <th className="">MARKET INDEX</th>
          <th className="">LOT SIZE</th>
          <th className="">TIME</th>
          <th className="">DATE</th>
          <th className="">ENTRY PRICE</th>
          <th className="">EXIT PRICE</th>
          <th className="">PNL</th>
          <th className="">R MULTIPLE</th>
          <th className="">BACK TEST</th>
          <th className="">ACTIONS</th>
        </tr>
      </thead>
     

      <tbody>
        {tradeData?.map((item) => (
          <TableRow item={item} key={item._id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
