// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [userDetails, setUserDetails] = useState({
    name: localStorage.getItem('loggedInUser') || '',
    email: localStorage.getItem('loggedInUserEmail') || ''
  });

  const login = (name, email) => {
    setIsAuthenticated(true);
    setUserDetails({ name, email });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInUserEmail');
    setIsAuthenticated(false);
    setUserDetails({ name: '', email: '' });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
