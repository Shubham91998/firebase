import {createContext, useContext} from "react";
import {initializeApp} from 'firebase/app'

const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyDMBctCpPxhQCPR2xJLUCB1aLAZL-cEubo",
    authDomain: "bookify-80a5d.firebaseapp.com",
    projectId: "bookify-80a5d",
    storageBucket: "bookify-80a5d.firebasestorage.app",
    messagingSenderId: "165625770394",
    appId: "1:165625770394:web:f2bbfe8917820b45998a23"
  };

  

export const useFirebase = () => useContext(FirebaseContext)

const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>
}