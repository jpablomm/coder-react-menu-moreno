// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgRz6_gd1_rwOs_ij6pphr3e6744sQR5w",
  authDomain: "coder-react-shop.firebaseapp.com",
  projectId: "coder-react-shop",
  storageBucket: "coder-react-shop.appspot.com",
  messagingSenderId: "354663569066",
  appId: "1:354663569066:web:1651969d6af16b8f9c22d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// function to export app
export default function initFirebase() {
  return app;
}
