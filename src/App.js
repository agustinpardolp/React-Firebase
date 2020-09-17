import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import Main from "../src/views/Main";
import {
  firebase as fbConfig,
  firebaseConfig as rfConfig,
} from "./config/fireBaseConfig";
function App() {
  return (
    <Provider store={store}>
      {/* <ReactReduxFirebaseProvider
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      > */}
      <Router>
        <Route>
          <Main />
        </Route>
      </Router>
      {/* </ReactReduxFirebaseProvider> */}
    </Provider>
  );
}

export default App;
