import LoginForm from "@/components/login-form";

export const metadata = { title: "Stage 1 — caesarCipher" };

export default function Page() {
  return (
    <LoginForm
      action="/api/logone"
      title="Stage 1 — caesarCipher"
      subtitle="Decrypt the password."
      hints={[
        "Encrypted password: sdvvzrug",
        "Classic Caesar Cipher. 3 shift but what sign?",
        "Is it negative or positive shift?",
      ]}
      nextHref="/challenges/logtwo"
    />
  );
}
