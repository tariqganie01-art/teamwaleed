import Image from "next/image";
import Link from "next/link";

const statistics = [
  {
    value: "1",
    label: "Mission",
  },
  {
    value: "100%",
    label: "Commitment",
  },
  {
    value: "∞",
    label: "Hope",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.32),transparent_42%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Together for every rare life
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Hope, awareness and action for rare disease families
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Team Waleed Foundation supports awareness, education, research,
            healthcare collaboration and families affected by rare diseases.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Discover Our Mission
            </Link>

            <Link
              href="/meet-waleed"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-600 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Meet Waleed
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
            {statistics.map((statistic) => (
              <div
                key={statistic.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5"
              >
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {statistic.value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-[3rem] bg-blue-500/20 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-2xl sm:rounded-[2.5rem] sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-800 sm:rounded-[2rem]">
              <Image
                src="/images/waleed-hero.png"
                alt="Waleed, the inspiration behind Team Waleed Foundation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent px-6 pb-7 pt-28 sm:px-8 sm:pb-9">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  The inspiration
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Waleed Bin Tariq
                </h2>

                <p className="mt-2 max-w-md leading-7 text-slate-300">
                  A young life inspiring a wider mission for awareness,
                  knowledge, dignity and hope.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-3 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-xl sm:-left-10 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Our belief
            </p>

            <p className="mt-1 text-sm font-semibold sm:text-base">
              Every rare life matters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}