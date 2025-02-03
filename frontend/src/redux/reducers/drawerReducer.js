import { OPEN_DRAWER, CLOSE_DRAWER } from "../types";

const initialState = {
  isOpen: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case OPEN_DRAWER:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_DRAWER:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
