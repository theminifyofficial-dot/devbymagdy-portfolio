"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A storefront recording framed as a handset.
 *
 * Playback follows visibility: browsers pause muted autoplay video once it
 * scrolls out of view and never resume it, which would otherwise leave a
 * frozen frame for anyone scrolling back.
 */
export default function PhoneDemo({
  src,
  poster,
  caption,
  align = "center",
}: {
  src: string;
  poster: string;
  caption: string;
  align?: "center" | "start";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* Autoplay can be refused; the poster stays visible. */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <figure
      className={
        align === "start"
          ? "mx-auto w-full max-w-[280px] lg:mx-0"
          : "mx-auto w-full max-w-[280px]"
      }
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border-[6px] border-ink bg-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reducedMotion}
          aria-label={caption}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption
        className={`prose-body mt-4 text-sm ${align === "start" ? "text-center lg:text-left" : "text-center"}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
