"use client";

import { useEffect, useState } from "react";
import { navLinks, socialLinks } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-neutral-800 bg-black/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl flex-col px-4 py-4 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center justify-between sm:justify-start">
          <span className="text-2xl font-bold">HV<span className="animate-[toggle_1s_infinite]">_</span></span>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-md p-2 text-neutral-300 transition-colors hover:text-white sm:hidden"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden items-center gap-6 sm:flex sm:text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-neutral-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:flex">
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} link={link} />
          ))}
        </div>

        {mobileOpen && (
          <div className="mt-3 rounded-lg border border-neutral-800 bg-black/95 p-4 sm:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((link) => (
                <SocialIcon key={link.name} link={link} />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
