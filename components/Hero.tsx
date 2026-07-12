import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Rare Disease Awareness",
  "Family Support",
  "Medical Education",
  "Research Collaboration",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-teal-600 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            Together for every rare life
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Every rare life deserves hope, care and opportunity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
            Team Waleed Foundation raises awareness, supports families,
            promotes inclusive education and encourages research for people
            living with rare diseases.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/meet-waleed"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-blue-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Meet Waleed
            </Link>

            <Link
              href="/mps-iv"
              className="rounded-full border-2 border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-blue-800"
            >
              Learn About MPS IV
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700">
                  ✓
                </span>

                <span className="font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-4 rounded-[2rem] bg-white/15 blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <Image
              src="/images/waleed-hero.png"
              alt="Waleed, the inspiration behind Team Waleed Foundation"
              width={700}
              height={850}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/20 bg-white/95 p-5 text-slate-900 shadow-xl sm:left-10 sm:right-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Our inspiration
            </p>

            <p className="mt-1 text-lg font-bold">
              Waleed&apos;s journey inspires awareness, inclusion and action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}