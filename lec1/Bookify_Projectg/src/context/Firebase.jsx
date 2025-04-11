import {createContext, useContext} from "react";
import {initializeApp} from 'firebase/app'

const FirebaseContext = createContext(null)

const firebaseConfig = {
    // Your keys
  };

  

export const useFirebase = () => useContext(FirebaseContext)

const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>
}
