import firebase from 'firebase/compat/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSS3Lwxo9bubE1HQvA5jYebevMLDXdHVM",
  authDomain: "olx-clone-4170c.firebaseapp.com",
  projectId: "olx-clone-4170c",
  storageBucket: "olx-clone-4170c.appspot.com",
  messagingSenderId: "107677379092",
  appId: "1:107677379092:web:3f3d7170eaf7b47ef79501"
  };


 const firebaseApp= firebase.initializeApp(firebaseConfig)
 export const auth=getAuth(firebaseApp)
 export const db=getFirestore(firebaseApp)