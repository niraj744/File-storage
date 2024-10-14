import Header from "@/components/CustomComponents/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="height flex justify-center items-center bg-gray-50 p-3">
        <div className="w-full md:w-[600px] mx-auto content-center">
          <h1 className="textClamp font-extrabold text-center">
            <span className="text-primary">Upload,Save</span> and easily{" "}
            <span className="text-primary">Share</span> your files in one place
          </h1>
          <p className="text-gray-700 font-semibold text-center mt-5">
            Drag and drop your file directly on our cloud and share it with your
            friends secuarely with password and send it on email
          </p>
          <div className="flex flex-col sm:flex-row sm:items-start items-center w-full gap-4 mt-5 justify-center">
            <Button
              className="capitalize font-bold w-full sm:w-fit"
              size={"lg"}
              asChild
            >
              <Link href={"/dashboard"}>get started</Link>
            </Button>
            <Button
              className="capitalize font-bold transition-all duration-100 bg-transparent text-primary border-gray-200 hover:text-white w-full sm:w-fit"
              size={"lg"}
              asChild
            >
              <Link href={"/dashboard"}>learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
