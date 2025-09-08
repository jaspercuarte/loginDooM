import LoginForm from "@/components/login-form";
import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";
import "./credentials.css";

export const metadata = { title: "Stage 2 — viewSrc" };

export default async function Page() {
  const gate = await requireUpTo(2);
  if (!gate.ok)
    redirect(
      `/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <>
      <LoginForm
        action="/api/logtwo"
        title="Stage 2 — viewSrc"
        subtitle="Some secrets hide in plain sight :>."
        hints={[
          "Try viewing the page source and check css files",
          "Check comments?",
          "find _next/static",
        ]}
        nextHref="/challenges/logthree"
      />
    </>
  );
}
