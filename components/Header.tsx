"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Meet Waleed", href: "/meet-waleed" },
  { name: "MPS IV", href: "/mps-iv" },
  { name: "Resources", href: "/resources" },
  { name: "Research", href: "/research" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label="Team Waleed Foundation home"
        >
          <Image
            src="/team-waleed-logo.png"
            alt="Team Waleed Foundation logo"
            width={64}
            height={64}
            priority
            className="h-14 w-14 shrink-0 object-contain"
          />

          <div className="min-w-0">
            <p className="truncate text-lg font-bold leading-tight text-slate-950 sm:text-xl">
              Team Waleed
            </p>

            <p className="truncate text-xs font-medium text-blue-700 sm:text-sm">
              Together for every rare life
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/donate"
            className="ml-3 inline-flex min-h-11 items-center justify-center rounded-full bg-blue-700 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <nav
            className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-2">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/donate"
                onClick={closeMenu}
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}