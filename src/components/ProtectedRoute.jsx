import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * ProtectedRoute - Blocks access for unauthenticated users
 * Redirects to /login and preserves the intended destination
 */
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Save where user wanted to go, so we can redirect after login
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}