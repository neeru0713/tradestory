import React, {useState} from "react";
import { PiRadioButtonFill } from "react-icons/pi";

export const TradeSelection = () => {
    const [selectedTradeType, setSelectedTradeType] = useState("");

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
    setSelectedTradeType(event.target.value)
  }

  return (
    <div className="flex flex-col gap-2">
      {tradeTypes.map((tradeType) => (
        <div className="flex items-center gap-5 text-[#71757d] p-4">
          <input
            type="radio"
            value={tradeType.value}
            onChange={handleSelectionChange}
          />
          <label>{tradeType.label}</label>
        </div>
      ))}
    </div>
  );
};
