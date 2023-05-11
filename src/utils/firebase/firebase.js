import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAkzi1TiWPC6r5-jgtbnjqS2I_tIfcvmV0",
  authDomain: "crwn-clothing-64fb2.firebaseapp.com",
  projectId: "crwn-clothing-64fb2",
  storageBucket: "crwn-clothing-64fb2.appspot.com",
  messagingSenderId: "871645814793",
  appId: "1:871645814793:web:1c9f3937359719bc0718d8"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error){
      console.log('error creating a user', error.message);
    }
  }

  return userDocRef;
}
