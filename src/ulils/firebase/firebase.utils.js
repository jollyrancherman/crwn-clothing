import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5-AxYENmRS5C1FQ1r7OSXOsnpGx4ueWg',
  authDomain: 'ztm-crwn-clothing-67aa2.firebaseapp.com',
  projectId: 'ztm-crwn-clothing-67aa2',
  storageBucket: 'ztm-crwn-clothing-67aa2.appspot.com',
  messagingSenderId: '738895328901',
  appId: '1:738895328901:web:283260d1453b2942c71bec',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating the user', { error });
    }
  }

  return userDocRef;
};
