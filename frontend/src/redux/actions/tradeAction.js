import {
  UPDATE_TRADE,
  CREATE_TRADE,
  CREATE_TRADE_SUCCESS,
  CREATE_TRADE_FAIL,
  GET_TRADES,
  DELETE_TRADE_SUCCESS,
  DELETE_TRADE_FAIL,
  EDIT_TRADE_SUCCESS,
  EDIT_TRADE_FAIL,
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

export const getTrades = ()  => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/trade");
  dispatch({ type: GET_TRADES, payload: res.data.trades}); 
}

export const deleteTrade = (id) => async (dispatch) => {
  try{
    const res = await axios.delete(`http://localhost:8080/api/trade/${id}`);
    dispatch({ type: DELETE_TRADE_SUCCESS, payload: res.data.trades}); 
  }
  catch (error) {
    console.error(error);
    dispatch({
      type: DELETE_TRADE_FAIL,
      payload: error.response ? error.response.data : "An Error occured",
    });
  }
}

export const editTrade = (id) => async (dispatch,getState) => {
try{
  const tradeData = getState().trade
  const res = await axios.put(`http://localhost:8080/api/trade/${id}`, tradeData);
  dispatch({ type: EDIT_TRADE_SUCCESS, payload: res.data.trades}); 
}catch (error) {
  console.error(error);
  dispatch({
    type: EDIT_TRADE_FAIL,
    payload: error.response ? error.response.data : "An Error occured",
  });
}
}
