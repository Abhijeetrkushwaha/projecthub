import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAk4TZVqx8e34zKc0uD0XlAOAZqZPFdLkQ",
  authDomain: "project-hub-f20fe.firebaseapp.com",
  databaseURL: "https://project-hub-f20fe.firebaseio.com",
  projectId: "project-hub-f20fe",
  storageBucket: "project-hub-f20fe.appspot.com",
  messagingSenderId: "158580751837",
  appId: "1:158580751837:web:ebbd257325b45eeb730a34",
  measurementId: "G-JFS1VMNM5V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;
