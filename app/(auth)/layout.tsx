import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex">
        <div className="relative min-h-screen w-[50%] hidden md:block">
          <div className="absolute flex flex-col gap-2 justify-end p-12 h-full z-10 w-full bg-black/30">
            <div className="w-fit">
              <Link href={"/"}>
                <Image
                  src={"authlogo.svg"}
                  width={50}
                  height={50}
                  alt="logo image"
                />
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-white">
              Welcome to File Sharing App 🦑
            </h1>
            <p className="text-white">
              Drag and drop your file directly on our cloud and share it with
              your friends secuarely with password and send it on email
            </p>
          </div>
          <Image src={"/auth-img.avif"} alt="auth image" fill priority />
        </div>
        <div className="flex justify-center w-[50%] items-center">
          {children}
        </div>
      </div>
    </>
  );
}
