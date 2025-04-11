import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase';
const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("User created successfully!"))
      .catch(err => alert(err.message));
  }

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg max-w-md mx-auto mt-5">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Signup</h2>
      <label className="block mb-1 text-gray-700">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-blue-400"
        placeholder='Enter your email here'
        required
      />
      <label className="block mb-1 text-gray-700">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:border-blue-400"
        placeholder='Enter your password here'
        required
      />
      <button
        onClick={createUser}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 transition duration-300"
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup;
