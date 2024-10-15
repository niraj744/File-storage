import { Schema, Types, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: { type: String, required: true },
    favorites: [{ type: Types.ObjectId, ref: "File", default: [] }],
  },
  { timestamps: true }
);

const User = models.User || model("user", UserSchema);
export default User;
