import { PAY_NOW } from "../types";
import { API_URL } from "../../config/config";
import axios from "axios";
import { showNotification } from "./notificationAction";
import { showSpinner, hideSpinner } from "./spinnerAction";
import {updateUserPlanName} from "./authActions";
export const pay = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: "PAYMENT_LOADING" });
    dispatch(showSpinner("Redirecting to payment link"));

    const token = getState().auth.token;
    const res = await axios.post(API_URL + "/api/payment/checkout", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(hideSpinner());
    dispatch(updateUserPlanName(res.data.planName))
    if (res?.data?.url) {
      window.location.href = res.data.url;
      dispatch({
        type: PAY_NOW,
        payload: res.data,
      });
      dispatch(
        showNotification({
          type: "success",
          message: "Payment initiated successfully",
          sticky: true,
        })
      );
      
    }
  } catch (error) {
    console.error(error);
    dispatch(hideSpinner());
    dispatch({
      type: "PAYMENT_ERROR",
      payload: error.response ? error.response.data : "An Error occurred",
    });

    dispatch({
      type: PAY_NOW,
      payload: error.response ? error.response.data : "An Error occurred",
    });

    dispatch(
      showNotification({
        type: "error",
        message: `Payment failed: ${
          error.response?.data?.message || error.response?.data?.error
        }`,
        sticky: true,
      })
    );
  }
};
