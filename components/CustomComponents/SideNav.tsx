"use client";

import { links } from "@/lib/Constants";
import { cn } from "@/lib/utils";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathName = usePathname();
  return (
    <>
      <aside className="hidden lg:block w-[15rem] h-[100vh] sticky top-0 bg-white border-r-2 border-r-gray-200">
        <Link href={"/dashboard"} className="flex items-center w-full p-3">
          <Image src={"/logo.svg"} width={50} height={50} alt="Logo image" />
          <h1 className="text-2xl font-bold text-primary">File Storage</h1>
        </Link>
        <ul className="flex flex-col justify-between">
          {links.map(({ id, name, url, icon: Icon }) => (
            <Link
              key={id}
              href={url}
              className={cn(
                "flex gap-3 w-full px-6 py-4 text-gray-600 font-bold capitalize",
                url === pathName ? "bg-primary/10" : ""
              )}
            >
              {<Icon className={cn(url === pathName ? "text-primary" : "")} />}
              <span className={cn(url === pathName ? "text-primary" : "")}>
                {name}
              </span>
            </Link>
          ))}
        </ul>
        <LogoutLink className="px-6 py-5 flex gap-3">
          <LogOut />
          <button>Logout</button>
        </LogoutLink>
      </aside>
    </>
  );
};

export default SideNav;