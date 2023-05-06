// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANLbB9WmCz3lIP9V46YfawFJabjbQtGNI",
  authDomain: "the-dragon-news-client-10e97.firebaseapp.com",
  projectId: "the-dragon-news-client-10e97",
  storageBucket: "the-dragon-news-client-10e97.appspot.com",
  messagingSenderId: "756901949416",
  appId: "1:756901949416:web:82d53d9cf38cd1524dbe5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;