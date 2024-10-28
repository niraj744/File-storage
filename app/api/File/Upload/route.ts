import { UploadFile } from "@/Actions/file.actions";
import cloudinary from "@/lib/Cloudinary";
import { CreateFile } from "@/Types";
import { NextResponse } from "next/server";

// const formDataToObject = (formData: FormData): UploadFileDetail => {
//   let obj = {} as UploadFileDetail;
//   formData.forEach((value, key) => {
//     (obj as any)[key] = value;
//   });
//   return obj;
// };

export const POST = async (req: Request) => {
  // const { fileName, fileType, size, userId, file }: UploadFileDetail =
  //   formDataToObject(await req.formData());
  // const arrayBuffer = await file.arrayBuffer();
  // const streamImage = Buffer.from(arrayBuffer);
  // const imageUrl: string = await new Promise<string>((resolve, reject) => {
  //   cloudinary.uploader
  //     .upload_stream(
  //       { resource_type: "auto", folder: "Images" },
  //       (error, uploadResult) => {
  //         if (error) {
  //           reject(error);
  //         } else {
  //           resolve(uploadResult?.url || "");
  //         }
  //       }
  //     )
  //     .end(streamImage);
  // });
  // const obj: CreateFile = {
  //   fileName,
  //   fileType,
  //   size,
  //   userId,
  //   fileUrl: imageUrl,
  // };
  // const result = await UploadFile(obj);
  // return NextResponse.json({ message: "OK", result });
};
