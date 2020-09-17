import { db } from "../config/fireBaseConfig";

const fetchImageList = () => {
  const response = db.collection("images").get(); //get all images from firebase
  return response;
};

const deleteImage = (imgId) => {
  const collectionRef = db.collection("images"); //logical delete over selected image
  return collectionRef.doc(imgId).delete();
};

const fetchProductsList = () => {
  const response = db.collection("products").get(); //get all products from firebase
  return response;
};
const fetchUserById = (id) => {
  const response = db.collection("users").doc(id).get(); //get user by ID
  return response;
};
export const services = {
  fetchImageList,
  deleteImage,
  fetchProductsList,
  fetchUserById,
};
