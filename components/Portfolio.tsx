import Image from "next/image";
import MobileDemo from "./MobileDemo";

const TAGS = ["Shopify", "Custom Theme", "Cairo, Egypt"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent Work
          </h2>
          <p className="mt-4 text-lg text-white/60">
            A look at what a finished project actually looks like.
          </p>
        </div>

        <a
          href="https://shenwb-db.myshopify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover group grid overflow-hidden rounded-2xl border border-white/10 bg-navy-light/50 md:grid-cols-2"
        >
          <div className="relative aspect-video overflow-hidden bg-navy p-4 md:aspect-auto md:p-6">
            <Image
              src="/yassys-screenshot.png"
              alt="YASSYS desktop and mobile storefront preview"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-white">YASSYS</h3>
            <p className="mt-1 text-sm font-medium text-accent-light">
              Fashion Brand
            </p>
            <p className="mt-4 text-white/60">
              Built a full custom Shopify Dawn theme from scratch. Custom
              brand palette, typography, sticky add-to-cart, size guide
              modal, animated shipping progress bar, and complete mobile
              optimization.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-accent-light">
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

        <MobileDemo />
      </div>
    </section>
  );
}
