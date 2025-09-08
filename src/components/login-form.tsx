"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({
  action,
  title,
  subtitle,
  hints,
  fields = ["username", "password"],
  nextHref,
}: {
  action: string;
  title: string;
  subtitle?: string;
  hints?: string[];
  fields?: ("username" | "password" | "code" | "answer")[];
  nextHref: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    const form = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    for (const [k, v] of form.entries()) payload[k] = String(v);

    const res = await fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok && data.ok) {
      router.push(nextHref);
    } else {
      setMsg(data.message ?? "Try again.");
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-md p-6 border mt-10 space-y-4 bg-zinc-700">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-sm font-mono text-emerald-400">{subtitle}</p>
      )}
      {hints?.length ? (
        <details className="p-3 border">
          <summary className="cursor-pointer font-medium">Hint(s)</summary>
          <ul className="list-disc pl-6 mt-2 text-sm">
            {hints.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </details>
      ) : null}

      <form onSubmit={onSubmit} className="space-y-3">
        {fields.includes("username") && (
          <input
            name="username"
            placeholder="username"
            className="w-full border px-3 py-2"
            required
          />
        )}
        {fields.includes("password") && (
          <input
            name="password"
            placeholder="password"
            type="password"
            className="w-full border px-3 py-2"
            required
          />
        )}
        {fields.includes("answer") && (
          <input
            name="answer"
            placeholder="your answer"
            className="w-full border px-3 py-2"
            required
          />
        )}
        {fields.includes("code") && (
          <input
            name="code"
            placeholder="code"
            className="w-full border px-3 py-2"
            required
          />
        )}
        <button
          disabled={loading}
          className="w-full py-2 shadow-[2px_2px_0px_#000] bg-zinc-900 text-white disabled:opacity-60 active:translate-[2px] active:shadow-none active:bg-zinc-800"
        >
          {loading ? "Checking…" : "Submit"}
        </button>
      </form>
      {msg && <p className="text-sm text-red-300">{msg}</p>}
    </div>
  );
}
