import types from "../../actions/galleryActions/types";
import { REQUEST_STATUS } from "../../../constants/index";

export const newImage = (
  state = {
    data: {},
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  debugger;
  console.log("entre al reducer, ", action);
  const { payload: { error } = {} } = action;
  switch (action.type) {
    case types.SAVE_NEW_IMAGE_REQUEST:
      return {
        ...state,
        status: REQUEST_STATUS.LOADING,
        error: null,
      };
    case types.SAVE_NEW_IMAGE_SUCCESS:
      debugger;
      return {
        status: REQUEST_STATUS.LOADED,
      };
    case types.SAVE_NEW_IMAGE_FAILURE:
      return {
        ...state,
        status: REQUEST_STATUS.FAILED,
        error,
      };

    default:
      return state;
  }
};

export default newImage;
