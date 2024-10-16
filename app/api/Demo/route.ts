import { connectToDatabase } from "@/DB/Connection";
import User from "@/DB/Models/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();
  await connectToDatabase();
  const create = await User.create(data);
  return NextResponse.json({ message: "hello world" });
};
