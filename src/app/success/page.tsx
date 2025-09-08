import { requireUpTo } from "@/lib/progress";
import { redirect } from "next/navigation";

export const metadata = { title: "Success — All Stages Cleared" };

export default async function Page() {
  const gate = await requireUpTo(7);
  if (!gate.ok)
    redirect(
      `/log${
        ["one", "two", "three", "four", "five", "six"][gate.missingAt! - 1]
      }`
    );

  return (
    <div className="bg-zinc-700">
      <img
        src="success.gif"
        className="shadow-[inset_4px_4px_0px_#000] border border-zinc-900"
      />
      <p className="font-mono text-emerald-400 mt-3">
        Tap the{" "}
        <span className="font-semibold border-t-4 border-dashed">
          loginDooM
        </span>{" "}
        to return
      </p>
    </div>
  );
}
