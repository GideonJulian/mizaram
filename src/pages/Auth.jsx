import React, { useState } from "react";
import { superbase } from "../../superbaseClient";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await superbase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Login Successful");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative mx-4 w-full max-w-md rounded-xl bg-background-[#f7f5f2] p-8 shadow-2xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-[#4a6a50]">
            <span className="material-symbols-outlined text-3xl">spa</span>
            <h2 className="text-2xl font-bold tracking-tighter">Mizaram</h2>
          </div>
          <h3 className="mt-4 text-xl font-medium text-[#333]">Welcome Back</h3>
          <p className="mt-1 text-sm text-[#888]">
            Please enter your details to sign in.Please enter your details to
            sign in.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor=""
              className="text-sm font-medium text-text-light "
            ></label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input mt-2 block w-full rounded-lg border-gray-300 bg-black/5  shadow-sm focus:border-primary focus:ring-[#4a6a5080] focus:ring-opacity-50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor=""
              className="text-sm font-medium text-[#333]"
            ></label>
          </div>
          <input
            type="password"
            placeholder="......."
            name="password"
            className="form-input mt-2 block w-full rounded-lg border-gray-300 bg-black/5  shadow-sm focus:border-primary focus:ring-[#4a6a5080] focus:ring-opacity-50"
          />
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#4a6a50] text-[#f7f5f2] text-base font-bold shadow-lg transition-transform hover:scale-105"></button>
        </form>
        <div className="mt-6 text-center">
          
        </div>
      </div>
    </div>
  );
};

export default Auth;
