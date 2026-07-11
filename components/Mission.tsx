import Link from "next/link";

const missionAreas = [
  {
    title: "Awareness",
    description:
      "We share clear, reliable information about rare diseases so families, schools and communities can understand them better.",
    icon: "01",
  },
  {
    title: "Family Support",
    description:
      "We aim to connect families with useful resources, guidance and a stronger support network.",
    icon: "02",
  },
  {
    title: "Medical Education",
    description:
      "We encourage learning for healthcare professionals who want to understand, identify and manage rare diseases.",
    icon: "03",
  },
  {
    title: "Research Collaboration",
    description:
      "We promote responsible research, clinical learning and collaboration that can improve rare disease care.",
    icon: "04",
  },
];

export default function Mission() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Our mission
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Turning awareness into meaningful action.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Team Waleed Foundation works to improve understanding, support
              families, strengthen medical education and encourage research for
              rare diseases.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Learn about the foundation
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {missionAreas.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 