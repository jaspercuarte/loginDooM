export default function Home() {
  return (
    <main className="space-y-3 bg-zinc-700">
      <details className="p-3 border">
        <summary className="cursor-pointer font-medium">Context</summary>
        <ul className="list-disc pl-6 mt-2 text-sm">
          <li>You are stuck in login loop</li>
          <li>You are free to research</li>
          <li>Find your way to escape this loginDooM</li>
          <li>You can add the next stage into the path i.e. /logtwo</li>
        </ul>
      </details>
      <p className="font-mono text-emerald-400">
        Start at{" "}
        <a className="font-semibold" href="/challenges/logone">
          /logone
        </a>
      </p>
    </main>
  );
}
