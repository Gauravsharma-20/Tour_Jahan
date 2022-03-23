import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { firebaseConfig } from "./config";

/*if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const firebaseSupport = firebase;*/

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);