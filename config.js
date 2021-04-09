import Firebase from 'firebase';
const firebaseConfig = {
    apiKey: 'AIzaSyArkfAbVgtBPhI78Exvvdcjnb-MirkLF3w',
    authDomain: 'tration-f3755.firebaseapp.com',
    databaseURL: 'https://tration-f3755-default-rtdb.firebaseio.com',
    projectId: 'tration-f3755',
    storageBucket: 'tration-f3755.appspot.com',
    messagingSenderId: '516825269955',
    appId: '1:516825269955:web:322284d943dbfc576a8476',
    measurementId: 'G-04R3SVJ9GT',
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA5burUKI77oq5Y7-CCawG5UlfD5QmbB3w",
//   authDomain: "trationapp.firebaseapp.com",
//   databaseURL: "https://trationapp-default-rtdb.firebaseio.com",
//   projectId: "trationapp",
//   storageBucket: "trationapp.appspot.com",
//   messagingSenderId: "1074970729838",
//   appId: "1:1074970729838:web:9d8791e69e82450493b57f",
//   measurementId: "G-M3D3DD4H9E"
//   }

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
