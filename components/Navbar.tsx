"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Book a Call", href: "#booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between py-4">
        <a href="#top" className="flex items-center">
          <img
            src="/logo.svg"
            alt="devbymagdy"
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#booking" className="btn-primary hidden md:inline-flex">
          Book a Call
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 border-t border-white/10" : "max-h-0"
        }`}
      >
        <ul className="section-container flex flex-col gap-1 bg-navy/95 py-4 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
