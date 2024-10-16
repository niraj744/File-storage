import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
};

const signUp = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default signUp;
