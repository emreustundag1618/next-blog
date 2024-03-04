"use client"

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider basePath="/api/auth">{children}</SessionProvider>;
};

export default AuthProvider;
