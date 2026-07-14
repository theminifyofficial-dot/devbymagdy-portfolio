import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20"
    >
      {/* dot grid texture */}
      <div className="dot-grid pointer-events-none absolute inset-0" />

      {/* floating geometric shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute left-[8%] top-[20%] h-20 w-20 rounded-full bg-accent/10" />
        <div className="animate-float-slow absolute right-[12%] top-[16%] h-16 w-16 rounded-2xl bg-purple/10" />
        <div className="animate-float-slow absolute left-[16%] top-[68%] h-10 w-10 rounded-full bg-purple/15" />
        <div className="animate-float absolute right-[8%] top-[62%] h-24 w-24 rounded-3xl bg-accent/10" />
        <div className="animate-float absolute left-[42%] top-[10%] h-6 w-6 rounded-full bg-accent/20" />
        <div className="animate-float-slow absolute right-[30%] top-[78%] h-8 w-8 rounded-full bg-purple/20" />
        <div className="absolute right-[20%] top-[30%] h-3 w-3 rounded-full bg-accent/40" />
        <div className="absolute left-[30%] top-[80%] h-3 w-3 rounded-full bg-purple/40" />
      </div>

      {/* big prominent logo mark */}
      <div className="animate-float-slow pointer-events-none absolute right-[6%] top-[18%] -rotate-6 sm:right-[10%] sm:top-[14%]">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-navy shadow-2xl shadow-navy/20 sm:h-32 sm:w-32">
          <span className="font-mono text-4xl font-bold text-accent sm:text-5xl">
            &gt;_
          </span>
        </div>
      </div>

      <div className="section-container flex flex-col items-center py-24 text-center">
        <Reveal>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl md:text-7xl">
            Websites That Actually{" "}
            <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
              Sell
            </span>
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-xl text-balance text-lg text-navy/60 sm:text-xl">
            I build websites for Egyptian and international brands — and make
            sure they look the part.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-to-r from-accent/30 to-purple/30 blur-3xl" />
              <a href="#booking" className="btn-primary">
                Book a Free Call
              </a>
            </div>
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
        </Reveal>
      </div>
    </section>
  );
}
