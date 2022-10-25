import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyAqwrriIXVJx6vp_JBGteNNRYXgYFT4z3U",
  authDomain: "sistema-4d17b.firebaseapp.com",
  projectId: "sistema-4d17b",
  storageBucket: "sistema-4d17b.appspot.com",
  messagingSenderId: "455071364611",
  appId: "1:455071364611:web:71b2ddee7948f5191c4036",
  measurementId: "G-5KS7XRXL38",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
