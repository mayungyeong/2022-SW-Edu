import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSAIEVR_5wKhw2gumkpYXm2urtIY47pYI",
  authDomain: "study21.firebaseapp.com",
  projectId: "study21",
  storageBucket: "study21.appspot.com",
  messagingSenderId: "422619551959",
  appId: "1:422619551959:web:09862523b64bc6f9fdb892"
};

//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();