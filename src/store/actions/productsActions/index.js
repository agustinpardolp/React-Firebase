import types from "./types";
import { services } from "../../../services";

export const fetchProductsListRequest = () => {
  return {
    type: types.FETCH_PRODUCTS_LIST_REQUEST,
  };
};
export const fetchProductsListSuccess = (data) => {
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
  return (dispatch) => {
    dispatch(fetchProductsListRequest());
    services
      .fetchProductsList()
      .then((querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach(function (doc) {
          productArray.push(doc.data());
        });
        return dispatch(fetchProductsListSuccess(productArray));
      })
      .catch((error) => dispatch(fetchProductsListFailure(error)));
  };
};
