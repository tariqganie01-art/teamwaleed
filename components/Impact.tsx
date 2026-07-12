import Link from "next/link";

const stats = [
  {
    number: "1",
    title: "Mission",
    description:
      "Dedicated to improving awareness, education and support for rare diseases.",
  },
  {
    number: "100%",
    title: "Commitment",
    description:
      "Focused on helping families, healthcare professionals and researchers.",
  },
  {
    number: "24/7",
    title: "Knowledge Access",
    description:
      "Providing trusted information through Team Waleed Foundation.",
  },
  {
    number: "∞",
    title: "Hope",
    description:
      "Working toward a future where every rare life receives understanding and support.",
  },
];

export default function Impact() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Building awareness. Inspiring hope. Creating change.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Team Waleed Foundation is building a trusted platform where families,
            healthcare professionals and researchers can work together to improve
            rare disease awareness and education.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl font-bold text-blue-700">
                {item.number}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="inline-flex rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Learn More About Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
}