import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const knowledgeItems = [
  {
    title: "What is Morquio Syndrome?",
    description:
      "Understand MPS IV, how it affects the body and why specialist care is important.",
    href: "/mps-iv",
    label: "Overview",
  },
  {
    title: "Signs and Symptoms",
    description:
      "Learn about common skeletal, respiratory, cardiac, hearing and vision concerns.",
    href: "/mps-iv",
    label: "Symptoms",
  },
  {
    title: "Diagnosis",
    description:
      "Read about clinical assessment, enzyme testing, genetic testing and specialist evaluation.",
    href: "/mps-iv",
    label: "Diagnosis",
  },
  {
    title: "Treatment and Care",
    description:
      "Explore multidisciplinary care, rehabilitation, monitoring and treatment options.",
    href: "/mps-iv",
    label: "Care",
  },
  {
    title: "Living with MPS IV",
    description:
      "Practical guidance for education, mobility, participation and daily life.",
    href: "/mps-iv",
    label: "Daily life",
  },
  {
    title: "Resources for Families",
    description:
      "Find trusted guidance for appointments, school support and care planning.",
    href: "/resources",
    label: "Families",
  },
  {
    title: "For Healthcare Professionals",
    description:
      "Access rare disease education, clinical learning and collaboration opportunities.",
    href: "/research",
    label: "Professionals",
  },
  {
    title: "Research and Updates",
    description:
      "Follow developments in rare disease research, treatment and medical education.",
    href: "/research",
    label: "Research",
  },
];

export default function RareDiseaseKnowledge() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <SectionTitle
          eyebrow="Rare Disease Knowledge Centre"
          title="Clear information. Better understanding. Stronger support."
          description="Explore practical information about Morquio Syndrome, rare disease care, family support and research."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {knowledgeItems.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
            >
              <span className="w-fit rounded-full bg-cyan-300 px-3 py-1 text-sm font-bold text-blue-950">
                {item.label}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-300">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-7 inline-flex items-center font-semibold text-cyan-300 transition hover:text-white"
              >
                Learn more
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/resources"
            className="inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50"
          >
            Explore All Resources
          </Link>
        </div>
      </Container>
    </section>
  );
}