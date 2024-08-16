import { getTrades } from "../actions/tradeAction";
import {
  UPDATE_TRADE,
  CREATE_TRADE,
  CREATE_TRADE_SUCCESS,
  CREATE_TRADE_FAIL,
  GET_TRADES,
  DELETE_TRADE_SUCCESS,
  DELETE_TRADE_FAIL,
} from "../types";

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

const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const getCurrentTime = () => {
  const today = new Date();
  const hh = String(today.getHours()).padStart(2, "0");
  const mm = String(today.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
};

let initialChecklist = {};

checklistItems.forEach((item) => {
  initialChecklist = { ...initialChecklist, [item.value]: false };
});

const initialState = {
  selectedTradeType: "I",
  marketIndex: "N",
  lotSize: 1,
  time: getCurrentTime(),
  date: getCurrentDate(),
  riskRewardRatio: "1",
  entryPrice: 0,
  exitPrice: 0,
  pnl: 0,
  backTest: false,
  mistakeTypeValue: "",
  tradeType: "",
  checklist: initialChecklist,
  tradeData: [],
};

const tradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRADE:
      return {
        selectedTradeType: action.payload.selectedTradeType
          ? action.payload.selectedTradeType
          : state.selectedTradeType,
        marketIndex: action.payload.marketIndex
          ? action.payload.marketIndex
          : state.marketIndex,
        lotSize: action.payload.lotSize
          ? action.payload.lotSize
          : state.lotSize,
        time: action.payload.time ? action.payload.time : state.time,
        date: action.payload.date ? action.payload.date : state.date,
        riskRewardRatio: action.payload.riskRewardRatio
          ? action.payload.riskRewardRatio
          : state.riskRewardRatio,
        entryPrice: action.payload.entryPrice
          ? action.payload.entryPrice
          : state.entryPrice,
        exitPrice: action.payload.exitPrice
          ? action.payload.exitPrice
          : state.exitPrice,
        pnl: action.payload.pnl ? action.payload.pnl : state.pnl,
        backTest: action.payload.backTest
          ? action.payload.backTest
          : state.backTest,
        mistakeTypeValue: action.payload.mistakeTypeValue
          ? action.payload.mistakeTypeValue
          : state.mistakeTypeValue,
        tradeType: action.payload.tradeType
          ? action.payload.tradeType
          : state.tradeType,
        checklist: action.payload.checklist
          ? action.payload.checklist
          : state.checklist,
      };

    case GET_TRADES:
      return {
        ...state,
        tradeData: action.payload,
      };

    case DELETE_TRADE_SUCCESS:
      return {
        ...state,
        tradeData: action.payload,
      };

    case DELETE_TRADE_FAIL:
      return state;

    case CREATE_TRADE_SUCCESS:
      return {
        ...state,
        tradeData: action.payload.trade
          ? [...action.payload.trade]
          : state.tradeData,
      };

    case CREATE_TRADE_FAIL:
      return state;

    default:
      return state;
  }
};

export default tradeReducer;
