import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsX9USPniPTQGa4iNepROVZg74SNImakU",
    authDomain: "fir-contactapp-7354c.firebaseapp.com",
    projectId: "fir-contactapp-7354c",
    storageBucket: "fir-contactapp-7354c.appspot.com",
    messagingSenderId: "819070039021",
    appId: "1:819070039021:web:73ab706fc2e19a3228ade4",
    measurementId: "G-Q65XJKRKLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);