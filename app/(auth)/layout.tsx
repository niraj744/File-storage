import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center bg-black/60 min-h-screen w-full">
      {children}
    </div>
  );
};

export default AuthLayout;
