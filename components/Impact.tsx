const impactItems = [
  {
    value: "1",
    title: "Shared Mission",
    description:
      "Building awareness, knowledge, dignity, and support around rare diseases.",
  },
  {
    value: "100%",
    title: "Commitment",
    description:
      "Focused on responsible education, collaboration, and family support.",
  },
  {
    value: "∞",
    title: "Hope",
    description:
      "Every rare life deserves recognition, care, opportunity, and respect.",
  },
  {
    value: "1",
    title: "Young Inspiration",
    description:
      "Waleed’s journey continues to inspire a larger movement for rare lives.",
  },
];

export default function Impact() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Our Purpose
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A growing mission inspired by one remarkable life
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Team Waleed Foundation aims to create practical impact through
            awareness, education, healthcare collaboration, research support,
            and reliable information for rare disease families.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-2xl font-bold text-white shadow-lg shadow-blue-700/20">
                {item.value}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 px-6 py-8 text-center sm:px-10">
          <p className="text-lg font-semibold text-slate-950">
            Every informed family, trained professional, and supportive voice
            strengthens the rare disease community.
          </p>
        </div>
      </div>
    </section>
  );
}