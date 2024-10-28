import Table from "@/components/CustomComponents/Table";
import { Files } from "@/Actions/file.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Datatype } from "@/Types";

const FilesPage = async () => {
  const data: Datatype | undefined = await Files();
  if (data && data?.countDocuments > 0) {
    return (
      <>
        <div className="flex flex-col gap-4 justify-center flex-1 min-h-screen p-4">
          <h1 className="font-bold capitalize text-xl">my files</h1>
          <div className="border-2 border-gray-300 capitalize p-2 rounded-md text-gray-500">
            <h2>total files: {data.countDocuments}</h2>
          </div>
          {data ? <Table files={data.files} /> : <h1>loading</h1>}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-1 gap-4">
        <h1 className="text-3xl font-bold text-gray-500">
          You have not upload any file yet.
        </h1>
        <Button className="font-bold text-md" size={"lg"} asChild>
          <Link href={"/dashboard"}>Upload</Link>
        </Button>
      </div>
    </>
  );
};

export default FilesPage;
