import { FILTER_TABLE } from "../types";

const initialState = {
  date: {
    type: "EQUAL",
    value: null,
  },
  marketIndex: "N",
  pnl: 0,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TABLE:
      return {
        date: action.payload.date ? action.payload.date : state.date,
        marketIndex: action.payload.marketIndex
        ? action.payload.marketIndex
        : state.marketIndex,
        pnl: action.payload.pnl ? action.payload.pnl : state.pnl,
      };
    default:
      return state;
  }
};

export default filterReducer;
