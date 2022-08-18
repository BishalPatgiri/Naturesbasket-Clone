import React, { useState } from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const Toggle = () => {
    setAuth(true);
  };
  return (
    <AuthContext.Provider value={{ auth, Toggle }}>
      {children}
    </AuthContext.Provider>
  );
}
