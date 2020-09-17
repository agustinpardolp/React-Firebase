import types from "./types";
import { services } from "../../../services";

export const fetchUserByIdRequest = () => {
  return {
    type: types.FETCH_USER_BY_ID_REQUEST,
  };
};
export const fetchUserByIdSuccess = (data) => {
  return {
    type: types.FETCH_USER_BY_ID_SUCCESS,
    payload: { data: data },
  };
};
export const fetchUserByIdFailure = (error) => {
  return {
    type: types.FETCH_USER_BY_ID_FAILURE,
    payload: error,
  };
};
//action to get user data asynchronously from the database
export const fetchUserById = (id) => (dispatch) => {
  services
    .fetchUserById(id)
    .then((result) => {
      return dispatch(fetchUserByIdSuccess(result.data()));
    })
    .catch((error) => dispatch(fetchUserByIdFailure(error)));
};
