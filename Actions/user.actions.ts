"use server";

import User from "@/DB/Models/User";
import { Create } from "@/Types";
import { connectToDatabase } from "@/DB/Connection";

export const CreateUser = async (UserDetail: Create) => {
  try {
    await connectToDatabase();
    await User.create(UserDetail);
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findOne({ kindId: userId });
    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
}
