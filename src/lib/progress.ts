import { cookies } from "next/headers";

export async function hasStage(n: number) {
  const c = await cookies();
  return c.get(`stage${n}`)?.value === "1";
}

export async function requireUpTo(stage: number): Promise<{
  ok: boolean;
  missingAt: number | null;
}> {
  for (let i = 1; i < stage; i++) {
    if (!(await hasStage(i))) return { ok: false, missingAt: i };
  }
  return { ok: true, missingAt: null };
}
