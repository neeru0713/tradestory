import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import tradeReducer from "./reducers/tradeReducer";
import modalReducer from "./reducers/modalReducer";
import spinnerReducer from "./reducers/spinnerReducer";
import notificationReducer from "./reducers/notificationReducer";
import authReducer from "./reducers/authReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  trade: tradeReducer,
  modal: modalReducer,
  spinner: spinnerReducer,
  notification: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const state = store.getState();
  if (state.auth.user && state.auth.token && state.auth.planName) {
    localStorage.setItem('user', JSON.stringify(state.auth.user));
    localStorage.setItem('token', state.auth.token);
    localStorage.setItem('planName', state.auth.planName);
  } else {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('planName');
  }
});

export default store;
