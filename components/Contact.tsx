"use client";

import Script from "next/script";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/magdy5613/30min";
const CONTACT_EMAIL = "magdy5613@gmail.com";
const WHATSAPP_URL = "https://wa.me/201099032110";

export default function Contact() {
  const [scriptError, setScriptError] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="display-lg">Start a project</h2>
            <p className="prose-body mt-4 max-w-prose">
              Book a free 30 minute call, or message me directly. You reach me,
              not an account manager.
            </p>

            <dl className="mt-10 flex flex-col">
              <div className="hairline py-5">
                <dt className="font-display text-sm font-semibold tracking-tight text-ink">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-body text-moss underline underline-offset-4 transition-colors duration-200 ease-out-strong hover:text-ink"
                  >
                    Message me directly
                  </a>
                </dd>
              </div>

              <div className="hairline py-5">
                <dt className="font-display text-sm font-semibold tracking-tight text-ink">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="prose-body break-all text-moss underline underline-offset-4 transition-colors duration-200 ease-out-strong hover:text-ink"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>

              <div className="hairline py-5">
                <dt className="font-display text-sm font-semibold tracking-tight text-ink">
                  Based in
                </dt>
                <dd className="prose-body mt-1">Cairo, Egypt</dd>
              </div>
            </dl>
          </div>

          <div className="border border-rule bg-paper">
            {!scriptError ? (
              <>
                {!scriptLoaded && (
                  <div className="prose-body flex h-[520px] items-center justify-center text-sm">
                    Loading the calendar
                  </div>
                )}
                <div
                  className="calendly-inline-widget"
                  data-url={CALENDLY_URL}
                  style={{
                    minWidth: "320px",
                    height: "520px",
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
              <div className="flex flex-col items-start gap-5 p-10">
                <p className="prose-body">
                  The booking calendar did not load. Open it directly, or send
                  an email and I will reply with times.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open the calendar
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
                    Send an email
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
