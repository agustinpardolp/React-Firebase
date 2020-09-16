import types from "./types";

export const fetchUserByIdRequest = () => {
  return {
    type: types.FETCH_USER_BY_ID_REQUEST,
  };
};
export const fetchUserByIdSuccess = (data) => {
  debugger;
  console.log("DATA ACTION", data);
  return {
    type: types.FETCH_USER_BY_ID_SUCCESS,
    payload: data,
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
  let result = firestore
    .collection("users")
    .doc(id)
    .get()
    .then((result) => {
      console.log("resulr", result.data());
      return dispatch(fetchUserByIdSuccess(result.data()));
    })
    .catch((error) => dispatch(fetchUserByIdFailure(error)));

  //     let user = await result.get()
  //  let data = user.data()
  //  console.log("firestore", firestore);
  // .then((result) => {
  //   console.log("resulr", result);
  //   return dispatch(fetchUserByIdSuccess());
  // })
  // .catch((error) => dispatch(fetchUserByIdFailure(error)));
};
