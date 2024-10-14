import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center gap-1 w-full p-3 bg-white border-b-2 border-b-gray-200 px-7 capitalize">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt="Website logo"
              priority
            />
            <h1 className="font-extrabold text-2xl text-primary">logoipsum</h1>
          </Link>
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href={"/dashboard"}>home</Link>
            </li>
            <li>
              <Link href={"/dashboard"}>About</Link>
            </li>
            <li>
              <Link href={"/dashboard"}>upload</Link>
            </li>
            <li>
              <Link href={"/dashboard"}>contact us</Link>
            </li>
          </ul>
        </div>
        <Link href={"/dashboard"}>
          <Button className="capitalize font-bold">get started</Button>
        </Link>
      </header>
    </>
  );
}
