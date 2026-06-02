import React, { createContext, useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('access_token'));
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('customer');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  const setAuth = (data) => {
    if (!data) return;
    if (data.access_token) {
      localStorage.setItem('access_token', data.access_token);
      setToken(data.access_token);
    }
    if (data.customer) {
      localStorage.setItem('customer', JSON.stringify(data.customer));
      setUser(data.customer);
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('customer');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const RequireAuth = ({ children }) => {
  const { token } = useAuth() || {};
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default AuthContext;
