import types from "./types";

export const fetchProductsListRequest = () => {
  return {
    type: types.FETCH_PRODUCTS_LIST_REQUEST,
  };
};
export const fetchProductsListSuccess = (data) => {
  console.log("action", data);
  return {
    type: types.FETCH_PRODUCTS_LIST_SUCCESS,
    payload: { data: data },
  };
};
export const fetchProductsListFailure = (error) => {
  return {
    type: types.FETCH_PRODUCTS_LIST_FAILURE,
    payload: error,
  };
};
export const fetchProductsList = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .get()
      .then((querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach(function (doc) {
          productArray.push(doc.data());
        });
        console.log("PRODUCTS", productArray);
        return dispatch(fetchProductsListSuccess(productArray));
      })
      .catch((error) => dispatch(fetchProductsListFailure(error)));
  };
};
