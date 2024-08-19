import { PAY_NOW } from "../types";

const initialState = {
  loading: false,
  paymentData: null,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAY_NOW":
      return {
        ...state,
        paymentData: action.payload,
        loading: false,
        error: action.payload?.error ? action.payload.error : null,
      };
    case "PAYMENT_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "PAYMENT_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
