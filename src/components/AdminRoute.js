// components/AdminRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

function AdminRoute({ children }) {
  const { user, loggedIn } = useAuth();
  const location = useLocation();

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!user?.isAdmin) {
    return <Navigate to="/no-access" replace />;
  }

  return children;
}

export default AdminRoute;
