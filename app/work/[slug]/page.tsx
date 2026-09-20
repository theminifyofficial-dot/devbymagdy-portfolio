import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneDemo from "@/components/PhoneDemo";
import { PROJECTS, getProject } from "@/lib/work";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} | devbymagdy`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | devbymagdy`,
      description: project.summary,
      images: [project.mockup.src],
    },
  };
}

function Detail({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="hairline grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <dt className="font-display text-sm font-semibold tracking-tight text-ink">
        {term}
      </dt>
      <dd className="prose-body max-w-prose">{children}</dd>
    </div>
  );
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navbar />
      <main className="bg-paper pt-32 pb-24 sm:pt-40">
        <article className="section-container">
          <Link
            href="/#work"
            className="font-display text-sm font-medium tracking-tight text-graphite transition-colors duration-200 ease-out-strong hover:text-ink"
          >
            Back to all work
          </Link>

          <header className="mt-8 max-w-3xl">
            <p className="font-display text-sm font-medium tracking-tight text-moss">
              {project.category}
            </p>
            <h1 className="display-xl mt-2 text-[2.75rem] sm:text-[3.5rem]">
              {project.name}
            </h1>
            <p className="prose-body mt-5 max-w-prose text-[1.125rem]">
              {project.summary}
            </p>
          </header>

          <div className="relative mt-12 aspect-[16/10] overflow-hidden border border-rule bg-white">
            <Image
              src={project.mockup.src}
              alt={project.mockup.alt}
              fill
              priority
              sizes="(min-width: 1024px) 72rem, 92vw"
              className="object-cover object-top"
            />
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <dl className="flex flex-col">
              <Detail term="The problem">{project.problem}</Detail>
              <Detail term="What I built">{project.built}</Detail>
              <Detail term="Where it stands">{project.result}</Detail>

              {project.link ? (
                <div className="pt-8">
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {project.link.label}
                  </a>
                </div>
              ) : (
                <p className="prose-body pt-8 text-sm">
                  This store is password protected, so there is no public
                  link. The recording and screenshots below are taken from the
                  running storefront.
                </p>
              )}
            </dl>

            <PhoneDemo
              src={project.demo.src}
              poster={project.demo.poster}
              caption={project.demo.caption}
            />
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2">
            {project.gallery.map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[16/10] overflow-hidden border border-rule bg-white">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 640px) 46vw, 92vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="prose-body mt-3 text-sm">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <nav aria-label="More work" className="hairline mt-20 pt-10">
            <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
              More work
            </h2>
            <ul className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-10">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="font-display text-[0.9375rem] font-semibold tracking-tight text-moss underline decoration-2 underline-offset-4 transition-colors duration-200 ease-out-strong hover:text-ink"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hairline mt-16 pt-10">
            <p className="prose-body max-w-prose">
              Building something similar? Tell me what you need and I will say
              how long it takes.
            </p>
            <Link href="/#contact" className="btn-primary mt-6">
              Start a project
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
