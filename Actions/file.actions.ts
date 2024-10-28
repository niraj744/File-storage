"use server";

import { connectToDatabase } from "@/DB/Connection";
import File from "@/DB/Models/File";
import User from "@/DB/Models/User";
import { transporter } from "@/Nodemailer";

import { CreateFile, Emailtypes, UpdateFile, User as type } from "@/Types";
import cloudinary from "@/lib/Cloudinary";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

export const UploadFile = async (data: CreateFile) => {
  try {
    await connectToDatabase();
    const { fileName, fileType, size, userId, fileUrl }: CreateFile = data;
    const base64Data = fileUrl.replace(/^data:image\/\w+;base64,/, "");
    const streamImage = Buffer.from(base64Data, "base64");
    const imageUrl: string = await new Promise<string>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "auto", folder: "Images" },
          (error, uploadResult) => {
            if (error) {
              reject(error);
            } else {
              resolve(uploadResult?.url || "");
            }
          }
        )
        .end(streamImage);
    });
    const obj = {
      fileName,
      fileType,
      size,
      userId,
      fileUrl: imageUrl,
    };
    const file = await File.create(obj);
    file.slug = `${process.env.URL}/${file._id}`;
    await file.save();
    revalidatePath("/dashboard/file");
    return JSON.parse(JSON.stringify(file));
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export const getFileById = async (fileId: string) => {
  try {
    await connectToDatabase();
    const data = await File.findById(fileId).populate({
      path: "userId",
      model: User,
    });
    if (!data) throw new Error("File did't exist");
    return JSON.parse(JSON.stringify(data));
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export const updateFile = async (id: string, obj: UpdateFile) => {
  try {
    await connectToDatabase();
    await File.findByIdAndUpdate(id, obj);
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export const Files = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  try {
    await connectToDatabase();
    const fetchUser: type | null = await User.findOne({ kindId: user.id });
    const files = await File.find({ userId: fetchUser?._id }).populate({
      path: "userId",
      model: User,
    });
    if (!files) throw new Error("Files does not exists");
    const countDocuments = await File.countDocuments();
    return { countDocuments, files: JSON.parse(JSON.stringify(files)) };
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export const DeleteFile = async (id: string) => {
  try {
    await connectToDatabase();
    if (!id) throw new Error("id did't get");
    const file = await File.findById(id);
    if (!file) throw new Error("there is no data for that id");
    await File.findByIdAndDelete(id);
    revalidatePath("/dashboard/file");
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export const SendEmail = async (emailData: Emailtypes) => {
  const mailOptions: MailOptions = {
    from: process.env.SENDEREMAIL,
    to: emailData.email,
    subject: "Request to view file",
    html: `<div>
    <h1>${emailData.username} send this file to view.</h1>
    <a href=${process.env.URL + `/${emailData.fileID}`}>click to view</a>
    </div>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return JSON.parse(JSON.stringify({ success: 200 }));
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
