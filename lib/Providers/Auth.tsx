"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import { ReactNode } from "react";

const Auth = ({ children }: { children: ReactNode }) => {
  return <KindeProvider>{children}</KindeProvider>;
};

export default Auth;
