import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (username === "v1ews0urce" && password === "look-at-the-css") {
    return okWithCookie(2, { next: "/challenges/logthree" });
  }
  return hint(401, "Check the page source for credentials.");
}
