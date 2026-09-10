import React, {
  createContext,
  useContext,
} from "react";

import { useUser } from "@clerk/react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const {
    isSignedIn,
    user,
    isLoaded,
  } = useUser();

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: !!isSignedIn,
        user,
        isLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};