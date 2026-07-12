import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Meet Waleed", href: "/meet-waleed" },
  { name: "MPS IV", href: "/mps-iv" },
  { name: "Resources", href: "/resources" },
];

const foundationLinks = [
  { name: "Research Hub", href: "/research" },
  { name: "News and Updates", href: "/news" },
  { name: "Support Us", href: "/support" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/team-waleed-logo.png"
                alt="Team Waleed Foundation logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-contain"
              />

              <div>
                <p className="font-bold">Team Waleed Foundation</p>
                <p className="text-sm text-blue-300">
                  Together for every rare life
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-slate-300">
              Supporting rare disease awareness, family resources, medical
              education and responsible research collaboration.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Foundation</h2>

            <div className="mt-5 flex flex-col gap-3">
              {foundationLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Contact</h2>

            <div className="mt-5 space-y-4 text-slate-300">
              <a
                href="tel:+919419040309"
                className="block transition hover:text-white"
              >
                +91 94190 40309
              </a>

              <a
                href="mailto:contact@teamwaleed.org"
                className="block break-all transition hover:text-white"
              >
                contact@teamwaleed.org
              </a>

              <a
                href="https://wa.me/919419040309"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/teamwaleed"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-slate-950"
              >
                Facebook
              </a>

              <a
                href="https://www.youtube.com/@waleed-2019"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-slate-950"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Team Waleed Foundation. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}