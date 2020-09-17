import types from "./types";
import firebase from "firebase";
import { galleryServices } from "../../../services/galleryServices";

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
export const fetchImageList = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("images")
      .get()
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
export const deleteImage = (imgId) => (dispatch) => {
  dispatch(deleteImageRequest());
  return galleryServices
    .deleteImage(imgId)
    .then((data) => {
      dispatch(deleteImageSuccess(data));
    })
    .catch((error) => dispatch(deleteImageFailure(error)));
};

export const saveNewImage = ({ filename }) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const storageRef = firebase.storage().ref(`/imageFolder/${filename.name}`);
  storageRef.put(filename);
};
