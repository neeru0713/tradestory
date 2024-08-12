import {
  UPDATE_TRADE,
  CREATE_TRADE,
  CREATE_TRADE_SUCCESS,
  CREATE_TRADE_FAIL,
} from "../types";
import axios from "axios";

export const updateTrade = (trade) => async (dispatch) => {
  console.log("000000", trade);

  dispatch({ type: UPDATE_TRADE, payload: trade });
};

export const createTrade = () => async (dispatch, getState) => {
  try {
    const { trade } = getState();

    const res = await axios.post("http://localhost:8080/api/trade", trade);
  } catch (error) {}
};
