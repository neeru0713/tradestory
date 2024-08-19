import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import tradeReducer from "./reducers/tradeReducer";
import modalReducer from "./reducers/modalReducer";
import spinnerReducer from './reducers/spinnerReducer';
import notificationReducer from './reducers/notificationReducer';
const rootReducer = combineReducers({
  trade: tradeReducer,
  modal: modalReducer,
  spinner: spinnerReducer,
  notification: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
