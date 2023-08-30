import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore' 
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyADGQoEAJvu5S8qtzq5Jehvu0uY-aBoSpU",
    authDomain: "olx-clone-47377.firebaseapp.com",
    projectId: "olx-clone-47377",
    storageBucket: "olx-clone-47377.appspot.com",
    messagingSenderId: "248742409583",
    appId: "1:248742409583:web:db55ccb3a678a4b81da49a",
    measurementId: "G-2JFZT8T6KX"
  };

export default firebase.initializeApp(firebaseConfig)