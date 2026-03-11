import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Soft Constellations",
  description: "A quiet, romantic scroll through a cinematic night."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-romantic-gradient bg-romantic-gradient bg-romantic-gradient/0 relative overflow-x-hidden text-slate-50">
        <div className="pointer-events-none fixed inset-0 bg-romantic-gradient opacity-80 mix-blend-screen" />
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950" />
        <main className="relative z-10 flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}

