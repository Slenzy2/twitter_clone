import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2afSLvxPVpxBwLDiutqgzfxjbWXLKf_M",
  authDomain: "twitter-clone-20dd5.firebaseapp.com",
  projectId: "twitter-clone-20dd5",
  storageBucket: "twitter-clone-20dd5.appspot.com",
  messagingSenderId: "31607772371",
  appId: "1:31607772371:web:a0e1831fb944ca647df026",
};

const db = firebase.initializeApp(firebaseConfig);
// console.log(getFirestore);
// console.log(collection);
// console.log(getDocs);

export default db;
