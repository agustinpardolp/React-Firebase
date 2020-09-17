import { combineReducers } from "redux";
import { images } from "./galleryReducers/images-list-reducer";
import { products } from "./productsReducers/product-list-reducer";
import { profile } from "./userReducers/profile-reducer";
import { firestoreReducer } from "redux-firestore";
import { notification } from "./notification/notifications-reducer";

const allReducers = combineReducers({
  images,
  products,
  profile,
  notification,
  firestore: firestoreReducer,
});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
