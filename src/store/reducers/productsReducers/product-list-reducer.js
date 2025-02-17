import types from "../../actions/productsActions/types";
import { REQUEST_STATUS } from "../../../constants";

export const products = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { error, data } = {} } = action;
  switch (action.type) {
    case types.FETCH_PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        status: REQUEST_STATUS.LOADING,
        error: null,
      };
    case types.FETCH_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_PRODUCTS_LIST_FAILURE:
      return {
        ...state,
        status: REQUEST_STATUS.FAILED,
        error,
      };

    default:
      return state;
  }
};

export default products;
