import * as firebase from 'firebase';
require('@firebase/firestore');


// var firebaseConfig = {
//   apiKey: "AIzaSyBNCd9m3C8WtNdtSPCshd7w6GYcpjpRNLo",
//   authDomain: "wily-app-91d8c.firebaseapp.com",
//   projectId: "wily-app-91d8c",
//   storageBucket: "wily-app-91d8c.appspot.com",
//   messagingSenderId: "353792370638",
//   appId: "1:353792370638:web:9542a5ae6590c42b2fed9f"
// };
var firebaseConfig = {
  apiKey: "AIzaSyBNCd9m3C8WtNdtSPCshd7w6GYcpjpRNLo",
  authDomain: "wily-app-91d8c.firebaseapp.com",
  projectId: "wily-app-91d8c",
  storageBucket: "wily-app-91d8c.appspot.com",
  messagingSenderId: "353792370638",
  appId: "1:353792370638:web:9542a5ae6590c42b2fed9f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;