
import {
  CREATE_STRATEGY,
  UPDATE_STRATEGY,
  GET_STRATEGIES,
  GET_STRATEGY_DETAIL,
} from "../types"; 

const initialState = {
  strategies: [],
  strategyInput: {
    name: "",
    accuracy: "",
    description: "",
  },
  strategyDetail: {},
  selectedStrategyBackTestData: {}
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

      default:
        return state;
    }
};

export default strategyReducer;
