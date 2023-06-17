// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore , collection, getDocs} from "firebase/firestore";

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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "scores"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});




