import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    username: "r1ckr0ll",
    password: "canyoutypethiseventhisissolong",
  });
}
