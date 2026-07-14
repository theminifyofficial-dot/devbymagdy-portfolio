import Image from "next/image";
import MobileDemo from "./MobileDemo";
import Reveal from "./Reveal";

const PILL_TAGS = ["Shopify", "Custom Theme"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-mist py-24 sm:py-32">
      <div className="section-container">
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Recent Work
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            A look at what a finished project actually looks like.
          </p>
        </Reveal>

        <Reveal>
          <a
            href="https://shenwb-db.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group grid overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-900/5 md:grid-cols-5"
          >
            <div className="relative aspect-video overflow-hidden bg-mist p-4 md:col-span-3 md:aspect-auto md:p-8">
              <Image
                src="/yassys-screenshot.png"
                alt="YASSYS desktop and mobile storefront preview"
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 md:col-span-2">
              <h3 className="text-2xl font-bold text-navy">YASSYS</h3>
              <p className="mt-1 text-sm font-medium text-accent">
                Fashion Brand
              </p>
              <p className="mt-4 text-navy/60">
                Built a full custom Shopify Dawn theme from scratch. Custom
                brand palette, typography, sticky add-to-cart, size guide
                modal, animated shipping progress bar, and complete mobile
                optimization.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {PILL_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
                <span className="rounded-full border border-navy/10 px-3 py-1 text-xs font-medium text-navy/60">
                  Cairo, Egypt
                </span>
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-accent">
                Visit store
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={150}>
          <MobileDemo />
        </Reveal>
      </div>
    </section>
  );
}
