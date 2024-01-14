import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2DqexnUxRQ-_CNWx1wfyZPqTMBkncmF0",
  authDomain: "disneyplusclone-753f7.firebaseapp.com",
  projectId: "disneyplusclone-753f7",
  storageBucket: "disneyplusclone-753f7.appspot.com",
  messagingSenderId: "477527328461",
  appId: "1:477527328461:web:3893946bfb97eb9c5c0b84",
  measurementId: "G-QZYGERTX7W",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
