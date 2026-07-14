import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Book a free 30-min call",
    description: "Tell me about your brand and what you're trying to build.",
    color: "text-accent",
  },
  {
    number: "02",
    title: "I audit your current store",
    description: "If you already have a store, I review what's working and what isn't.",
    color: "text-purple",
  },
  {
    number: "03",
    title: "I build, you review in real time",
    description: "You stay in the loop with progress updates as the work happens.",
    color: "text-accent",
  },
  {
    number: "04",
    title: "We launch and you get results",
    description: "Live, tested, and ready to convert visitors into customers.",
    color: "text-purple",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="section-container">
        <Reveal className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            How We Work Together
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            A simple, transparent process from first call to launch.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <div className="relative">
                {index < STEPS.length - 1 && (
                  <div className="absolute left-0 top-9 hidden w-full translate-x-1/2 border-t-2 border-dashed border-navy/15 md:block" />
                )}
                <div className="relative flex flex-col">
                  <span
                    className={`text-6xl font-extrabold leading-none ${step.color} opacity-20 sm:text-7xl`}
                  >
                    {step.number}
                  </span>
                  <h3 className="-mt-3 mb-2 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy/60">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
