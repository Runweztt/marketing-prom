import React, { useState } from 'react'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../Firebase-config';

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userCredential.user);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in user:", result.user);
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };

  return (
    <section>
      <div className='form-container'>
        <div className="form-group">
          <h1>Welcome</h1>
          <p>Sign up and join us</p>

          <form onSubmit={register}>
            <label>First Name</label>
            <input type="text" placeholder='Enter your first name' required />

            <label>Last Name</label>
            <input type="text" placeholder='Enter your last name' required />

            <label>Email</label>
            <input
              type="email"
              placeholder='Enter your email address'
              required
              onChange={(event) => setRegisterEmail(event.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder='Create a password'
              required
              onChange={(event) => setRegisterPassword(event.target.value)}
            />

            <button type='submit'>Sign Up</button>

            <button type='submit' onClick={signInWithGoogle}>
              <FcGoogle className='googleicon' />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
