import { NextResponse } from "next/server";

export function okWithCookie(stage: number, body: Record<string, unknown>) {
  const res = NextResponse.json({ ok: true, ...body });
  res.cookies.set(`stage${stage}`, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export function hint(status: number, message: string) {
  const res = NextResponse.json({ ok: false, message }, { status });
  res.headers.set("X-Hint", message);
  return res;
}
