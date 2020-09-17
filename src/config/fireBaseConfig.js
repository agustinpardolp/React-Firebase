import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCsJg2DTUhK9JFvhBbmaxi0Z11VOd1PKVg",
  authDomain: "tecnical-challenge-api.firebaseapp.com",
  databaseURL: "https://tecnical-challenge-api.firebaseio.com",
  projectId: "tecnical-challenge-api",
  storageBucket: "tecnical-challenge-api.appspot.com",
  messagingSenderId: "1081385704766",
  appId: "1:1081385704766:web:6519bf09fb0daff2bca06f",
};
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { firebase, projectStorage, projectFirestore, firebaseConfig };
export default firebase;
