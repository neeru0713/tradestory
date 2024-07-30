import React, { useState, useEffect } from "react";
import TextField from "../form/TextField";
import Selector from "../form/Selector";
import Button from "../form/button/Button";
import Chip from "../utils/Chip";
import Accordian from "../utils/Accordian";
import { FaThList } from "react-icons/fa";
import Checkbox from "../form/checkbox/Checkbox";

import { FaInfoCircle } from "react-icons/fa";

export const TradeForm = () => {
  const [selectedTab, setSelectedTab] = useState("Basic Info");
  const [returns, setReturns] = useState(0);
  const [isAccordian1Open, setIsAccordian1Open] = useState(false);
  const [isAccordian2Open, setIsAccordian2Open] = useState(false);
  const getCurrentTime = () => {
    const today = new Date();
    const hh = String(today.getHours()).padStart(2, "0");
    const mm = String(today.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  };

  const handleAccordian = (accordianName) => {
    if (accordianName === "BasicInfo") {
      setIsAccordian1Open(!isAccordian1Open);
      setIsAccordian2Open(false)
    } else if (accordianName === "Checklist") {
      setIsAccordian2Open(!isAccordian2Open);
      setIsAccordian1Open(false)
    }
  };
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  const [tradeData, setTradeData] = useState({
    marketIndex: "",
    lotSize: 1,
    time: getCurrentTime(),
    date: getCurrentDate(),
    riskRewardRatio: "1",
    entryPrice: 0,
    exitPrice: 0,
    pnl: 0,
    backTest: false,
    mistakeTypeValue: "",
  });

  useEffect(() => {
    console.log("***** : ", tradeData);
  }, [tradeData]);

  useEffect(() => {
    let pnl = tradeData.exitPrice - tradeData.entryPrice;
    setTradeData((tradeData) => ({ ...tradeData, pnl: pnl }));

    let returnsVal =
      tradeData.entryPrice > 0
        ? ((tradeData.exitPrice - tradeData.entryPrice) /
            tradeData.entryPrice) *
          100
        : 0;
    setReturns(returnsVal);
  }, [tradeData.entryPrice, tradeData.exitPrice]);

  const inputChangeHandler = (name, value, type) => {
    let val = value;
    if (type === "number") {
      if (value) {
        val = parseFloat(value);
      } else {
        val = "";
      }
    }

    setTradeData((tradeData) => ({ ...tradeData, [name]: val }));
  };

  const checklistItems = [
    {
      value: "IT",
      label: "In the trend",
    },
    {
      value: "EMA",
      label: "9ema + 15ema",
    },
    {
      value: "HC",
      label: "Hammer Candle",
    },
    {
      value: "BBC",
      label: "Big Bar Candle",
    },
    {
      value: "BBWEW",
      label: "Big Bar With Equal Wicks",
    },
    {
      value: "WFP",
      label: "Waited For Pullback",
    },
    {
      value: "DE",
      label: "Direct Entry",
    },
  ];

  const [checklistState, setChecklistState] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const indexOptions = [
    {
      value: "N",
      label: "Nifty 50",
    },
    {
      value: "NB",
      label: "Nifty Bank",
    },
    {
      value: "FN",
      label: "Fin Nifty",
    },
    {
      value: "MN",
      label: "Midcap Nifty",
    },
    {
      value: "S",
      label: "Sensex",
    },
  ];

  const riskRewardRatioOptions = [
    {
      value: "1",
      label: "1: 1",
    },
    {
      value: "2",
      label: "1: 2",
    },
    {
      value: "3",
      label: "1: 3",
    },
    {
      value: "4",
      label: "1: 4",
    },
    {
      value: "5",
      label: "1: 5",
    },
    {
      value: "6",
      label: "1: 6",
    },
    {
      value: "7",
      label: "1: 7",
    },
    {
      value: "8",
      label: "1: 8",
    },
    {
      value: "9",
      label: "1: 9",
    },
    {
      value: "10",
      label: "1: 10",
    },
    {
      value: "11",
      label: "1: 10+",
    },
  ];

  return (
    <div className="trade-form relative flex flex-col gap-2">
      {/* <div className="flex flex-col">
        <div className="tabs flex gap-2 text-md cursor-pointer tab-wrapper font-semibold">
          <div className="flex flex-col tab">
            <h1
              onClick={() => setSelectedTab("Basic Info")}
              className={`hover:rounded-md py-1 px-2 mb-1 ${
                selectedTab === "Basic Info"
                  ? "text-[#523afd] hover:bg-[#f7f5fc]"
                  : "text-[#586171] hover:bg-gray-100"
              }`}
            >
              Basic Info
            </h1>
            {selectedTab === "Basic Info" && (
              <hr className="border border-1 border-[#523afd] mb-[-2px] z-[99]" />
            )}
          </div>
          <div className="flex flex-col tab">
            <h1
              onClick={() => setSelectedTab("Checklist")}
              className={`hover:rounded-md py-1 px-2 mb-1 ${
                selectedTab === "Checklist"
                  ? "text-[#523afd] hover:bg-[#f7f5fc]"
                  : "text-[#586171] hover:bg-gray-100"
              }`}
            >
              Checklist
            </h1>
            {selectedTab === "Checklist" && (
              <hr className="border border-1 border-[#523afd] mb-[-2px] z-[99]" />
            )}
          </div>
        </div>
        <hr className="w-full border" />
      </div> */}

      <div className="border rounded-lg mt-4">
        <Accordian
          name="BasicInfo"
          isOpen={isAccordian1Open}
          onClick={handleAccordian}
          title="Basic Info"
          icon={<FaInfoCircle />}
        >
          <div className="basic-info-wrapper h-[400px] flex flex-col overflow-scroll p-4 gap-2">
            <Selector
              type="text"
              name="marketIndex"
              value={tradeData.marketIndex}
              updateValue={inputChangeHandler}
              options={indexOptions}
              label="Market Index"
            />
            <TextField
              type="number"
              name="lotSize"
              value={tradeData.lotSize}
              updateValue={inputChangeHandler}
              label="LotSize"
            />
            <div className="flex flex-col gap-4">
              <TextField
                type="date"
                name="date"
                value={tradeData.date}
                updateValue={inputChangeHandler}
                label="Date"
              />
              <TextField
                type="time"
                name="time"
                value={tradeData.time}
                updateValue={inputChangeHandler}
                label="Time"
              />
            </div>
            <div className="flex flex-col gap-4">
              <TextField
                type="number"
                name="entryPrice"
                value={tradeData.entryPrice}
                updateValue={inputChangeHandler}
                label="Entry Price"
              />
              <TextField
                type="number"
                name="exitPrice"
                value={tradeData.exitPrice}
                updateValue={inputChangeHandler}
                label="Exit Price"
              />
            </div>
            <TextField
              type="number"
              name="pnl"
              disabled={true}
              value={tradeData.pnl}
              updateValue={inputChangeHandler}
              label="P&L Value"
            />

            <Selector
              name="riskRewardRatio"
              value={tradeData.riskRewardRatio}
              updateValue={inputChangeHandler}
              label="Risk/Reward Ratio"
              options={riskRewardRatioOptions}
            />

            {tradeData.pnl < 0 && (
              <Selector
                name="mistakeTypeValues"
                value={tradeData.mistakeTypeValue}
                updateValue={inputChangeHandler}
              />
            )}

            <div className="flex items-center gap-2">
              <TextField
                type="checkbox"
                checked={tradeData.backTest}
                name="Back Test"
                updateValue={inputChangeHandler}
              />
              <h1>BackTest</h1>
            </div>
          </div>
        </Accordian>
        <hr></hr>
        <Accordian
          name="Checklist"
          isOpen={isAccordian2Open}
          onClick={handleAccordian}
          title="Checklist"
          icon={<FaThList />}
        >
          <div id="checklist-wrapper" className="flex flex-col gap-2 m-2">
            {checklistItems?.map((item) => (
              <Checkbox
                data={item}
                checklistState={checklistState}
                setChecklistState={setChecklistState}
              />
            ))}
          </div>
        </Accordian>
      </div>
    </div>
  );
};
