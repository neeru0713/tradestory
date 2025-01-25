
import {
  CREATE_STRATEGY,
  UPDATE_STRATEGY,
  GET_STRATEGY_DATA,
  GET_STRATEGY_DETAIL,
} from "../types";

const initialState = {
  strategyData: [],
  strategyInput: {
    name: "",
    accuracy: "",
    description: "",
    },
    strategyDetail: {}
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
          strategyData: [...state?.strategyData, action.payload],
        };

      case GET_STRATEGY_DATA:
        return {
          ...state,
          strategyData: action.payload,
        };
      case GET_STRATEGY_DETAIL:
        return {
          ...state,
          strategyDetail: action.payload,
        };

      default:
        return state;
    }
};

export default strategyReducer;
