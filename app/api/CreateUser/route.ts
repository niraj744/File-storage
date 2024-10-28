export const dynamic = "force-dynamic";

import { CreateUser, getUserById } from "@/Actions/user.actions";
import { Create } from "@/Types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const GET = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isUser = await getUserById(user.id);
  if (isUser) return redirect("/dashboard");
  const userObj: Create = {
    kindId: user.id,
    email: user.email!,
    firstName: user.given_name!,
    lastName: user.family_name!,
    imageUrl: user.picture!,
  };
  await CreateUser(userObj);
  return redirect("/dashboard");
};
