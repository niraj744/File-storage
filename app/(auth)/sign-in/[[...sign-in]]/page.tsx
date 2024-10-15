import { SignIn } from "@clerk/nextjs";

export const metadata = {
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
