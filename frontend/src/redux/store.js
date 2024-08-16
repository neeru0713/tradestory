import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import tradeReducer from "./reducers/tradeReducer";
import modalReducer from "./reducers/modalReducer";
const rootReducer = combineReducers({
  trade: tradeReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
