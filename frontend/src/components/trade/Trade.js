import React, { useState, useEffect, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { TradeForm } from "./TradeForm";
import TextField from "../form/TextField";
import { TradeSelection } from "./TradeSelection";
import Modal from "../modal/Modal";
import Table from "../table/Table";
import { CiCirclePlus } from "react-icons/ci";
import { createTrade } from "../../redux/actions/tradeAction";
import { filterTable } from "../../redux/actions/filterActions";
import { editTrade } from "../../redux/actions/tradeAction";
import { useSelector, useDispatch } from "react-redux";
import { getTrades } from "../../redux/actions/tradeAction";
import { openModal } from "../../redux/actions/modalAction";
import Selector from "../form/Selector";
import Drawer from "../drawer/Drawer";

const Trade = (tableName, showSubmitButton) => {
  const dispatch = useDispatch();
  const trade = useSelector((state) => state.trade);
  const filter = useSelector((state) => state.filter);
  const tradeData = useSelector((state) => state.trade.tradeData);
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  const columns = [
    {
      key: "marketIndex",
      label: "Market Index",
    },
    {
      key: "lotSize",
      label: "Lot Size",
    },
    {
      key: "time",
      label: "Time",
    },
    {
      key: "date",
      label: "Date",
    },
    {
      key: "entryPrice",
      label: "Entry Price",
    },
    {
      key: "exitPrice",
      label: "Exit Price",
    },
    {
      key: "pnl",
      label: "PNL",
    },
    {
      key: "returns",
      label: "Returns",
    },
    {
      key: "mistakeType",
      label: "Mistake Type",
    },
    {
      key: "rMultiple",
      label: "R Multiple",
    },
    {
      key: "backTest",
      label: "Back Test",
    },
    {
      key: "actions",
      label: "Actions",
    },
  ];

  const clickPlusHandler = () => {
    dispatch(openModal());
  };

  const dateOptions = [
    {
      value: "EQUAL",
      label: "is equal to",
    },
    {
      value: "BETWEEN",
      label: "is between",
    },
  ];

  const filterClickHandler = () => {
    setIsOpen(true);
  };

  const createTradeHandler = () => {
    dispatch(createTrade());
  };

  const editTradeHandler = () => {
    dispatch(editTrade());
  };

  const inputChangeHandler = (name, value, type) => {
    let obj = {
      type: value,
      value: "",
    };
    dispatch(filterTable({ date: obj }));
  };

  let styles = {
    fontWeight: 500,
    color: "black",
  };

  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    dispatch(getTrades());
  }, []);

  return (
    <div className="flex flex-col p-8 relative">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-[#30313d] text-lg font-bold">Trade Manage</h1>
          <div
            onClick={clickPlusHandler}
            className="flex cursor-pointer items-center p-2 gap-3 text-[#4039ad] text-lg font-bold hover:bg-[#edecf9] hover:rounded-lg"
          >
            <h1>New Trade</h1>
            <FiPlus className="font-bold text-xl" />
          </div>
        </div>
        {/* <div className="relative">
          <div
            onClick={filterClickHandler}
            className="flex border outline-dashed rounded-full w-max px-2 items-center gap-2 text-[#586173] hover:bg-[#f2f2fa] cursor-pointer"
          >
            <CiCirclePlus />
            <h1>Date</h1>
          </div>
          {isOpen && (
            <div
              ref={filterRef}
              className="border absolute shadow-xl z-[999] bg-white px-10 m-2 rounded-lg"
            >
              <h1 className="font-semibold m-2 gap-2">
                Filter by created date
              </h1>
              <Selector
                type="text"
                name="date"
                value={filter.date.type}
                updateValue={inputChangeHandler}
                style={styles}
                options={dateOptions}
              />
              {filter.date.type === "EQUAL" ? (
                <TextField
                  type="date"
                  name="equalDate"
                  value={filter.date.value}
                  updateValue={inputChangeHandler}
                />
              ) : filter.date.type === "BETWEEN" ? (
                <div className="flex gap-2">
                  <TextField
                    type="date"
                    name="startDate"
                    value={filter.date.value}
                    updateValue={inputChangeHandler}
                  />
                  <TextField
                    type="date"
                    name="endDate"
                    value={filter.date.value}
                    updateValue={inputChangeHandler}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div> */}
        <div className="table-container max-h-[calc(100vh-150px)] overflow-y-scroll border-b">
          <Table data={tradeData} columns={columns} tableName="trade" />
        </div>
      </div>

      <Modal
        title="New Trade"
        numberOfPages={2}
        height={700}
        width={600}
        saveClickHandler={createTradeHandler}
      >
        <TradeSelection />
        <TradeForm />
      </Modal>
      {/* <Drawer submitHandler={editTradeHandler} showSubmitButton={true} >
        <h1>Edit trade</h1>
        </Drawer> */}
    </div>
  );
};

export default Trade;
