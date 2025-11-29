import React, { useState, useEffect } from "react";
import { superbase } from "../../superbase/client";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Automatically redirect if already logged in
  useEffect(() => {
    const session = superbase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/admin"); // already logged in
      }
    });
  }, [navigate]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // SIGN IN
      const { data, error } = await superbase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Supabase automatically persists session in browser storage
      // You now have an authenticated session
      navigate("/admin");
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100">
      <div className="relative mx-4 w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-green-700">
            <span className="material-symbols-outlined text-3xl">spa</span>
            <h2 className="text-2xl font-bold tracking-tighter">Mizaram</h2>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-800">Admin Login</h3>
        </div>

        <form onSubmit={handleAuth} className="mt-8 space-y-6">
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-100 p-3"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-100 p-3"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full h-12 items-center justify-center rounded-full bg-green-700 text-white font-bold hover:scale-105 transition-transform"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
