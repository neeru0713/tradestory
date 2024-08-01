import { UPDATE_TRADE } from "../types";

export const updateTrade =
  (trade) => async (dispatch) => {
    console.log("000000",trade)
    dispatch({ type: UPDATE_TRADE, payload: trade });
  };



