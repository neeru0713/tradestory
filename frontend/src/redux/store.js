import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'; 
import tradeReducer from './reducers/tradeReducer';
const rootReducer = combineReducers({
trade: tradeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;