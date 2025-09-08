import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (
    username === "r1ckr0ll" &&
    password === "canyoutypethiseventhisissolong"
  ) {
    return okWithCookie(6, { next: "/success" });
  }
  return hint(401, "Connect the endpoint through the path in url.");
}
