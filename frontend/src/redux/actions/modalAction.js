import { OPEN_MODAL, CLOSE_MODAL } from "../types";

export const openModal = () => async (dispatch) => {
  dispatch({ type: OPEN_MODAL });
};

export const closeModal = () => async (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};
