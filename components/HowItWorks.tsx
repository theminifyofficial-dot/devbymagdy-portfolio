const STEPS = [
  {
    number: "01",
    title: "Book a free 30-min call",
    description: "Tell me about your brand and what you're trying to build.",
  },
  {
    number: "02",
    title: "I audit your current store",
    description: "If you already have a store, I review what's working and what isn't.",
  },
  {
    number: "03",
    title: "I build, you review in real time",
    description: "You stay in the loop with progress updates as the work happens.",
  },
  {
    number: "04",
    title: "We launch and you get results",
    description: "Live, tested, and ready to convert visitors into customers.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Work Together
          </h2>
          <p className="mt-4 text-lg text-white/60">
            A simple, transparent process from first call to launch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4 md:gap-6">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              {index < STEPS.length - 1 && (
                <div className="absolute left-0 top-6 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-accent/40 to-transparent md:block" />
              )}
              <div className="relative flex flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-navy text-sm font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
