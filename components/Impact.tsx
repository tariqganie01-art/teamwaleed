export default function Impact() {
  const stats = [
    {
      number: "300M+",
      title: "People Living with Rare Diseases",
      description: "More than 300 million people worldwide are affected by one of over 7,000 rare diseases.",
    },
    {
      number: "7,000+",
      title: "Rare Diseases",
      description: "Many rare diseases remain undiagnosed or lack effective treatment and awareness.",
    },
    {
      number: "95%",
      title: "No Approved Cure",
      description: "Most rare diseases still have no approved treatment, making research essential.",
    },
    {
      number: "1 Mission",
      title: "Team Waleed Foundation",
      description: "Creating awareness, supporting families, educating professionals and encouraging research.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Our Mission Matters
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Rare diseases affect millions of families, yet many remain without
            diagnosis, treatment or support. Team Waleed Foundation is working
            to change that through awareness, education and collaboration.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-5xl font-extrabold text-blue-700">
                {item.number}
              </h3>

              <h4 className="mt-4 text-xl font-semibold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}