import { CREATE_STRATEGY, UPDATE_STRATEGY, GET_STRATEGY_DATA } from "../types";
import { API_URL } from "../../config/config";
import { showSpinner, hideSpinner } from "./spinnerAction";
import { showNotification } from "./notificationAction";
import { closeModal } from "./modalAction";
import axios from "axios";

export const updateStrategy = (strategyInput) => async (dispatch) => {
  dispatch({
    type: UPDATE_STRATEGY,
    payload: { strategyInput: strategyInput },
  });
};

export const createStrategy = () => async (dispatch, getState) => {
  try {
    const { strategy } = getState();
    dispatch(showSpinner("Strategy is being created ..."));
    const res = await axios.post(
      `${API_URL}/api/strategy`,
      strategy.strategyInput
    );
    dispatch(hideSpinner());
    dispatch(
      showNotification({
        type: "success",
        message: "strategy created successfully",
        sticky: false,
      })
    );
    dispatch(closeModal());
    dispatch({ type: CREATE_STRATEGY, payload: res.data.strategy });
  } catch (error) {
    dispatch(hideSpinner());
    dispatch(closeModal());
    dispatch(
      showNotification({
        type: "error",
        message: "An error occurred while creating the strategy",
        sticky: false,
      })
    );
  }
};


export const getStrategyData = () => async (dispatch) => {
  try {
    dispatch(showSpinner("Fetching strategies ..."));
    const res = await axios.get(`${API_URL}/api/strategy`);
    dispatch(hideSpinner());

    dispatch({ type: GET_STRATEGY_DATA, payload: res.data.strategies });
  } catch (error) {
    dispatch(hideSpinner());
    dispatch(
      showNotification({
        type: "error",
        message: "An error occurred while fetching the strategies",
        sticky: false,
      })
    );
  }
};
