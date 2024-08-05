// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCp7J-MwQuIFS-Ma3bFSpWY00krPAeH_ZM",
    authDomain: "pantry-tracker-3887c.firebaseapp.com",
    projectId: "pantry-tracker-3887c",
    storageBucket: "pantry-tracker-3887c.appspot.com",
    messagingSenderId: "510628351355",
    appId: "1:510628351355:web:7de20879d037b3d910c1de",
    measurementId: "G-B4ENS4F3V2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }