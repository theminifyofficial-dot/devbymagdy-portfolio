const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Book a Call", href: "#booking" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-container flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <a href="#top" className="text-lg font-bold tracking-tight text-white">
            devby<span className="text-accent">magdy</span>
          </a>
          <p className="mt-2 text-sm text-white/50">
            Building brands that sell.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-2 text-sm text-white/60 sm:items-end">
          <a
            href="mailto:magdy5613@gmail.com"
            className="transition-colors hover:text-white"
          >
            magdy5613@gmail.com
          </a>
          <a
            href="https://instagram.com/devbymagdy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            @devbymagdy
          </a>
        </div>
      </div>

      <div className="section-container mt-10 border-t border-white/5 pt-6 text-center text-xs text-white/40">
        © {year} devbymagdy. All rights reserved.
      </div>
    </footer>
  );
}
