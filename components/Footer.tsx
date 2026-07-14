const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Book a Call", href: "#booking" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="section-container flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <a href="#top" className="flex items-center">
            <img src="/logo.svg" alt="devbymagdy" className="h-9 w-auto" />
          </a>
          <p className="mt-3 text-sm text-navy/50">
            Building brands that sell.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-navy/60 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-2 text-sm text-navy/60 sm:items-end">
          <a
            href="mailto:magdy5613@gmail.com"
            className="transition-colors hover:text-navy"
          >
            magdy5613@gmail.com
          </a>
          <a
            href="https://instagram.com/devbymagdy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-navy"
          >
            @devbymagdy
          </a>
        </div>
      </div>

      <div className="section-container mt-10 border-t border-slate-100 pt-6 text-center text-xs text-navy/40">
        © {year} devbymagdy. All rights reserved.
      </div>
    </footer>
  );
}
