// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDA0j2KUMFGW-R51hiD3UXJmgYqbbQljJg",
    authDomain: "insta-c-b6168.firebaseapp.com",
    projectId: "insta-c-b6168",
    storageBucket: "insta-c-b6168.appspot.com",
    messagingSenderId: "462275599826",
    appId: "1:462275599826:web:cea25b06004260752dbc0b",
    measurementId: "G-LY2H5MNLYG"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export  {db, auth, storage};
  //export default db;