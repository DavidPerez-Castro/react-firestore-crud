//import firebase from 'firebase/app'
import 'firebase/storage'
import * as fire from "firebase";
import "firebase/firestore";
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1PcyyyNxm97MSXW1BbF00FnhiHSZC7L4",
  authDomain: "tiktok-fake.firebaseapp.com",
  databaseURL: "https://tiktok-fake-default-rtdb.firebaseio.com",
  projectId: "tiktok-fake",
  storageBucket: "tiktok-fake.appspot.com",
  messagingSenderId: "1014962192095",
  appId: "1:1014962192095:web:3b8b27f4add7f5757cb36a"
};

// Initialize Firebase
fire.initializeApp(firebaseConfig);
const storage = fire.storage()

//export default firebase.firestore();
var firebase1 = fire.firestore();

export  {
    storage, firebase1 as default
}


/*
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
const config = {
    apiKey: "AIzaSyC32lkjiyr7WcjmRU2HOdZ1G18wzSMiGD0",
    authDomain: "mi-mandadero.firebaseapp.com",
    databaseURL: "https://mi-mandadero-default-rtdb.firebaseio.com",
    projectId: "mi-mandadero",
    storageBucket: "mi-mandadero.appspot.com",
    messagingSenderId: "1055645118874",
    appId: "1:1055645118874:web:fa2b0093b05e6c8ada0a23"
};

// Initialize Firebase
firebase.initializeApp(config);
const storage = firebase.storage()

export  {
    storage, firebase as default
}
*/
//export default firebase.firestore();