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
    payload: data,
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
    // const firestore = getFirestore();
    // firestore.collection("images").add();
    // const firestore = getFirestore();
    // firestore.collection("images").add({ filename: "photo.jpg" });
    // dispatch(fetchImageListRequest());
    // galleryServices
    //   .fetchImageList()
    //   .then((data) => {
    //     dispatch(fetchImageListSuccess(data));
    //   })
    //   .catch((error) => dispatch(fetchImageListFailure(error)));
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
  debugger;
  console.log("IMGDATA", filename);
  const storageRef = firebase.storage().ref(`/imageFolder/${filename.name}`);
  storageRef.put(filename);
  console.log("storage", firebase);
};

// export const saveNewImageRequest = () => {
//   return {
//     type: types.SAVE_NEW_IMAGE_REQUEST,
//   };
// };
// export const saveNewImageSuccess = () => {
//   debugger;
//   return {
//     type: types.SAVE_NEW_IMAGE_SUCCESS,
//   };
// };
// export const saveNewImageFailure = (error) => {
//   return {
//     type: types.SAVE_NEW_IMAGE_FAILURE,
//     payload: error,
//   };
// };
// export const saveNewImage = (imgData) => (
//   dispatch,
//   getState,
//   { getFirebase, getFirestore }
// ) => {
//   const firestore = getFirestore();
//   firestore
//     .collection("images")
//     .add(imgData)
//     .then(() => dispatch(saveNewImageSuccess()))
//     .catch((error) => dispatch(saveNewImageFailure(error)));
// };
