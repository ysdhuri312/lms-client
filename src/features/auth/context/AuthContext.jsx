/** @format */

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const user = {
  id: 1,
  name: 'Yogesh',
  role: 'student',
  avatar: '/avatar.png',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
