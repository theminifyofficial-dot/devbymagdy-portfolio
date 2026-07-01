"use client";

import { useRef, useState } from "react";

export default function MobileDemo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="mt-6 grid gap-8 rounded-2xl border border-white/10 bg-navy-light/50 p-8 sm:p-10 md:grid-cols-2 md:items-center">
      <div>
        <h3 className="text-xl font-semibold text-white">
          See It On Mobile
        </h3>
        <p className="mt-3 text-white/60">
          A real screen recording of the YASSYS storefront on mobile —
          browsing, product pages, and the checkout flow in action.
        </p>
      </div>

      <div className="relative mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-navy">
        <video
          ref={videoRef}
          src="/yassys-mobile-demo.mp4"
          controls={playing}
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play mobile browsing demo"
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/40 transition-transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="ml-1 h-7 w-7 text-white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
