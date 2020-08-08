import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCDkbki7J1idmudWa_R6Y2ExUW7Td5DPiM",
    authDomain: "crwn-db-b0a63.firebaseapp.com",
    databaseURL: "https://crwn-db-b0a63.firebaseio.com",
    projectId: "crwn-db-b0a63",
    storageBucket: "crwn-db-b0a63.appspot.com",
    messagingSenderId: "547991021415",
    appId: "1:547991021415:web:2b81e61a313e69c17b71c2",
    measurementId: "G-CFTY1DFR5E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;