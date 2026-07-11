import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const topics = [
  {
    title: "What is MPS IV?",
    description:
      "Morquio Syndrome is a rare inherited condition that affects the body’s ability to break down specific complex sugars.",
  },
  {
    title: "Common Features",
    description:
      "It can affect bones, joints, growth, mobility, breathing, hearing, vision and the heart.",
  },
  {
    title: "Diagnosis",
    description:
      "Diagnosis may involve clinical assessment, enzyme testing, genetic testing and specialist evaluation.",
  },
  {
    title: "Treatment and Care",
    description:
      "Care often requires a multidisciplinary team, regular monitoring, rehabilitation and condition-specific treatment.",
  },
];

export default function MPSIVPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-teal-600 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
              MPS IV Information Centre
            </p>

            <h1 className="mt-5 text-4xl font-extrabold sm:text-6xl">
              Understanding Morquio Syndrome
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
              Clear, practical information for families, educators, healthcare
              professionals and supporters.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Overview
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Key areas to understand
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                MPS IV is complex and affects each person differently. Reliable
                information and specialist care are important.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {topics.map((topic, index) => (
                <article
                  key={topic.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {topic.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {topic.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">
                Multidisciplinary care
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Care may involve specialists in metabolic medicine,
                orthopaedics, cardiology, respiratory medicine, ENT,
                ophthalmology, neurology, rehabilitation and anaesthesia.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">
                Support for families
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Families often need clear guidance, school support, mobility
                planning, treatment information and emotional support.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-950 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold">
              Learn from Waleed&apos;s journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              See how education, family support and specialist care shape his
              experience with MPS IV.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/meet-waleed"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-blue-800"
              >
                Meet Waleed
              </Link>

              <Link
                href="/resources"
                className="rounded-full border-2 border-white px-7 py-3.5 font-semibold text-white"
              >
                View Resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}