// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY6pGh753nLAI7wOvI0ORnEZhiq9VZr3w",
    authDomain: "contactapp-3197d.firebaseapp.com",
    projectId: "contactapp-3197d",
    storageBucket: "contactapp-3197d.appspot.com",
    messagingSenderId: "233883708541",
    appId: "1:233883708541:web:2f4c53db244e6b5e139514",
    measurementId: "G-ZZ815F14X9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
