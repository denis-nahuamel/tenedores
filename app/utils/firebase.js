import firebase from "firebase/app";

const firebaseConfig={
    apiKey: "AIzaSyCSVM94j6H5nOt3uCUeEQP79ZY3_f8omks",
    authDomain: "tenedores-96c9c.firebaseapp.com",
    databaseURL: "https://tenedores-96c9c.firebaseio.com",
    projectId: "tenedores-96c9c",
    storageBucket: "tenedores-96c9c.appspot.com",
    messagingSenderId: "701731492352",
    appId: "1:701731492352:web:245dabf622b15ecef37ee5",
    measurementId: "G-JG5TQKCPGF"
  };
  export const firebaseApp = firebase.initializeApp(firebaseConfig);