import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import StarfieldCanvas from "./components/StarfieldCanvas";
import BackgroundMusic from "./components/BackgroundMusic";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Soft Constellations | An Interactive Digital Experience",
  description:
    "A cinematic, interactive scroll-based storytelling experience designed to present a poetic narrative through starlight and whispers."
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-50 antialiased selection:bg-roseGold/30 selection:text-romanticPink">
        {/* Ambient celestial background canvas */}
        <StarfieldCanvas />

        {/* Global gradients for atmospheric depth */}
        <div
          className="pointer-events-none fixed inset-0 bg-romantic-gradient opacity-35 mix-blend-screen"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none fixed inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/80 to-slate-950"
          aria-hidden="true"
        />

        {/* Background audio controller & music toggle pill */}
        <BackgroundMusic />

        {/* Luxury smooth scroll wrapper */}
        <SmoothScroll>
          <main className="relative z-10 flex min-h-screen flex-col">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
