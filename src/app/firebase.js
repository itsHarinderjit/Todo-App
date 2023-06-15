import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCZN6j0R4rowCDlvT2wdiHDqKhIHLzcS38",
  authDomain: "todo-app-aa205.firebaseapp.com",
  projectId: "todo-app-aa205",
  storageBucket: "todo-app-aa205.appspot.com",
  messagingSenderId: "258688521993",
  appId: "1:258688521993:web:6617bb285feb5fdb6925d8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()