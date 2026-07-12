import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/ui/CTASection";

const researchAreas = [
  {
    number: "01",
    title: "Rare Disease Research",
    description:
      "Explore research focused on diagnosis, clinical care, treatment development and quality of life for people living with rare diseases.",
  },
  {
    number: "02",
    title: "Morquio Syndrome",
    description:
      "Follow research related to MPS IV, including enzyme replacement therapy, skeletal care, mobility and multidisciplinary management.",
  },
  {
    number: "03",
    title: "Clinical Learning",
    description:
      "Support healthcare professionals through case-based learning, clinical guidance and shared experience.",
  },
  {
    number: "04",
    title: "Research Collaboration",
    description:
      "Encourage collaboration between doctors, hospitals, researchers, universities, families and patient organizations.",
  },
];

const opportunities = [
  {
    title: "Healthcare Professionals",
    description:
      "Share clinical experience, educational resources and practical insights related to rare disease care.",
  },
  {
    title: "Researchers",
    description:
      "Connect around research priorities, publications, data collection and responsible collaboration.",
  },
  {
    title: "Medical Institutions",
    description:
      "Work together on awareness, professional education, research initiatives and patient support.",
  },
  {
    title: "Families and Patients",
    description:
      "Help identify real-world needs, care challenges and priorities that deserve greater research attention.",
  },
];

const futureSections = [
  "Research publications",
  "Clinical studies",
  "Conference updates",
  "Research opportunities",
  "Medical education",
  "Collaborating institutions",
];

export default function ResearchPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Research Hub"
          title="Advancing knowledge through learning and collaboration."
          description="Team Waleed Foundation aims to support responsible research, clinical education and collaboration for rare diseases."
        />

        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="Our research focus"
              title="Building a stronger rare disease knowledge network."
              description="Research can improve diagnosis, care, treatment and long-term outcomes. Our goal is to connect people who can contribute to meaningful progress."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {researchAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white">
                    {area.number}
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    {area.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-slate-100 py-20">
          <Container>
            <SectionTitle
              eyebrow="Work with us"
              title="Collaboration across the rare disease community."
              description="Progress requires input from professionals, researchers, institutions, patients and families."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {opportunities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-white p-7 shadow-sm"
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
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionTitle
                  eyebrow="Growing research platform"
                  title="What this hub will include."
                  description="The Research Hub will expand as Team Waleed Foundation builds partnerships and develops verified educational content."
                  align="left"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {futureSections.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                      ✓
                    </span>

                    <span className="font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <CTASection
          title="Help strengthen rare disease research and education."
          description="Doctors, researchers, institutions and patient organizations can connect with Team Waleed Foundation to explore collaboration."
          buttons={[
            {
              label: "Collaborate With Us",
              href: "/contact",
            },
            {
              label: "Explore Resources",
              href: "/resources",
              variant: "secondary",
            },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}