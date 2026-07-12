import Image from "next/image";
import Link from "next/link";

const foundationLinks = [
  { name: "About Us", href: "/about" },
  { name: "Meet Waleed", href: "/meet-waleed" },
  { name: "Our Research", href: "/research" },
  { name: "Latest News", href: "/news" },
];

const resourceLinks = [
  { name: "Understanding MPS IV", href: "/mps-iv" },
  { name: "Rare Disease Resources", href: "/resources" },
  { name: "Medical Education", href: "/education" },
  { name: "Support the Mission", href: "/support" },
];

const actionLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Donate", href: "/donate" },
  { name: "Volunteer", href: "/contact" },
  { name: "Healthcare Collaboration", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-4"
              aria-label="Team Waleed Foundation home"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <Image
                  src="/images/teamwaleed-logo.png"
                  alt="Team Waleed Foundation logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-xl font-bold">Team Waleed Foundation</p>

                <p className="mt-1 text-sm font-medium text-blue-300">
                  Together for every rare life
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-7 text-slate-300">
              Supporting rare disease awareness, education, research,
              healthcare collaboration, and families seeking reliable
              information and hope.
            </p>

            <div className="mt-7">
              <Link
                href="/donate"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Support Our Mission
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Foundation
              </h2>

              <ul className="mt-5 space-y-3">
                {foundationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Resources
              </h2>

              <ul className="mt-5 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Get Involved
              </h2>

              <ul className="mt-5 space-y-3">
                {actionLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>
              © {currentYear} Team Waleed Foundation. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms of Use
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-xs leading-6 text-slate-500">
            Information provided on this website is for awareness and
            educational purposes. It does not replace professional medical
            advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}