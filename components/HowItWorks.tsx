const STEPS = [
  {
    title: "A free 30 minute call",
    description: "You tell me about the brand and what you are trying to build.",
  },
  {
    title: "I review what you already have",
    description:
      "If a store or site is already running, I go through what works and what is costing you sales.",
  },
  {
    title: "I build, you watch it happen",
    description:
      "Progress goes up as it is made, so you can react early rather than at handover.",
  },
  {
    title: "We launch",
    description: "Tested on real devices, checked, and handed over live.",
  },
];

/* Numbered because this genuinely is a sequence, not for decoration. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper py-24 sm:py-32">
      <div className="section-container">
        <h2 className="display-lg max-w-2xl">How the work runs</h2>
        <p className="prose-body mt-4 max-w-prose">
          From first call to launch day.
        </p>

        <ol className="mt-16 flex flex-col">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="hairline grid gap-2 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-8 lg:grid-cols-[3.5rem_20rem_1fr]"
            >
              <span className="font-display text-sm font-semibold tracking-tight text-moss">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display sm:col-start-2 lg:row-start-1 text-lg font-bold tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="prose-body sm:col-start-2 lg:col-start-3 lg:row-start-1 max-w-prose text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
