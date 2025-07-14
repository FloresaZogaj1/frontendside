import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Lexo user-in dhe token-in nga localStorage (nëse ekziston)
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Kur bën login, ruaj token dhe user në localStorage
  const login = (newToken, userObj) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userObj));
    setToken(newToken);
    setUser(userObj);
  };

  // Kur del, fshi të dyja
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  // Për shembull, pas rifreskimit të faqes, user-i lexohet nga localStorage

  // Një flag për login status
  const loggedIn = !!token && !!user;

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
