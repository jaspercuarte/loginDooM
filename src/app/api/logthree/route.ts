import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "div" && password === "ifoundyou") {
    return okWithCookie(3, { next: "/challenges/logfour" });
  }

  return hint(401, "Inspect the page styles — something’s hidden.");
}
