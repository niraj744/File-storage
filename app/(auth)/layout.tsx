import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="flex justify-center items-center bg-black/60 min-h-screen w-full">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
