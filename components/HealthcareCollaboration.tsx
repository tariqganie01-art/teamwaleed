import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const collaborationAreas = [
  {
    title: "Clinical Education",
    description:
      "Share practical learning, case insights and reliable guidance for rare disease care.",
  },
  {
    title: "Research Collaboration",
    description:
      "Connect researchers, hospitals and institutions around responsible rare disease research.",
  },
  {
    title: "Professional Network",
    description:
      "Build connections between doctors, therapists, educators and patient support groups.",
  },
  {
    title: "Awareness Programmes",
    description:
      "Support educational events, professional discussions and public awareness initiatives.",
  },
];

export default function HealthcareCollaboration() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.2fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Healthcare and research"
              title="A platform for professionals who want to make a difference."
              description="Team Waleed Foundation welcomes doctors, researchers, therapists, educators and institutions interested in rare disease care, education and research."
              align="left"
            />

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="rounded-full bg-blue-700 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800"
              >
                Visit Research Hub
              </Link>

              <Link
                href="/contact"
                className="rounded-full border-2 border-blue-700 px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                Collaborate With Us
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {collaborationAreas.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
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
      </Container>
    </section>
  );
}