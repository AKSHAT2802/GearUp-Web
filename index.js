// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Y7OU15I_IyIomfTOEXL0MVsI8Pcbd5g",
  authDomain: "gearup-d7328.firebaseapp.com",
  projectId: "gearup-d7328",
  storageBucket: "gearup-d7328.appspot.com",
  messagingSenderId: "611471043795",
  appId: "1:611471043795:web:2ec91ffaf1f5e0a5983826",
  measurementId: "G-1J9K4ESXHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
const db = getFirestore(app);


//detect authorization state
onAuthStateChanged(auth,user => {
    if (user != null){
        console.log('logged in');
    }else{
        console.log('No user');
    }
});