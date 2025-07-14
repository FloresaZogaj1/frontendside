import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? children : <Navigate to="/kyqu" replace />;
};

export default PrivateRoute;
