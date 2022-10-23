// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYXY27d4-xRCEKFRNrCF44Vo1u2Kw9pMU",
    authDomain: "dragon-news-d-101.firebaseapp.com",
    projectId: "dragon-news-d-101",
    storageBucket: "dragon-news-d-101.appspot.com",
    messagingSenderId: "504673559565",
    appId: "1:504673559565:web:c0b9e368040d21570f6144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;