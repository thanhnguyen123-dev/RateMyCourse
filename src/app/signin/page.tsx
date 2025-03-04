"use client";

import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';

const SignInPage = () => {
  const handleClickContinueWithGoogle = async () => {
    await signIn("google");
  }

  const handleClickSignIn = async () => {
    await signIn("credentials");
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-main">
      <div className="flex flex-col gap-4 justify-center items-center bg-white w-[400px] h-[400px] rounded-lg shadow-lg py-2 px-6">
        <button
          onClick={handleClickContinueWithGoogle}
          className="text-black text-base w-full font-normal px-4 py-2 border border-slate-200 rounded-lg flex justify-center items-center gap-3"
        >
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>
        <span>OR</span>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-blue-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="Password" 
              className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-blue-200" 
            />
          </div>
          <button 
            onClick={handleClickSignIn}
            className="text-white text-base font-normal px-4 py-2 bg-black rounded-lg">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;