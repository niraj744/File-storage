"use client";

import { DeleteFile } from "@/Actions/file.actions";
import { useToast } from "@/hooks/use-toast";
import { FileTypes } from "@/Types";
import { Eye, Trash } from "lucide-react";
import Link from "next/link";

const Table = ({ files }: { files: FileTypes[] }) => {
  const { toast } = useToast();
  const deleteFile = async (id: string) => {
    try {
      await DeleteFile(id);
      toast({
        title: "File deleted successfully",
      });
    } catch (error: unknown) {
      toast({
        title: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  return (
    <>
      <div className="w-full">
        <table className="capitalize text-left w-full">
          <thead>
            <tr>
              <th>filename</th>
              <th>filetype</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr
                className="bg-gray-100 w-full border-b-2 border-gray-300"
                key={file._id}
              >
                <td className="font-bold p-2">{file.fileName}</td>
                <td className="p-2">{file.fileType}</td>
                <td className="p-2">{(file.size / 1048576).toFixed(2)} MB</td>
                <td className="flex gap-2 justify-center p-2">
                  <button onClick={() => deleteFile(file._id)}>
                    <Trash size={20} className="text-red-500" />
                  </button>
                  <button>
                    <Link href={`/dashboard/file/${file._id}`}>
                      <Eye size={20} className="text-primary" />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
