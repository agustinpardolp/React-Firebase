import types from "./types";
import { services } from "../../../services";

export const fetchImageListRequest = () => {
  return {
    type: types.FETCH_IMAGES_LIST_REQUEST,
  };
};
export const fetchImageListSuccess = (data) => {
  return {
    type: types.FETCH_IMAGES_LIST_SUCCESS,
    payload: { data: data },
  };
};
export const fetchImageListFailure = (error) => {
  return {
    type: types.FETCH_IMAGES_LIST_FAILURE,
    payload: error,
  };
};
//action to get the image list asynchronously from the database
export const fetchImageList = () => {
  return (dispatch) => {
    dispatch(fetchImageListRequest());
    services
      .fetchImageList()
      .then((querySnapshot) => {
        let imagesArray = [];
        querySnapshot.forEach(function (doc) {
          let { url } = doc.data();
          imagesArray.push({ id: doc.id, url: url });
        });
        return dispatch(fetchImageListSuccess(imagesArray));
      })
      .catch((error) => dispatch(fetchImageListFailure(error)));
  };
};

export const deleteImageRequest = () => {
  return {
    type: types.DELETE_IMAGE_REQUEST,
  };
};
export const deleteImageSuccess = () => {
  return {
    type: types.DELETE_IMAGE_SUCCESS,
  };
};
export const deleteImageFailure = (error) => {
  return {
    type: types.DELETE_IMAGE_FAILURE,
    payload: error,
  };
};
//action to delete an image from the database
export const deleteImage = (imgId) => (dispatch) => {
  dispatch(deleteImageRequest());
  return services
    .deleteImage(imgId)
    .then((data) => {
      dispatch(deleteImageSuccess(data));
    })
    .catch((error) => dispatch(deleteImageFailure(error)));
};
