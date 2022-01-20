alert("hello");
// Import the functions you need from the SDKs you need
import { initializeApp } from "./node_modules/firebase/app";
import { getAnalytics } from "./node_modules/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOSRwdSgJARrQtCE2sHli6Ej8lbDo1xFc",
  authDomain: "test-app-e1ce2.firebaseapp.com",
  projectId: "test-app-e1ce2",
  storageBucket: "test-app-e1ce2.appspot.com",
  messagingSenderId: "814417389368",
  appId: "1:814417389368:web:154dc4ac30c6d890f203cd",
  measurementId: "G-HWE0K99EPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
