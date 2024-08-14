import React from "react";
import TableRow from "./TableRow";


const Table = ({ tradeData }) => {
  return (
    <table className="table-Wrapper border rounded-lg cursor-pointer">
      <thead className="text-[#1a1b25] text-sm">
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
          <th className="">ACTION</th>
          
        </tr>
      </thead>
      <hr />
      <tbody>
        {tradeData?.map((item) => (
          <div className="hover:bg-[#f4f7f9]">
            <TableRow item={item} />
            <hr/>
          </div>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
