import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDHA1jRfv2phAYxgZJcLr6V7_XSJAmod5A",
  authDomain: "christo-s-books.firebaseapp.com",
  databaseURL: "https://christo-s-books-default-rtdb.firebaseio.com",
  projectId: "christo-s-books",
  storageBucket: "christo-s-books.appspot.com",
  messagingSenderId: "1085306663005",
  appId: "1:1085306663005:web:c47edc32361a3516f2ddb4",
  measurementId: "G-DHB0PVCPKZ"
}

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`) //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export {
  firestore,
  createUserProfileDocument,
  auth,
}