import Link from "next/link";

import CTASection from "@/components/ui/CTASection";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";

const resourceGroups = [
  {
    title: "Family Resources",
    description:
      "Practical guidance for families navigating diagnosis, appointments, daily care and education.",
    items: [
      "Understanding Morquio Syndrome",
      "Preparing for specialist appointments",
      "Daily care planning",
      "School support and inclusion",
      "Mobility and accessibility",
      "Emotional wellbeing",
    ],
  },
  {
    title: "Healthcare Professionals",
    description:
      "Educational material for doctors, nurses, therapists and allied health professionals.",
    items: [
      "Diagnosis and clinical assessment",
      "Multidisciplinary care",
      "Anaesthesia considerations",
      "Orthopaedic management",
      "Respiratory monitoring",
      "Cardiac follow-up",
    ],
  },
  {
    title: "Research Library",
    description:
      "A growing collection of research topics, publications and collaboration resources.",
    items: [
      "Published research",
      "Clinical studies",
      "Emerging therapies",
      "International guidance",
      "Conference updates",
      "Research collaboration",
    ],
  },
];

const downloads = [
  {
    title: "Hospital Visit Checklist",
    description:
      "A simple checklist for reports, medicines, symptoms and important questions.",
    status: "Coming soon",
  },
  {
    title: "School Information Guide",
    description:
      "A practical guide for teachers and schools supporting a child with MPS IV.",
    status: "Coming soon",
  },
  {
    title: "Emergency Information Card",
    description:
      "A compact summary of key medical information for urgent situations.",
    status: "Coming soon",
  },
  {
    title: "Doctor Quick Reference",
    description:
      "A concise overview of major clinical considerations in Morquio Syndrome.",
    status: "Coming soon",
  },
];

const frequentlyAsked = [
  {
    question: "What is Morquio Syndrome?",
    answer:
      "Morquio Syndrome, also called MPS IV, is a rare inherited condition that affects the body's ability to break down certain complex sugars.",
  },
  {
    question: "Can children with MPS IV attend regular school?",
    answer:
      "Yes. Many children can attend regular school with suitable accessibility, safety planning and individual support.",
  },
  {
    question: "Why is multidisciplinary care important?",
    answer:
      "MPS IV can affect several body systems, so care often requires coordination between different medical specialists.",
  },
  {
    question: "Where should families begin?",
    answer:
      "Families should keep medical records organized, attend regular specialist reviews and use reliable sources for guidance.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources Centre"
        title="Trusted guidance for families, professionals and researchers."
        description="Explore practical information, clinical learning, downloadable guides and educational resources related to rare diseases and Morquio Syndrome."
      />

      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Knowledge library"
            title="Resources organized around real needs."
            description="Choose the section that best matches your role or question."
          />

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {resourceGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  {group.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {group.description}
                </p>

                <div className="mt-7 space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white p-4"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                        ✓
                      </span>

                      <span className="font-medium text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-20">
        <Container>
          <SectionTitle
            eyebrow="Downloads"
            title="Practical guides and checklists."
            description="Downloadable materials will be added as verified content becomes available."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {downloads.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm"
              >
                <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                  {item.status}
                </span>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex font-semibold text-slate-400">
                  Download unavailable
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionTitle
                eyebrow="Frequently asked questions"
                title="Clear answers to common questions."
                description="These answers provide general information and should not replace advice from a qualified medical professional."
                align="left"
              />
            </div>

            <div className="space-y-5">
              {frequentlyAsked.map((item) => (
                <article
                  key={item.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
                >
                  <h2 className="text-xl font-bold text-slate-900">
                    {item.question}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Useful pathways"
                title="Continue exploring Team Waleed Foundation."
                description="Use these links to learn more about MPS IV, research and support opportunities."
                align="left"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/mps-iv"
                className="rounded-3xl bg-white p-6 font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                MPS IV Information Centre
              </Link>

              <Link
                href="/research"
                className="rounded-3xl bg-white p-6 font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                Research Hub
              </Link>

              <Link
                href="/meet-waleed"
                className="rounded-3xl bg-white p-6 font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                Meet Waleed
              </Link>

              <Link
                href="/contact"
                className="rounded-3xl bg-white p-6 font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                Contact the Foundation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Suggest a resource."
        description="Families, doctors, educators and researchers can recommend useful topics, guides and trusted materials."
        buttons={[
          {
            label: "Contact Us",
            href: "/contact",
          },
          {
            label: "Support the Mission",
            href: "/support",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}