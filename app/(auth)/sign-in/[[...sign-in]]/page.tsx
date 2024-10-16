import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

const signIn = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default signIn;
