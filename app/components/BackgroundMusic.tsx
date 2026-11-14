"use client";

import { useEffect, useRef, useState } from "react";
import { digitalConfig } from "../config/proposal";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const fadeIn = (audio: HTMLAudioElement) => {
    audio.volume = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          let vol = 0;
          const interval = setInterval(() => {
            vol += 0.04;
            if (vol >= 0.45) {
              audio.volume = 0.45;
              clearInterval(interval);
            } else {
              audio.volume = vol;
            }
          }, 120);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (hasInteracted) return;
      setHasInteracted(true);
      if (audioRef.current && !isPlaying) {
        fadeIn(audioRef.current);
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { passive: true });
    window.addEventListener("scroll", handleFirstInteraction, { passive: true });
    window.addEventListener("keydown", handleFirstInteraction, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, [hasInteracted, isPlaying]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={digitalConfig.audio.src}
        loop
        preload="auto"
      />

      {/* Floating Glassmorphism Music Controller */}
      <div className="fixed top-5 right-5 z-50 sm:top-6 sm:right-6">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Mute soundtrack" : "Play soundtrack"}
          className="group flex min-h-[44px] items-center gap-3 rounded-full border border-roseGold/30 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-200 shadow-soft-glow backdrop-blur-md transition-all duration-300 hover:border-romanticPink/60 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-romanticPink"
        >
          {/* Animated sound wave bars */}
          <div className="flex h-3.5 w-3.5 items-end justify-center gap-0.5" aria-hidden="true">
            <span
              className={`w-0.5 rounded-full bg-romanticPink transition-all duration-300 ${
                isPlaying ? "h-3 animate-[pulse_0.8s_ease-in-out_infinite]" : "h-1"
              }`}
            />
            <span
              className={`w-0.5 rounded-full bg-duskyLavender transition-all duration-300 ${
                isPlaying ? "h-3.5 animate-[pulse_1.1s_ease-in-out_infinite_0.2s]" : "h-1.5"
              }`}
            />
            <span
              className={`w-0.5 rounded-full bg-roseGold transition-all duration-300 ${
                isPlaying ? "h-2 animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" : "h-1"
              }`}
            />
          </div>

          <span className="hidden tracking-wider sm:inline-block">
            {isPlaying ? "Music Playing" : "Tap for Sound"}
          </span>

          {isPlaying ? (
            <svg
              className="h-4 w-4 text-romanticPink transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
