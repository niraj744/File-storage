import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    fileType: { type: String, required: true },
    size: { type: Number, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    slug: { type: String },
    isPassword: { type: Boolean, default: false },
    password: { type: String },
    fileUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const File = mongoose.models.File || mongoose.model("File", FileSchema);
export default File;
