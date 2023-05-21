import "firebase/firestore"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_QMbCI84UjQC0I0-GsA_Zf4rlpZuvaK4",
  authDomain: "wortenscore-16503.firebaseapp.com",
  projectId: "wortenscore-16503",
  storageBucket: "wortenscore-16503.appspot.com",
  messagingSenderId: "436958730151",
  appId: "1:436958730151:web:33d9b839f12aff355ec882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;