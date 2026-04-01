import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * GuestRoute - Only accessible to non-authenticated users
 * Redirects logged-in users away from login/register pages
 */
export default function GuestRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    // Redirect to where they came from, or home
    const from = location.state?.from || "/";
    return <Navigate to={from} replace />;
  }

  return children;
}
