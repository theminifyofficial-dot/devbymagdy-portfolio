const SERVICES = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15.5A2.25 2.25 0 0022.25 18v-4.162c0-.224-.034-.447-.1-.661L20.24 5.338a2.25 2.25 0 00-2.15-1.588H15M9 3.75V16.5m0-12.75h6M2.25 13.5h5.379c.621 0 1.19.35 1.469.905l.606 1.212a1.636 1.636 0 001.469.906h2.554c.622 0 1.19-.35 1.47-.906l.605-1.212a1.636 1.636 0 011.47-.905h5.378"
      />
    ),
    title: "Shopify Theme Customization",
    description:
      "Transform your theme into a premium brand experience. Custom sections, sticky cart, size guide, shipping bar, and full mobile optimization.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    ),
    title: "Custom Web Development",
    description:
      "Landing pages, brand sites, and portfolio websites built clean and fast. Hosted on Vercel with auto-deploy.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
      />
    ),
    title: "Full Package",
    description:
      "Store build + traffic strategy. For brands serious about scaling.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I Build
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Focused services, built for brands that want results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-hover group rounded-2xl border border-white/10 bg-navy-light/50 p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
