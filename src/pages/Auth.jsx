import React, { useState } from "react";
import { superbase } from "../../superbase/client";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    // CREATE USER
    const { data: signUpData, error: signUpError } =
      await superbase.auth.signUp({
        email,
        password,
      });

    if (signUpError && !signUpError.message.includes("already registered")) {
      alert(signUpError.message);
      setLoading(false);
      return;
    }

    // LOGIN
    const { data: loginData, error: loginError } =
      await superbase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError) {
      alert(loginError.message);
      setLoading(false);
      return;
    }

    // SAVE SESSION IN LOCAL STORAGE
    localStorage.setItem("mizaram_admin", loginData.user.id);

    // REDIRECT TO DASHBOARD
    navigate("/admin");

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative mx-4 w-full max-w-md rounded-xl bg-[#f7f5f2] p-8 shadow-2xl">
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-[#4a6a50]">
            <span className="material-symbols-outlined text-3xl">spa</span>
            <h2 className="text-2xl font-bold tracking-tighter">Mizaram</h2>
          </div>

          <h3 className="mt-4 text-xl font-medium text-[#333]">Admin Login</h3>
        </div>

        <form onSubmit={handleAuth} className="mt-8 space-y-6">
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 bg-black/5 p-3"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 bg-black/5 p-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full h-12 items-center justify-center rounded-full bg-[#4a6a50] text-white font-bold hover:scale-105 transition-transform"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
