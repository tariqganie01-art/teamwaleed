import Link from "next/link";

const newsItems = [
  {
    category: "Foundation",
    title: "Team Waleed Foundation is Growing",
    description:
      "Follow our latest initiatives, awareness campaigns and community activities.",
    href: "/news",
  },
  {
    category: "Research",
    title: "Rare Disease Research Updates",
    description:
      "Discover new developments in rare disease diagnosis, treatment and collaboration.",
    href: "/research",
  },
  {
    category: "Education",
    title: "Resources for Families and Schools",
    description:
      "Access educational materials designed to support children living with rare diseases.",
    href: "/resources",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            News &amp; Initiatives
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Stay Connected With Our Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Read about awareness campaigns, foundation updates, educational
            resources and research that support the rare disease community.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {item.category}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-6 inline-flex font-semibold text-blue-700 hover:text-blue-900"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}