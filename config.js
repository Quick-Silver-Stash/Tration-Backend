import Firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA5burUKI77oq5Y7-CCawG5UlfD5QmbB3w",
    authDomain: "trationapp.firebaseapp.com",
    databaseURL: "https://trationapp-default-rtdb.firebaseio.com",
    projectId: "trationapp",
    storageBucket: "trationapp.appspot.com",
    messagingSenderId: "1074970729838",
    appId: "1:1074970729838:web:9d8791e69e82450493b57f",
    measurementId: "G-M3D3DD4H9E"
    }

  const app = Firebase.initializeApp(firebaseConfig);
  export const db = Firebase.firestore();