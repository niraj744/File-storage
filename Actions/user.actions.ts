import User from "@/DB/Models/User";
import { Create, UpdateUser } from "@/Types";
import Connections from "@/DB/Connection";
import { revalidatePath } from "next/cache";

export const CreateUser = async (UserDetail: Create) => {
  try {
    await User.create(UserDetail);
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export async function getUserById(userId: string) {
  try {
    await Connections();
    const user = await User.findOne({ clerkId: userId });
    if (!user) throw new Error("User not found");
  } catch (error: any) {
    console.log(error.message);
  }
}
export async function updateUser(clerkId: string, user: UpdateUser) {
  try {
    await Connections();
    const updatedUser = await User.findOneAndUpdate({ clerkId }, user);
    if (!updatedUser) throw new Error("User update failed");
  } catch (error: any) {
    console.log(error.message);
  }
}
export async function deleteUser(clerkId: string) {
  try {
    await Connections();
    const userToDelete = await User.findOne({ clerkId });
    if (!userToDelete) {
      throw new Error("User not found");
    }
    await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");
  } catch (error: any) {
    console.log(error.message);
  }
}
