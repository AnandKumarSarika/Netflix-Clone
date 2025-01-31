import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCSMJbdBhkLK-3tcVDj0ZJbAeKMET-Mt8I",
  authDomain: "netflix-clone-a6b79.firebaseapp.com",
  projectId: "netflix-clone-a6b79",
  storageBucket: "netflix-clone-a6b79.appspot.com",
  messagingSenderId: "389581591675",
  appId: "1:389581591675:web:95b09a06d0901823017ede",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Sign Up Error:", error.message);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login Error:", error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
    toast.error(error.code.split("/")[1].split("-").join(""));
  }
};

export { auth, db, login, signUp, logOut };
