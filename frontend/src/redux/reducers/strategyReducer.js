
import {
  CREATE_STRATEGY,
  UPDATE_STRATEGY,
  GET_STRATEGIES,
  GET_STRATEGY_DETAIL,
  UPDATE_BACKTESTDATAINPUT,
  CREATE_BACKTESTDATA,
} from "../types"; 


const getCurrentTime = () => {
  const today = new Date();
  const hh = String(today.getHours()).padStart(2, "0");
  const mm = String(today.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
};

const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const initialState = {
  strategies: [],
  strategyInput: {
    name: "",
    accuracy: "",
    description: "",
  },
  strategyDetail: {},
  selectedStrategyBackTestData: [],
  backTestDataInputForm: {
    result: "",
    date: getCurrentDate(),
    time: getCurrentTime()
  },
};

const strategyReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_STRATEGY:
        return {
          ...state,
          strategyInput: action.payload.strategyInput,
        };

      case CREATE_STRATEGY:
        return {
          strategies: [...state?.strategies, action.payload],
        };

      case GET_STRATEGIES:
        return {
          ...state,
          strategies: action.payload,
        };
      case GET_STRATEGY_DETAIL:
        return {
          ...state,
          strategyDetail: action.payload,
        };

      case UPDATE_BACKTESTDATAINPUT:
        return {
          ...state,
          backTestDataInputForm: action.payload.backTestDataInputForm,
        };
      case CREATE_BACKTESTDATA:
        return {
          ...state,
          selectedStrategyBackTestData: [
            ...state.selectedStrategyBackTestData,
            action.payload.newBackTestDataRecord,
          ],
        };
      
    

      default:
        return state;
    }
};

export default strategyReducer;
