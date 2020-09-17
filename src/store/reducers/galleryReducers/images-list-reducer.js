import types from "../../actions/galleryActions/types";
import { REQUEST_STATUS } from "../../../constants";

export const images = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { error, data } = {} } = action;
  switch (action.type) {
    case types.FETCH_IMAGES_LIST_REQUEST:
      console.log("loading", action.type);
      return {
        ...state,
        status: REQUEST_STATUS.LOADING,
        error: null,
      };
    case types.FETCH_IMAGES_LIST_SUCCESS:
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_IMAGES_LIST_FAILURE:
      return {
        ...state,
        status: REQUEST_STATUS.FAILED,
        error,
      };

    default:
      return state;
  }
};

export default images;
