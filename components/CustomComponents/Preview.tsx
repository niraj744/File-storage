"use client";
import { SendEmail, updateFile } from "@/Actions/file.actions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Emailtypes, FileTypes, UpdateFile } from "@/Types";
import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
import { CircleChevronLeft, Copy } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Preview = ({ data }: { data: FileTypes }) => {
  const router = useRouter();
  const { toast } = useToast();
  const { getUser } = useKindeBrowserClient();
  const [enablePassword, setEnabledPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const copy = () => {
    navigator.clipboard.writeText(data.slug);
    toast({
      variant: "default",
      title: "Copied to clipboard",
    });
  };
  const SavePassword = async () => {
    setLoading(true);
    try {
      const obj: UpdateFile = {
        password: password,
        isPassword: enablePassword,
      };
      await updateFile(data._id, obj);
      toast({
        title: "Update successfully",
      });
      router.push("/dashboard");
    } catch (error: unknown) {
      console.log((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  const SendMail = async () => {
    setLoading(true);
    try {
      const emailData: Emailtypes = {
        email: email,
        fileID: data._id,
        username: getUser()?.given_name || "",
      };
      const result = await SendEmail(emailData);
      if (result) {
        toast({
          title: "Send mail successfully",
        });
        router.push("/dashboard");
      }
    } catch (error: unknown) {
      console.log((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 flex-1">
        <Link
          href={"/dashboard"}
          className="flex gap-2 capitalize font-bold cursor-pointer"
        >
          <CircleChevronLeft />
          go to upload
        </Link>
        <div className="mt-5 flex flex-col gap-3 lg:flex-row">
          <div className="image flex justify-center max-w-[400px] flex-col border-gray-300 border-2 rounded-md gap-2 p-10">
            <AsyncImage
              src={data.fileUrl}
              style={{ width: 300, height: 200 }}
              Transition={Blur}
              alt="Image review"
              className="rounded-md"
            />
            <h1 className="font-bold capitalize text-center">
              {data.fileName}
            </h1>
            <p className="text-gray-500 font-semibold text-sm text-center">
              {data.fileType} / {(data.size / 1048576).toFixed(2)} MB
            </p>
          </div>
          <aside className="flex flex-col gap-4">
            <div className="url">
              <label
                htmlFor="short url"
                className="font-bold capitalize text-gray-500"
              >
                short url
              </label>
              <div
                className="flex justify-between gap-2 border-2 border-gray-300 p-2 rounded-md cursor-pointer"
                onClick={copy}
              >
                <p className="w-full max-w-[300px] whitespace-nowrap text-ellipsis overflow-hidden">
                  {data.slug}
                </p>
                <Copy className="text-gray-500" size={20} />
              </div>
            </div>
            <div className="isPassword flex gap-2">
              <input
                type="checkbox"
                name="password"
                id="password"
                checked={enablePassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEnabledPass(e.target.checked)
                }
              />
              <label
                htmlFor="password"
                className="font-bold capitalize select-none"
              >
                enabled password?
              </label>
            </div>
            {enablePassword && (
              <div className="input flex flex-col gap-2">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none border-2 border-gray-300 p-2 rounded-md"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
                <Button
                  disabled={password.length < 3 || loading}
                  onClick={SavePassword}
                >
                  Save
                </Button>
              </div>
            )}
            <div className="email flex flex-col gap-4 border-2 border-gray-300 p-3 rounded-md">
              <label
                htmlFor="email"
                className="font-bold capitalize text-gray-500"
              >
                send file to email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none border-2 border-gray-300 p-2 rounded-md"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <Button disabled={email.length < 3 || loading} onClick={SendMail}>
                Send Email
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Preview;
