"use client";

import Script from "next/script";
import { useState } from "react";
import Reveal from "./Reveal";

const CALENDLY_URL = "https://calendly.com/magdy5613/30min";
const CONTACT_EMAIL = "magdy5613@gmail.com";

export default function Booking() {
  const [scriptError, setScriptError] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <section id="booking" className="bg-mist py-24 sm:py-32">
      <div className="section-container max-w-3xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Book Your Free Discovery Call
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-navy/60">
            No pitch. No pressure. Just a real conversation about your store
            or website — and what we can improve.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-900/5">
            {!scriptError ? (
              <>
                {!scriptLoaded && (
                  <div className="flex h-[500px] flex-col items-center justify-center gap-3 text-navy/40">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-navy/10 border-t-accent" />
                    <span className="text-sm">Loading calendar...</span>
                  </div>
                )}
                <div
                  className="calendly-inline-widget"
                  data-url={CALENDLY_URL}
                  style={{
                    minWidth: "320px",
                    height: "500px",
                    display: scriptLoaded ? "block" : "none",
                  }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                  onLoad={() => setScriptLoaded(true)}
                  onError={() => setScriptError(true)}
                />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
                <p className="text-navy/60">
                  Couldn&apos;t load the booking widget. No worries — book
                  directly or drop me an email instead.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open Calendly
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-navy/50">
            Prefer email? Reach out directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-accent hover:text-purple"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
