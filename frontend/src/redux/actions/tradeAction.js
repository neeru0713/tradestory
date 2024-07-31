import { UPDATE_SELECTEDTRADETYPE } from "../types";

export const updateSelectedTradeType =
  (selectedTradeType) => async (dispatch) => {
    dispatch({ type: UPDATE_SELECTEDTRADETYPE, payload: selectedTradeType });
  };
