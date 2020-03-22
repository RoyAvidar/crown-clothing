import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAKWS66OuS8XvneoIYU9lUCu3fe0pEVuw4",
    authDomain: "crwn-db-51401.firebaseapp.com",
    databaseURL: "https://crwn-db-51401.firebaseio.com",
    projectId: "crwn-db-51401",
    storageBucket: "crwn-db-51401.appspot.com",
    messagingSenderId: "526571105341",
    appId: "1:526571105341:web:c244c59f935e6b4d6d8e54",
    measurementId: "G-2GJLN0NPBC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;