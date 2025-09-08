import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) return hint(400, "Provide username and password");

  if (username !== username.toLowerCase()) {
    return hint(401, "Alphabets must be lowercase.");
  }

  if (username === "caesarcipher3" && password === "password") {
    return okWithCookie(1, { next: "/challenges/logtwo" });
  }

  return hint(
    401,
    "Bonus: username is caesarcipher<concatenate the digit of shift>."
  );
}
