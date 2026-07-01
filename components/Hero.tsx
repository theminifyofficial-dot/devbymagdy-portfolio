export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="section-container flex flex-col items-center py-24 text-center">
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for new projects — Cairo, Egypt
        </div>

        <h1 className="animate-fade-in-up max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Websites That Actually{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Sell
          </span>
        </h1>

        <p className="animate-fade-in-up mt-6 max-w-xl text-balance text-lg text-white/60 sm:text-xl">
          I build websites for Egyptian and international brands — and make
          sure they look the part.
        </p>

        <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#booking" className="btn-primary">
            Book a Free Call
          </a>
          <a href="#portfolio" className="btn-secondary">
            See My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
