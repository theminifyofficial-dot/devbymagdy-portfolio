const SERVICES = [
  {
    title: "Custom web development",
    description:
      "Landing pages, brand sites and portfolios for businesses that need to be live fast. Hosted on Vercel with automatic deploys.",
    scope: ["Landing pages", "Brand sites", "Portfolios"],
  },
  {
    title: "Shopify theme work",
    description:
      "For stores outgrowing their theme. Custom sections, sticky cart, size guides and shipping bars, tuned for mobile first.",
    scope: ["Custom sections", "Sticky cart", "Speed and mobile tuning"],
  },
  {
    title: "Store build and launch",
    description:
      "The full storefront from empty Shopify admin to launch day, including product setup, theme build and go live checks.",
    scope: ["Theme build", "Product setup", "Launch checks"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="section-container">
        <h2 className="display-lg max-w-2xl">What I build</h2>
        <p className="prose-body mt-4 max-w-prose">
          Three ways to work together.
        </p>

        <div className="mt-16 grid gap-px border border-rule bg-rule md:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white p-8 sm:p-10">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                {service.title}
              </h3>
              <p className="prose-body mt-4 text-base">{service.description}</p>

              <ul className="mt-6 flex flex-col gap-2">
                {service.scope.map((item) => (
                  <li
                    key={item}
                    className="font-display flex items-baseline gap-2.5 text-sm font-medium tracking-tight text-graphite"
                  >
                    <span aria-hidden="true" className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-moss" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
