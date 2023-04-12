"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
import type { User } from "firebase/auth";

const auth = getAuth(firebase_app);

// context
type AuthContextProp = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextProp>({
  user: null,
});

// custom hook
export const useAuthContext = () => useContext(AuthContext);

// provider
type AuthContextProviderProp = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProp) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
