import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from "../firebase";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const SignPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Login Successful!"))
      .catch(err => alert(err.message));
  }

  const signupWitGoogle = () => {
    signInWithPopup(auth, googleProvider)
  }

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg max-w-md mx-auto mt-5">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">Signin</h2>
      <label className="block mb-1 text-gray-700">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder='Enter your email here'
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-green-400"
      />
      <label className="block mb-1 text-gray-700">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder='Enter your password here'
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-green-400"
      />
      <button
  onClick={signupWitGoogle}
  className="flex items-center gap-3 px-6 py-2 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300 border border-gray-300 text-gray-700 font-semibold"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google logo"
    className="w-5 h-5"
  />
  Sign in with Google
</button>
      <button
        onClick={signinUser}
        className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-2 my-3 transition duration-300"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignPage;
