"use client";

import { FileTypes, InputType } from "@/Types";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const FileDownload = ({ file }: { file: FileTypes }) => {
  const [showbutton, setShowButton] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [inputType, setInputType] = useState<InputType>(InputType.hide);
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value !== file.password) return setShowButton(false);
    setShowButton(true);
  };
  const changeinputType = () => {
    if (inputType === InputType.show) {
      setInputType(InputType.hide);
    } else {
      setInputType(InputType.show);
    }
  };
  return (
    <>
      <div className="flex flex-col flex-1 min-h-screen justify-center items-center bg-gray-200 p-3 ">
        <Link href={"/dashboard"} className="flex items-center p-3">
          <Image src={"/logo.svg"} width={50} height={50} alt="Logo image" />
          <h1 className="text-3xl font-bold text-primary">File Storage</h1>
        </Link>
        <div className="model rounded-md bg-white p-6 flex flex-col gap-4 items-center">
          <h1 className="font-bold text-2xl capitalize text-gray-500">
            <span className="text-primary">{file.userId.firstName}</span> shared
            a file with you
          </h1>
          <p className="text-gray-500 text-xs capitalize font-bold">
            find file detail below
          </p>
          <Image
            src={"/File.png"}
            alt="File icon"
            width={100}
            height={100}
            className="animate-bounce m-6"
          />
          <div className="types flex flex-col gap-2 sm:flex-row">
            <p className="font-bold">{file.fileName} ⚡</p>
            <p className="font-bold">{file.fileType} ⚡</p>
            <p className="font-bold">{(file.size / 1048576).toFixed(2)} ⚡</p>
          </div>
          {file.isPassword && (
            <div className="password flex p-2 gap-4 items-center rounded-md border-2 focus-within:border-primary">
              <input
                type={inputType}
                placeholder="Enter password of file"
                className="outline-none"
                value={password}
                onChange={changePassword}
              />
              <span onClick={changeinputType}>
                {inputType === InputType.hide ? (
                  <Eye className="text-gray-500 cursor-pointer" />
                ) : (
                  <EyeOff className="text-gray-500 cursor-pointer" />
                )}
              </span>
            </div>
          )}
          {file.isPassword ? (
            showbutton && (
              <a
                href={file.fileUrl}
                download={true}
                target="_blank"
                className="p-3 bg-primary text-white font-bold rounded-md capitalize w-full text-center"
              >
                download
              </a>
            )
          ) : (
            <a
              href={file.fileUrl}
              download={true}
              target="_blank"
              className="p-3 bg-primary text-white font-bold rounded-md capitalize w-full text-center"
            >
              download
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default FileDownload;
