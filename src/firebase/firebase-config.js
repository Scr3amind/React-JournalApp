import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0DxrszFdLyvfwz7mv1CrlMmKKYBqqcoM",
    authDomain: "react-curso-apps-fb400.firebaseapp.com",
    projectId: "react-curso-apps-fb400",
    storageBucket: "react-curso-apps-fb400.appspot.com",
    messagingSenderId: "348149374925",
    appId: "1:348149374925:web:d8b29ea014d5dac1f0ae84"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}