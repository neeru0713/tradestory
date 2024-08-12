import React from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <table className="table-Wrapper border rounded-lg">
      <thead className="text-[#1a1b25] text-sm">
        <tr className="w-full flex justify-between p-2">
          <th className="w-[11%]">MARKET INDEX</th>
          <th className="w-[11%]">LOT SIZE</th>
          <th className="w-[11%]">TIME</th>
          <th className="w-[11%]">DATE</th>
          <th className="w-[11%]">ENTRY PRICE</th>
          <th className="w-[11%]">EXIT PRICE</th>
          <th className="w-[11%]">PNL</th>
          <th className="w-[12%]">R MULTIPLE</th>
          <th className="w-[11%]">BACK TEST</th>
        </tr>
      </thead>
      <hr />
      <tbody>
        {data?.map((item) => (
          <div>
            <TableRow item={item} />
            <hr/>
          </div>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
