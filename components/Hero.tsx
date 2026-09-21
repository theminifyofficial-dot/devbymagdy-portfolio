import HeroDemo from "./HeroDemo";

export default function Hero() {
  return (
    <section id="top" className="bg-paper pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="section-container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="stagger">
            <h1
              style={{ "--i": 0 } as React.CSSProperties}
              className="display-xl text-[2.75rem] sm:text-[3.75rem] lg:text-[4.25rem]"
            >
              Helping brands sell more with websites built to convert.
            </h1>

            <div
              style={{ "--i": 1 } as React.CSSProperties}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                Start a project
              </a>
              <a href="#work" className="btn-secondary">
                See recent work
              </a>
            </div>
          </div>

          <div className="stagger">
            <div style={{ "--i": 1 } as React.CSSProperties}>
              <HeroDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
