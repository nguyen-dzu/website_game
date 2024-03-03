// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {
  collection,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJf9nSPpFEtLovHEc_lI87nRtDT_TgnDs",
  authDomain: "websitegame-d2afa.firebaseapp.com",
  databaseURL:
    "https://websitegame-d2afa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "websitegame-d2afa",
  storageBucket: "websitegame-d2afa.appspot.com",
  messagingSenderId: "381283588841",
  appId: "1:381283588841:web:9f7ce22647605fe98b6e78",
  measurementId: "G-JZYLZPYGVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const dbFireStore = getFirestore(app);
const collectionDbUser = collection(dbFireStore, "User");
export { app, analytics, auth, collectionDbUser, dbFireStore };
