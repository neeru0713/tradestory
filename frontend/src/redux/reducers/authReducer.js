import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PLAN,
} from "../types";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  error: null,
  planName: !!localStorage.getItem("planName"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload?.user,
        token: action.payload?.token,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload?.user,
        token: action.payload?.token,
        isAuthenticated: true,
        error: null,
        planName: action.payload?.user?.planName
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    case UPDATE_PLAN:
      return {
        ...state,
        planName: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
