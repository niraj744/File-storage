import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD__NAME,
  api_key: process.env.CLOUDINARY__API__KEY,
  api_secret: process.env.CLOUDINARY__API__SECRET__KEY,
  secure: true,
});

export default cloudinary;
