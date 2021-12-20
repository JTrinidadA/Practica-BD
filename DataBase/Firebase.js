// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ2d_hnqOT9qJANqOF2pd4x_oc0ftFi4Y",
  authDomain: "react-native-bd-145b2.firebaseapp.com",
  projectId: "react-native-bd-145b2",
  storageBucket: "react-native-bd-145b2.appspot.com",
  messagingSenderId: "722115573247",
  appId: "1:722115573247:web:43bc478820f4b2ff7163ca",
  measurementId: "G-V0PJ0YB0HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export default {
    db,
};