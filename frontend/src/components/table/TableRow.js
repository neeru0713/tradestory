import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTrade, deleteTrade } from "../../redux/actions/tradeAction";
import { TradeForm } from "../trade/TradeForm";
import Drawer from "../drawer/Drawer";
import ConfirmationModal from "../modal/ConfirmationModal";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { openDrawer } from "../../redux/actions/drawerAction";

const TableRow = ({
  item,
  columns,
  tableName,
  showSportingIcons = false,
  setShowSportingIcons,
  onMouseEnter,
  onMouseLeave,
}) => {
  const dispatch = useDispatch();
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editButtonClicked, SetEditButtonClicked] = useState(false);

  const editClickHandler = () => {
    dispatch(updateTrade(item));
    dispatch(openDrawer());
    SetEditButtonClicked(true);
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

  const drawerCloseHandler = () => {
    // setIsInfoIconClicked(false)
    // setIsAddNewIconClicked(false)
  }


  const updateTraderHandler = () => {
    dispatch(updateTrade(item));
  };

  const getValue = (keyName) => {
    if (keyName === "returns") {
      return item[keyName].toFixed(1)+'%';
    }
    if (keyName === "marketIndex") {
      return marketIndexMap[item[keyName]];
    }

    if (keyName === "mistakeType") {
      return mistakeTypeValuesOptions[item[keyName]];
    }

    if (keyName === "pnl") {
      if(item[keyName] < 0){
        return `- ₹${Math.abs(item[keyName])}`
      } else {
        return `₹${Math.abs(item[keyName])}`
      }
     
    }

    if (keyName === "entryPrice" || keyName === "exitPrice") {
      return `₹${item[keyName]}`;
    } else {
      return item[keyName];
    }
  };

  const getClassForCell = (key) => {
    if(key === 'pnl'){
      return item[key] >= 0 ? 'bg-green-100 p-1 rounded-md w-20' : 'bg-red-100 p-1 rounded-md w-20'
    }
  }

  return (
    <>
      <tr
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="w-full flex p-2 text-sm hover:bg-[#f4f7f9] border border-l-0 border-r-0"
      >
        {tableName === "strategy" ? (
          <Link to={`/strategy/${item.name}`} className="flex w-full ml-[1rem]">
            {columns?.map((col) => (
              <td key={col.key} className="flex">
                {col.key === "actions" ? (
                  <div className="flex gap-2">
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
                  <div className="">{item[col.key]}</div>
                )}
              </td>
            ))}
          </Link>
        ) : (
          <>
            {columns?.map((col) => (
              <td key={col.key} className="flex">
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
                  <div className={getClassForCell(col.key)}> {getValue(col.key)} </div>
                )}
              </td>
            ))}
          </>
        )}
      </tr>
      {editButtonClicked && (
        <Drawer tradeId={item._id} submitHandler={updateTraderHandler} drawerCloseHandler={drawerCloseHandler}>
          {/* <h1>hello</h1> */}
          <TradeForm />
        </Drawer>
      )}

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
