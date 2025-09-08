import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "finalboss" && password === "ultimate-secret") {
    return okWithCookie(5, { next: "/challenges/logsix" });
  }

  return hint(401, "If you still can't find it's on Dev tools.");
}
