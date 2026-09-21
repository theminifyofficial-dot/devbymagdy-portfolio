import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/work";

export default function Work() {
  return (
    <section id="work" className="bg-paper py-24 sm:py-32">
      <div className="section-container">
        <h2 className="display-lg max-w-2xl">Recent work</h2>
        <p className="prose-body mt-4 max-w-prose">
          Three projects, and what each one needed.
        </p>

        <ul className="mt-14 flex flex-col">
          {PROJECTS.map((p) => (
            <li key={p.slug} className="hairline last:border-b last:border-rule">
              <Link
                href={`/work/${p.slug}`}
                className="group grid items-center gap-6 py-8 sm:grid-cols-[13rem_1fr] sm:gap-10 lg:grid-cols-[17rem_1fr_auto] lg:gap-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-rule bg-white">
                  <Image
                    src={p.mockup.src}
                    alt={p.mockup.alt}
                    fill
                    sizes="(min-width: 1024px) 17rem, (min-width: 640px) 13rem, 92vw"
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <p className="font-display text-sm font-medium tracking-tight text-moss">
                    {p.category}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="prose-body mt-2 max-w-prose text-base">
                    {p.summary}
                  </p>
                </div>

                <span className="font-display text-[0.9375rem] font-semibold tracking-tight text-moss underline decoration-2 underline-offset-4 transition-colors duration-200 ease-out-strong group-hover:text-ink">
                  View full project
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
