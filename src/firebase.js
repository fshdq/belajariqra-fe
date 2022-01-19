import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB49DDqrAaMdIXveBp4UrCmHneQjvT9PBg",
    authDomain: "belajariqra-54181.firebaseapp.com",
    projectId: "belajariqra-54181",
    storageBucket: "belajariqra-54181.appspot.com",
    messagingSenderId: "817496455725",
    appId: "1:817496455725:web:9c7c77ce30e17b5b5416a4"
  };
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp.firestore();