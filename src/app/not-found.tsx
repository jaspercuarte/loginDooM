import Link from "next/link";

export const metadata = {
  title: "Locked Page",
};

export default function NotFound() {
  return (
    <main className="space-y-3 bg-zinc-700">
      <p className="font-mono text-emerald-400">
        Locked Page? Is it either you still not finish the stage or the page is
        not found...
        <Link className="font-semibold" href="/">
          Go Back to Home
        </Link>
      </p>
    </main>
  );
}
