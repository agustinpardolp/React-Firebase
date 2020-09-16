import { combineReducers } from "redux";
import { images } from "./galleryReducers/images-list-reducer";
import { products } from "./productsReducers/product-list-reducer";
import { profile } from "./userReducers/profile-reducer";
import { firestoreReducer } from "redux-firestore";

const allReducers = combineReducers({
  images,
  products,
  profile,
  firestore: firestoreReducer,
});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
