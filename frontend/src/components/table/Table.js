import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineNextPlan } from "react-icons/md";

const Table = ({ data, columns, tableName }) => {
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
    const [showSportingIcons, setShowSportingIcons] = useState(false);

  useEffect(() => {
    // sortPNL();
    setSortedData(data);
  }, [data]);

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
    <table
      className="w-full h-full border rounded-lg cursor-pointer"
      style={{ "--column-count": columns.length }}
    >
      <thead className="text-[#1a1b25] bg-white text-sm sticky top-0 z-10 dark:bg-gray-800 dark:text-gray-200">
        <tr className="w-full flex p-2 text-sm border border-l-0 border-r-0 bg-[#f2f2f9] dark:bg-gray-700 ">
          {columns?.map((item) => (
            <th>{item.label}</th>
          ))}
        </tr>
      </thead>

      <tbody className="table-wrapper h-[500px] overflow-scroll dark:bg-gray-900 ">
        {sortedData &&
          sortedData?.map((item) => (
            <TableRow
              item={item}
              key={item._id}
              columns={columns}
              tableName={tableName}
              showSportingIcons={showSportingIcons}
              setShowSportingIcons={setShowSportingIcons}
            />
          ))}
      </tbody>
      <div className="flex gap-1 absolute top-[25%] left-[95%] border rounded-md border-gray-500 p-2 bg-gray-200">
        <MdOutlineContentCopy />
        <MdOutlineNextPlan />
      </div>
    </table>
  );
};

export default Table;
