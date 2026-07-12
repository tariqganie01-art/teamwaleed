import Link from "next/link";

const pathways = [
  {
    title: "Families",
    description:
      "Access trusted information, practical guidance and support resources for living with rare diseases.",
    href: "/resources",
    action: "Explore Resources",
    icon: "F",
  },
  {
    title: "Healthcare Professionals",
    description:
      "Find clinical learning materials, disease information and resources for better rare disease care.",
    href: "/resources",
    action: "Medical Resources",
    icon: "H",
  },
  {
    title: "Researchers",
    description:
      "Explore research priorities, publications and opportunities for responsible collaboration.",
    href: "/research",
    action: "Research Hub",
    icon: "R",
  },
  {
    title: "Volunteers and Supporters",
    description:
      "Support awareness campaigns, volunteer your skills and help strengthen the rare disease community.",
    href: "/contact",
    action: "Get Involved",
    icon: "V",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-blue-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            How we help
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Resources and support for every part of the community.
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Team Waleed Foundation brings families, healthcare professionals,
            researchers and supporters together around one shared mission.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pathways.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-bold text-blue-800">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 flex-1 leading-7 text-blue-100">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-7 inline-flex items-center font-semibold text-cyan-300 transition hover:text-white"
              >
                {item.action}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}