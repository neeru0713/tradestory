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
import { showSpinner, hideSpinner } from "./spinnerAction";
import { showNotification } from "./notificationAction";
import { closeModal } from "./modalAction";
import axios from "axios";

export const updateTrade = (trade) => async (dispatch) => {
  dispatch({ type: UPDATE_TRADE, payload: trade });
};

export const createTrade = () => async (dispatch, getState) => {
  try {
    const { trade } = getState();
    dispatch(showSpinner("Trade is being created ..."));
    const res = await axios.post("http://localhost:8080/api/trade", trade);
    dispatch(hideSpinner());
    dispatch(showNotification({type: 'success', message: "Trade created successfully", sticky: false}));
    dispatch(closeModal())
  } catch (error) {
    dispatch(hideSpinner());
    dispatch(closeModal())
    dispatch(showNotification({type: 'error', message: "An error occurred while creating the trade", sticky: false}));
  }
};

export const getTrades = () => async (dispatch) => {
  try {
    dispatch(showSpinner("Fetching trades ..."));
    const res = await axios.get("http://localhost:8080/api/trade");
    dispatch(hideSpinner());
    
    dispatch({ type: GET_TRADES, payload: res.data.trades });
    dispatch(showNotification({ type: 'success', message: 'Trades fetched successfully', sticky: false }));
  } catch (error) {
    dispatch(hideSpinner());
    dispatch(showNotification({ type: 'error', message: 'An error occurred while fetching the trades', sticky: false }));
  }
};

export const deleteTrade = (id) => async (dispatch) => {
  try {
    dispatch(showSpinner("Trade is getting deleted ..."));
    const res = await axios.delete(`http://localhost:8080/api/trade/${id}`);
    dispatch(hideSpinner());
    dispatch({ type: DELETE_TRADE_SUCCESS, payload: res.data.trades });
    dispatch(showNotification({ type: 'success', message: 'Trade deleted successfully', sticky: false }));
  } catch (error) {
    dispatch(hideSpinner());
    console.error(error);
    dispatch({
      type: DELETE_TRADE_FAIL,
      payload: error.response ? error.response.data : "An error occurred",
    });
    dispatch(showNotification({ type: 'error', message: 'An error occurred while deleting the trade', sticky: false }));
  }
};

export const editTrade = (id) => async (dispatch, getState) => {
  try {
    dispatch(showSpinner("Trade is getting updated ..."));
    const tradeData = getState().trade;
    const res = await axios.put(
      `http://localhost:8080/api/trade/${id}`,
      tradeData
    );
    dispatch({ type: EDIT_TRADE_SUCCESS, payload: res.data.trades });
    dispatch(hideSpinner());
    dispatch(showNotification({ type: 'success', message: 'Trade updated successfully', sticky: false }));
  } catch (error) {
    dispatch(hideSpinner());
    console.error(error);
    dispatch({
      type: EDIT_TRADE_FAIL,
      payload: error.response ? error.response.data : "An error occurred",
    });
    dispatch(showNotification({ type: 'error', message: 'An error occurred while updating the trade', sticky: false }));
  }
};
