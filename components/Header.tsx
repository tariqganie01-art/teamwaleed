"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Meet Waleed", href: "/meet-waleed" },
  { name: "MPS IV", href: "/mps-iv" },
  { name: "Resources", href: "/resources" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/team-waleed-logo.png"
            alt="Team Waleed Foundation logo"
            width={60}
            height={60}
            priority
            className="h-12 w-12 rounded-full object-contain sm:h-14 sm:w-14"
          />

          <div className="min-w-0">
            <p className="truncate text-base font-bold text-slate-900 sm:text-lg">
              Team Waleed Foundation
            </p>

            <p className="truncate text-xs font-medium text-blue-700 sm:text-sm">
              Together for every rare life
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Support Us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-700 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open menu</span>

          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-blue-700 px-4 py-3 text-center font-semibold text-white hover:bg-blue-800"
            >
              Support Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}