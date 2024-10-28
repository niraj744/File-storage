"use client";

import { UploadCloud, X } from "lucide-react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { useCallback, useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { CreateFile } from "@/Types";
import { useRouter } from "next/navigation";
import { getUserById } from "@/Actions/user.actions";
import { UploadFile } from "@/Actions/file.actions";
import fileToBase64 from "@/lib/ConvertFiletoBase64";

const Upload = () => {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState<boolean>(false);
  const [myFiles, setMyFiles] = useState<FileWithPath[]>([]);
  const { toast } = useToast();

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setMyFiles([...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    noKeyboard: true,
    multiple: false,
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/svg": [".svg"],
      "image/gif": [".gif"],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024,
  });

  const removeFile = (file: FileWithPath) => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const upload = async () => {
    setLoading(true);
    try {
      const userid = await getUserById(user?.id!);
      const file = await fileToBase64(myFiles[0]);
      const fileUploadObject: CreateFile = {
        fileName: myFiles[0].name,
        fileType: myFiles[0].type,
        size: myFiles[0].size,
        userId: userid._id,
        fileUrl: file as string,
      };
      const result = await UploadFile(fileUploadObject);
      router.push(`/dashboard/file/${result._id}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fileRejections[0]?.errors.map((error) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    });
  }, [fileRejections]);

  return (
    <>
      <div className="w-full max-w-[750px] h-[400px] mt-5">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="bg-primary/20 p-4 rounded-md border-2 border-primary border-dashed flex flex-col gap-2 justify-center items-center text-center cursor-pointer h-full"
        >
          <UploadCloud size={50} className="text-primary" />
          <input {...getInputProps()} />
          <p className="font-bold text-2xl text-gray-500 capitalize select-none">
            click to upload or{" "}
            <span className="text-primary capitalize">drag</span> and{" "}
            <span className="text-primary capitalize">drop</span>
          </p>
          <p className="uppercase font-semibold text-sm text-gray-500">
            svg,png,jpeg,jpg,gif (max size : 2mb)
          </p>
        </div>
      </div>
      <ul className="w-full max-w-[750px] mt-3">
        {myFiles.map((file) => (
          <li
            className="p-3 border-gray-300 border-2 rounded-md flex justify-between items-center"
            key={file.path}
          >
            <div className="flex items-center gap-2">
              <Image
                src={URL.createObjectURL(file)}
                width={50}
                height={50}
                alt="File image"
              />
              <div>
                <h1 className="font-bold">{file.name}</h1>
                <p className="text-gray-500 font-semibold text-sm">
                  {file.type} / {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <X
              className="text-red-500 font-bold cursor-pointer"
              size={30}
              onClick={() => removeFile(file)}
            />
          </li>
        ))}
      </ul>
      {myFiles.length > 0 ? (
        <Button
          disabled={loading}
          className="capitalize bg-primary text-white mt-5 px-[5rem] py-6 rounded-md font-bold"
          onClick={upload}
        >
          Upload
        </Button>
      ) : null}
    </>
  );
};

export default Upload;
