import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../config/fireBaseConfig";
import toastMiddleware from "../middlewares/toastNotification";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({ getFirestore, getFirebase }),
      toastMiddleware
    ),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
  )
);
