import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Stage 6 — connectedPath" };

export default async function Page() {
  const gate = await requireUpTo(6);
  if (!gate.ok)
    redirect(
      `/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <LoginForm
      action="/api/logsix"
      title="Stage 6 — connectedPath"
      subtitle="Find the proper path to find the JSON page."
      hints={["What is the 20th prime number?"]}
      nextHref="/success"
    />
  );
}
