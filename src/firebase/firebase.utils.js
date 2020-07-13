import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config={    
    apiKey: "AIzaSyArM5EXW3clDw43Se_ciqqd5i_R95oAfjU",
    authDomain: "crwn-clothing-65b37.firebaseapp.com",
    databaseURL: "https://crwn-clothing-65b37.firebaseio.com",
    projectId: "crwn-clothing-65b37",
    storageBucket: "crwn-clothing-65b37.appspot.com",
    messagingSenderId: "64309705743",
    appId: "1:64309705743:web:b1c8ce98e2fef48c73777a",
    measurementId: "G-XS6CN9LH3N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
