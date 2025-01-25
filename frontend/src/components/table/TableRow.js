import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTrade, deleteTrade } from "../../redux/actions/tradeAction";
import { TradeForm } from "../trade/TradeForm";
import Drawer from "../drawer/Drawer";
import ConfirmationModal from "../modal/ConfirmationModal";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";


const TableRow = ({ item, columns, tableName }) => {
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

  const mistakeTypeValuesOptions = {
    BP: "Bad Psychology",
    F: "FOMO",
    RCE: "Running Candle Entry",
    V: "Volatility",
    UM: "Unpredictable Market",
    S: "Sideways",
    G: "Greed",
    OE: "Over Expectation",
  };

  return (
    <>
      <tr className="w-full flex p-2 text-sm hover:bg-[#f4f7f9] border border-l-0 border-r-0">
        {tableName === "strategy" ? (
          <Link to={`/strategy/${item.name}`} className="flex w-full ml-[2rem]">
            {columns?.map((col) => (
              <td key={col.key} className="flex justify-between">
                {col.key === "actions" ? (
                  <div className="flex gap-5 items-center justify-center">
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
                  </div>
                ) : (
                  <div className="ml-[2rem]">{item[col.key]}</div>
                )}
              </td>
            ))}
          </Link>
        ) : (
          <>
            {columns?.map((col) => (
              <td key={col.key} className="flex justify-between">
                {col.key === "actions" ? (
                  <div className="flex gap-5 items-center justify-center">
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
                  </div>
                ) : (
                  <div className="ml-[2rem]">{item[col.key]}</div>
                )}
              </td>
            ))}
          </>
        )}
      </tr>

      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} tradeId={item._id}>
        <TradeForm />
      </Drawer>

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
