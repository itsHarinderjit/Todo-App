// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZN6j0R4rowCDlvT2wdiHDqKhIHLzcS38",
  authDomain: "todo-app-aa205.firebaseapp.com",
  projectId: "todo-app-aa205",
  storageBucket: "todo-app-aa205.appspot.com",
  messagingSenderId: "258688521993",
  appId: "1:258688521993:web:6617bb285feb5fdb6925d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)