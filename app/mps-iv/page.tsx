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
              <section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
        Detailed guidance
      </p>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Important areas of MPS IV care
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        MPS IV requires regular monitoring and coordinated care across several
        medical specialties.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: "Causes and Genetics",
          description:
            "MPS IV is inherited. Genetic testing can help confirm the diagnosis and support family counselling.",
        },
        {
          title: "Bone and Joint Care",
          description:
            "Regular orthopaedic assessment is important for the spine, hips, knees, chest and overall mobility.",
        },
        {
          title: "Heart Monitoring",
          description:
            "Cardiology follow-up may include clinical review, ECG and echocardiography based on specialist advice.",
        },
        {
          title: "Breathing and Sleep",
          description:
            "Airway, breathing and sleep problems may require respiratory assessment and sleep evaluation.",
        },
        {
          title: "Vision and Hearing",
          description:
            "Regular eye and hearing checks can help identify changes early and support learning and communication.",
        },
        {
          title: "Physiotherapy and Mobility",
          description:
            "Therapy should focus on safe movement, strength, function and independence without overloading joints.",
        },
      ].map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="bg-slate-100 py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
          Treatment and management
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Care is tailored to each person
        </h2>

        <div className="mt-6 space-y-4 text-slate-600">
          <p>
            Treatment may include condition-specific therapy, surgery,
            rehabilitation, respiratory support and regular specialist review.
          </p>

          <p>
            Enzyme replacement therapy may be considered for eligible patients
            under specialist supervision.
          </p>

          <p>
            Treatment decisions should be made by a metabolic disease team
            familiar with MPS IV.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
          Anaesthesia and surgery
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Extra planning may be required
        </h2>

        <div className="mt-6 space-y-4 text-slate-600">
          <p>
            People with MPS IV may have airway, neck and spinal considerations
            that can affect anaesthesia.
          </p>

          <p>
            Surgical procedures should involve experienced anaesthesia,
            metabolic and surgical teams when possible.
          </p>

          <p>
            Previous reports, imaging and specialist recommendations should be
            shared before any planned procedure.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
          Education and daily life
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Supporting independence and participation
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Children with MPS IV may benefit from accessible classrooms,
          mobility support, flexible seating and individual school planning.
        </p>
      </div>

      <div className="space-y-4">
        {[
          "Accessible classrooms and washrooms",
          "Safe seating and suitable desk height",
          "Reduced physical strain during school activities",
          "Extra time for movement between classes",
          "Emergency and medical information available to staff",
          "Equal participation in learning and social activities",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
              ✓
            </span>

            <span className="font-medium text-slate-800">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="bg-slate-100 py-20">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
        Frequently asked questions
      </p>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Common questions about MPS IV
      </h2>
    </div>

    <div className="mt-12 space-y-5">
      {[
        {
          question: "Does MPS IV affect intelligence?",
          answer:
            "MPS IV generally does not directly affect intelligence. Many children have normal learning ability but may need physical access and health-related support.",
        },
        {
          question: "Is MPS IV the same in every person?",
          answer:
            "No. Severity, symptoms and progression can differ significantly between individuals.",
        },
        {
          question: "Can children with MPS IV attend regular school?",
          answer:
            "Yes. Many children can attend regular school with suitable accessibility, safety measures and individualized support.",
        },
        {
          question: "Why are regular specialist reviews important?",
          answer:
            "Regular reviews can detect changes early and help coordinate care across bones, heart, breathing, hearing, vision and mobility.",
        },
      ].map((item) => (
        <article
          key={item.question}
          className="rounded-3xl bg-white p-7 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900">
            {item.question}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {item.answer}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
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