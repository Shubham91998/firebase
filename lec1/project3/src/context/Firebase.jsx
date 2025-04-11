import React, {createContext, useContext, useEffect, useState} from 'react'
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, set, ref, get, child, onValue} from "firebase/database"


const firebaseConfig = {
    // your google consol keys
  };
  

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props ) => {

  const [name, setName] = useState("");


    const signUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    const putData = (key, data) => set(ref(database, key), data)
    // get(child(ref(database), "grandFather/Father"))
    // .then((snapshot) => {
    // console.log(snapshot.val())
    // })
    useEffect(() => {
      onValue(ref(database, "grandFather/Father/child"), (snapshot) =>setName(snapshot.val().name))
    })
    return (
      <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword, putData}}>
        <h3>Name is {name} </h3>
        {props.children}
      </FirebaseContext.Provider>
    );
  };
