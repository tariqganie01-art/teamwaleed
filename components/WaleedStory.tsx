import Image from "next/image";
import Link from "next/link";

const milestones = [
  {
    year: "Journey",
    title: "Living with Morquio Syndrome",
    description:
      "Waleed faces the challenges of MPS IV with courage, curiosity and strong family support.",
  },
  {
    year: "Education",
    title: "A Passion for Learning",
    description:
      "He enjoys science, technology, geography, space and discovering how the world works.",
  },
  {
    year: "Foundation",
    title: "Inspiring Team Waleed",
    description:
      "His journey inspired a platform focused on awareness, education, family support and rare disease research.",
  },
];

export default function WaleedStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-100" />

          <Image
            src="/images/waleed-hero.png"
            alt="Waleed, the inspiration behind Team Waleed Foundation"
            width={700}
            height={850}
            className="relative h-auto w-full rounded-[2rem] object-cover shadow-xl"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              The inspiration
            </p>

            <p className="mt-1 text-lg font-bold text-slate-900">
              A young learner whose journey inspires awareness and action.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Meet Waleed
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            One journey that became a mission for every rare life.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Waleed&apos;s journey reflects courage, curiosity and hope. His
            experiences inspired Team Waleed Foundation to support awareness,
            education and collaboration for rare diseases.
          </p>

          <div className="mt-10 space-y-6">
            {milestones.map((item) => (
              <article
                key={item.title}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-blue-700 px-3 text-xs font-bold text-white">
                  {item.year}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/meet-waleed"
            className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800"
          >
            Read Waleed&apos;s Story
          </Link>
        </div>
      </div>
    </section>
  );
}