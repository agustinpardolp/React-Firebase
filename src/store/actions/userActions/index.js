import types from "./types";

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
export const fetchUserById = (id) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  firestore
    .collection("users")
    .doc(id)
    .get()
    .then((result) => {
      return dispatch(fetchUserByIdSuccess(result.data()));
    })
    .catch((error) => dispatch(fetchUserByIdFailure(error)));
};
