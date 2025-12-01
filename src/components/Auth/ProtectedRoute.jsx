import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { superbase } from "../../../superbase/client";


const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    superbase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!isLoggedIn) return <Navigate to="/auth" replace />;
  return children;
};

export default ProtectedRoute;