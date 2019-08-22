import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVwpdNeWoREfPpzGUMnLBYPe2s4iwFq4Q",
    authDomain: "crwn-db-ec859.firebaseapp.com",
    databaseURL: "https://crwn-db-ec859.firebaseio.com",
    projectId: "crwn-db-ec859",
    storageBucket: "",
    messagingSenderId: "815736462783",
    appId: "1:815736462783:web:02c11af0cecf7b80"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;