import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 4 — anagramDuo" };

export default async function Page() {
  const gate = await requireUpTo(4);
  if (!gate.ok)
    redirect(
      `/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logfour"
        title="Stage 4 — anagramDuo"
        subtitle="Rearrange the letters."
        hints={[
          "The username and password is math related anagram",
          "example: username=='anagram' password=='nagaram'",
        ]}
        nextHref="/challenges/logfive"
      />
    </>
  );
}
