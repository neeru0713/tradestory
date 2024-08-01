import React, { useEffect } from "react";
import { PiRadioButtonFill } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { updateTrade } from "../../redux/actions/tradeAction";
export const TradeSelection = () => {
  const dispatch = useDispatch();
  const trade = useSelector((state) => state.trade);

  useEffect(() => {
    console.log("*******", trade);
  }, [trade]);

  const tradeTypes = [
    {
      label: "Interaday",
      value: "I",
    },
    {
      label: "Swing",
      value: "S",
    },
    {
      label: "Futures",
      value: "F",
    },
    {
      label: "Options",
      value: "O",
    },
    {
      label: "Crypto future",
      value: "CF",
    },
    {
      label: "Crypto option",
      value: "CO",
    },
  ];

  const handleSelectionChange = (event) => {
    let obj = {
      selectedTradeType: event.target.value,
    };
    console.log("000000", event.target.value);

    dispatch(updateTrade(obj));
  };

  return (
    <div className="flex flex-col gap-2 px-4">
      <h1 className="text-left text-xl text-[#383838] font-semibold m-2">
        Select your trading{" "}
        <span className="text-[#473fc0] font-bold">Style</span>
      </h1>
      {tradeTypes.map((tradeType) => (
        <div className="flex items-center gap-5 text-[#71757d] p-4 rounded-lg border">
          <input
            type="radio"
            class="h-4 w-4"
            value={tradeType.value}
            checked={trade.selectedTradeType === tradeType.value}
            onChange={handleSelectionChange}
          />
          <label>{tradeType.label}</label>
        </div>
      ))}
    </div>
  );
};
