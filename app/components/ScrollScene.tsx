"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

type ScrollSceneProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export default function ScrollScene({ id, className, children }: ScrollSceneProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let trigger: any;
    let cancelled = false;

    if (!rootRef.current || typeof window === "undefined") {
      return;
    }

    (async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      if (cancelled || !rootRef.current) return;

      const gsap = gsapModule.gsap ?? gsapModule.default ?? gsapModule;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger ?? scrollTriggerModule.default ?? scrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);

      trigger = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
      });
    })();

    return () => {
      cancelled = true;
      if (trigger) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={rootRef}
      // Ensure non-static positioning for scroll/animation libraries.
      style={{ position: "relative" }}
      className={`flex min-h-screen w-full items-center justify-center overflow-hidden ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

