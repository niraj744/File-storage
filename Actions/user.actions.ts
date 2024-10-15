import User from "@/DB/Models/User";
import { Create } from "@/Types";

export const CreateUser = async (UserDetail: Create): Promise<void> => {
  try {
    await User.create(UserDetail);
  } catch (error: unknown) {
    console.log((error as Error).message);
  }
};
