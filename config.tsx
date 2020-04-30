import Firebase from 'firebase';
import "firebase/firestore";

// Firebase 初期化
const firebaseConfig = {
    apiKey: "AIzaSyBjWOkC0uObOIbBnZ5wW3ILMUj61NxQUYA",
    authDomain: "reacttable20200415.firebaseapp.com",
    databaseURL: "https://reacttable20200415.firebaseio.com",
    projectId: "reacttable20200415",
    storageBucket: "reacttable20200415.appspot.com",
    messagingSenderId: "445960593703",
    appId: "1:445960593703:web:83f560307e59fa3d7ec902",
    measurementId: "G-X5JH0CD0D3"
  };
  
  const firebaseApp = Firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;