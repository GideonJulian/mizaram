import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("mizaram_admin");
  if (!isLoggedIn) return <Navigate to="/auth" replace />;
  return children;
};

export default ProtectedRoute;
