import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyALyKig968_L0JoesQ_tXmtjty9DklMnbE",
    authDomain: "kantine-102d0.firebaseapp.com",
    projectId: "kantine-102d0",
    storageBucket: "kantine-102d0.appspot.com",
    messagingSenderId: "253612854885",
    appId: "1:253612854885:web:b1eeab305c0bbe766fc08c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
app;
const db = getFirestore();
// const standardVarer = await getDocs(collection(db, "standardVarer"));
// const ukesMeny = await getDocs(collection(db, "ukesMeny"));
export const getUkesMeny = async () => {
    return await getDocs(collection(db, "ukesMeny"));
};
export const getStandardVarer = async () => {
    return await getDocs(collection(db, "standardVarer"));
};
