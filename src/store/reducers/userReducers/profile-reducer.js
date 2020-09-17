import types from "../../actions/userActions/types";
import { REQUEST_STATUS } from "../../../constants";

export const profile = (
  state = {
    data: {},
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { error, data } = {} } = action;
  switch (action.type) {
    case types.FETCH_USER_BY_ID_REQUEST:
      return {
        ...state,
        status: REQUEST_STATUS.LOADING,
        error: null,
      };
    case types.FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_USER_BY_ID_FAILURE:
      return {
        ...state,
        status: REQUEST_STATUS.FAILED,
        error,
      };

    default:
      return state;
  }
};

export default profile;
