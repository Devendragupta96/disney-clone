import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCXNy2yD8CtFe2yePJ_ILtKID7sYU8U6HE",
  authDomain: "disneyplus-clone-bc3ce.firebaseapp.com",
  projectId: "disneyplus-clone-bc3ce",
  storageBucket: "disneyplus-clone-bc3ce.appspot.com",
  messagingSenderId: "375661868623",
  appId: "1:375661868623:web:8d872f21ca0b54e0a59c3a",
  measurementId: "G-1V3DCJ92DV",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
