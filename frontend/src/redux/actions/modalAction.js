import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_EDIT } from "../types";

export const openModal = () => async (dispatch) => {
  dispatch({ type: OPEN_MODAL });
};

export const openModalEdit = (id) => async (dispatch) => {
  dispatch({
    type: "OPEN_MODAL_EDIT",
    payload: id,
  });
};

export const closeModal = () => async (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};
