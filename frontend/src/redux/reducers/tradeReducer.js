import { UPDATE_SELECTEDTRADETYPE } from "../types";

const initialState = {
  selectedTradeType: "",
};

const tradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTEDTRADETYPE:
      return {
        selectedTradeType: action.payload,
      };
    default:
      return state;
  }
};

export default tradeReducer;
