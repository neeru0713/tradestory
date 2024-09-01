import { FILTER_TABLE } from "../types";

export const filterTable = (filter) => async (dispatch) => {
  dispatch({ type: FILTER_TABLE, payload: filter });
};
