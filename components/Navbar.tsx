"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-out-strong ${
        scrolled ? "border-b border-rule bg-paper/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <Link href="/" aria-label="devbymagdy home" className="flex items-center">
          <Wordmark className="text-lg sm:text-xl" />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
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

        <Link
          href="/#contact"
          className="hidden bg-ink px-5 py-2.5 font-display text-sm font-semibold tracking-tight text-paper transition-colors duration-200 ease-out-strong hover:bg-moss md:inline-flex"
        >
          Start a project
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
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
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M3.75 7.5h16.5M3.75 16.5h16.5" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-rule bg-paper md:hidden"
      >
        <ul className="section-container flex flex-col py-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-rule last:border-0">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display block py-4 text-base font-medium tracking-tight text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
