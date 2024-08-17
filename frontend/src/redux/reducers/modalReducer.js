import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_EDIT } from "../types";

const initialState = {
  isOpen: false,
  isOpenEdit: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };

    case OPEN_MODAL_EDIT:
      return {
        ...state,
        isOpenEdit: action.payload, // Store the ID of the item being edited
      };

    case CLOSE_MODAL:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
