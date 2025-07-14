import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const AdminRoute = ({ children }) => {
  const { user, loggedIn } = useAuth();
  if (!loggedIn || !user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AdminRoute;
