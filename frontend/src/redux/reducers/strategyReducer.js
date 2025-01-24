
import { CREATE_STRATEGY, UPDATE_STRATEGY, GET_STRATEGY_DATA } from "../types";

const initialState = {
    strategyData: [],
    strategyInput: {
        name: "",
        accuracy: ""  
    }
    
}

const strategyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STRATEGY:
            return {
              ...state,
              strategyInput: action.payload.strategyInput,
            };
    case CREATE_STRATEGY:
      return {
          strategyData: [...state?.strategyData, action.payload]
            };
        
        case GET_STRATEGY_DATA:
              return {
                ...state,
                strategyData: action.payload
              };

    default:
      return state;
  }
};

export default strategyReducer;
