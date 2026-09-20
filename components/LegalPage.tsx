import Link from "next/link";
import Wordmark from "./Wordmark";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper">
      <header className="border-b border-rule">
        <div className="section-container flex h-20 items-center justify-between">
          <Link href="/" aria-label="devbymagdy home">
            <Wordmark className="text-lg" />
          </Link>
          <Link
            href="/"
            className="font-display text-sm font-medium tracking-tight text-graphite transition-colors duration-200 ease-out-strong hover:text-ink"
          >
            Back to site
          </Link>
        </div>
      </header>

      <main className="section-container max-w-3xl py-20 sm:py-28">
        <h1 className="display-lg">{title}</h1>
        <p className="prose-body mt-3 text-sm">Last updated {updated}</p>
        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </main>

      <footer className="border-t border-rule py-10">
        <div className="section-container">
          <p className="prose-body text-xs">
            {new Date().getFullYear()} devbymagdy. Mahmoud Magdy.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function Clause({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
        {heading}
      </h2>
      <div className="prose-body mt-3 flex flex-col gap-3">{children}</div>
    </section>
  );
}
