import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged , signOut} from "firebase/auth"
import { app } from "./firebase"
import Signup from "./pages/Signup";
import SignPage from "./pages/SignPage";
import './App.css'

const auth = getAuth(app);


function App() {

  const [user, setUser] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user){
        // Yes, you are logged in.
        setUser(user);
        console.log("Hello", user)
      } else{
        // User is logged out.
        console.log("You are logged out.")
        setUser(null)
      }
    })
  },[])

  if(user === null){
    return (
      <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-6 shadow-md">
        <h1 className="text-3xl text-white text-center font-bold">Firebase React Auth</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-6 p-10">
        <Signup />
        <SignPage />
      </div>
      </>

    )
  }
  
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-6 shadow-md">
        <h1 className="text-3xl text-white text-center font-bold">Hello, {user.email}.</h1>
      </div>
      <button
        onClick={() => signOut(auth)}
        className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-2 my-3 transition duration-300"
      >
        Logout 
      </button>
     
    </>
  )
}

export default App;
