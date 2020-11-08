import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuQ9kBzOk4yfGSY5cMXzFBaLKuDggv1Pc",
  authDomain: "colum-code-sprint-b-85547.firebaseapp.com",
  databaseURL: "https://colum-code-sprint-b-85547.firebaseio.com",
  projectId: "colum-code-sprint-b-85547",
  storageBucket: "colum-code-sprint-b-85547.appspot.com",
  messagingSenderId: "400591380609",
  appId: "1:400591380609:web:1bc2d24b47d12a18d6ad80",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const travelCollection = db.collection("travel");

export default db;
export { travelCollection };
