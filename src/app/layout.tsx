import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "loginDooM",
  description: "Escape this login DOOM right now!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center min-h-screen bg-zinc-300 text-zinc-50 bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] bg-[size:80px_80px]">
        <div className="max-w-2xl ml-1 mr-3 mt-1 mb-3 p-12 bg-zinc-700 shadow-[4px_4px_0px_#000] bg-[linear-gradient(to_right,#444_1px,transparent_1px),linear-gradient(to_bottom,#444_1px,transparent_1px)] bg-[size:10px_10px]">
          <header className="mb-6 bg-zinc-700 p-1">
            <a
              href="/"
              className="text-3xl font-extrabold font-mono overline decoration-dashed"
            >
              login<span className="font-extrabold">DooM</span>
            </a>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
