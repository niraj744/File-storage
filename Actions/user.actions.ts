import User from "@/DB/Models/User";
import { Create, UpdateUser } from "@/Types";
import { connectToDatabase } from "@/DB/Connection";
import { redirect } from "next/navigation";

export const CreateUser = async (UserDetail: Create) => {
  try {
    await connectToDatabase();
    await User.create(UserDetail);
    redirect("/dashboard");
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findOne({ clerkId: userId });
    if (!user) throw new Error("User not found");
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
}
export async function updateUser(clerkId: string, user: UpdateUser) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate({ clerkId }, user);
    if (!updatedUser) throw new Error("User update failed");
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
}
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();
    const userToDelete = await User.findOne({ clerkId });
    if (!userToDelete) {
      throw new Error("User not found");
    }
    await User.findByIdAndDelete(userToDelete._id);
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
}
