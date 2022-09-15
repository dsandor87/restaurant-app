// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAMdq02mVJqMiQS9SpTVgKnQtSX7-1URc",
  authDomain: "restaurant-app-81005.firebaseapp.com",
  projectId: "restaurant-app-81005",
  storageBucket: "restaurant-app-81005.appspot.com",
  messagingSenderId: "586452633230",
  appId: "1:586452633230:web:c30985acde5a3b4011abdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
