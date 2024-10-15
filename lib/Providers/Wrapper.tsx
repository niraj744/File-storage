"use client";

import { ReactNode } from "react";
import NextLoader from "./NextLoader";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextLoader>{children}</NextLoader>
    </>
  );
};

export default Wrapper;
