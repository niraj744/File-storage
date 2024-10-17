import { Schema, Types, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    clerkId: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    favorites: [{ type: Types.ObjectId, ref: "File", default: [] }],
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
