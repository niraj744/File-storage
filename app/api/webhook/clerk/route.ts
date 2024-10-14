import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  req.cookies.set("cookie", "hello");
  return NextResponse.json({ message: "hello world" });
};
