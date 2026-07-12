import Link from "next/link";

const values = [
  {
    title: "Awareness",
    description:
      "We make rare disease information easier to understand for families, schools and communities.",
  },
  {
    title: "Support",
    description:
      "We aim to connect families with trusted guidance, practical resources and stronger support networks.",
  },
  {
    title: "Education",
    description:
      "We encourage learning for healthcare professionals, educators and caregivers working with rare disease patients.",
  },
  {
    title: "Research",
    description:
      "We support responsible research, clinical learning and collaboration that can improve rare disease care.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-teal-600 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            About Us
          </p>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-6xl">
            Together for every rare life.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
            Team Waleed Foundation is being created to raise awareness,
            support families, strengthen education and encourage research for
            rare diseases.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Our story
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
              Inspired by Waleed. Built for a wider rare disease community.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Team Waleed Foundation draws inspiration from Waleed&apos;s
              journey with Morquio Syndrome, also known as MPS IV.
            </p>

            <p>
              His experiences highlighted the need for reliable information,
              inclusive education, family support and stronger collaboration
              between healthcare professionals and researchers.
            </p>

            <p>
              The foundation aims to create a trusted platform where families,
              doctors, educators, researchers and supporters can work toward
              better awareness and improved care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              What guides us
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Four areas of focus
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold">
            Help us build a stronger rare disease support system.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Join our mission through awareness, professional collaboration,
            volunteering and community support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-blue-800"
            >
              Contact Us
            </Link>

            <Link
              href="/meet-waleed"
              className="rounded-full border-2 border-white px-7 py-3.5 font-semibold text-white"
            >
              Meet Waleed
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}