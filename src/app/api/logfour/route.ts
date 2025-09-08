import { NextRequest } from "next/server";
import { okWithCookie, hint } from "@/lib/responses";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "triangle" && password === "integral") {
    return okWithCookie(4, { next: "/challenges/logfive" });
  }

  return hint(
    401,
    "Well. If you can't really find any math-related just arrange this: elgnairt"
  );
}
