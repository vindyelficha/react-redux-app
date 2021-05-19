import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBPpA6IOPfHDvVOXEmPb2n6rE-9W0rBUdw",
    authDomain: "vindy-planner.firebaseapp.com",
    projectId: "vindy-planner",
    storageBucket: "vindy-planner.appspot.com",
    messagingSenderId: "103698654177",
    appId: "1:103698654177:web:eaaa902812cd9fe78828a0",
    measurementId: "G-622PWFNHKF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore.settings({timestampsInSnapshots: true});

  export default firebase;
