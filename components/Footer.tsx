import Link from "next/link";
import Wordmark from "./Wordmark";

const SITE_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms and conditions", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-paper py-14">
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Wordmark className="text-lg" />
            <p className="prose-body mt-4 max-w-xs text-sm">
              Custom Shopify themes and websites, built in Cairo.
            </p>
          </div>

          <nav aria-label="Site">
            <ul className="flex flex-col gap-2.5">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-sm font-medium tracking-tight text-graphite transition-colors duration-200 ease-out-strong hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href="https://wa.me/201099032110"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm font-medium tracking-tight text-graphite transition-colors duration-200 ease-out-strong hover:text-ink"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:magdy5613@gmail.com"
                className="font-display break-all text-sm font-medium tracking-tight text-graphite transition-colors duration-200 ease-out-strong hover:text-ink"
              >
                magdy5613@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/devbymagdy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm font-medium tracking-tight text-graphite transition-colors duration-200 ease-out-strong hover:text-ink"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="hairline mt-12 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="prose-body text-xs">
            {year} devbymagdy. Mahmoud Magdy.
          </p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-xs font-medium tracking-tight text-graphite transition-colors duration-200 ease-out-strong hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
