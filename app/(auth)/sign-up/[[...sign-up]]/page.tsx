import { SignUp } from "@clerk/nextjs";

export const metadata = {
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
