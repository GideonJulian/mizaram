import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
