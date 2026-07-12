import Link from "next/link";

import CTASection from "@/components/ui/CTASection";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";

const featuredNews = {
  category: "Foundation Update",
  title: "Team Waleed Foundation Website Is Now Live",
  description:
    "Our digital platform brings together rare disease awareness, family support, medical education and research collaboration.",
  date: "July 2026",
  href: "/contact",
};

const newsItems = [
  {
    category: "Awareness",
    title: "Building Awareness for Rare Diseases",
    description:
      "Team Waleed Foundation aims to help families and communities understand rare diseases through clear and reliable information.",
    date: "July 2026",
    href: "/resources",
  },
  {
    category: "Healthcare",
    title: "Inviting Healthcare Professionals to Collaborate",
    description:
      "Doctors, therapists and medical institutions are invited to support rare disease education and clinical learning.",
    date: "July 2026",
    href: "/research",
  },
  {
    category: "Waleed's Journey",
    title: "A Story of Learning, Courage and Hope",
    description:
      "Waleed's journey continues to inspire awareness, inclusive education and support for every rare life.",
    date: "July 2026",
    href: "/meet-waleed",
  },
  {
    category: "Resources",
    title: "Rare Disease Resources for Families",
    description:
      "Our resource library will provide practical guidance for appointments, school support, treatment planning and daily life.",
    date: "Coming Soon",
    href: "/resources",
  },
  {
    category: "Research",
    title: "Strengthening Rare Disease Research Collaboration",
    description:
      "The Research Hub will connect professionals, institutions and families around responsible research and medical education.",
    date: "Coming Soon",
    href: "/research",
  },
  {
    category: "Foundation",
    title: "Volunteer and Partnership Opportunities",
    description:
      "Individuals and organizations can support awareness campaigns, educational initiatives and community programmes.",
    date: "Coming Soon",
    href: "/support",
  },
];

export default function NewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="News and Updates"
        title="Follow the journey of Team Waleed Foundation."
        description="Read foundation updates, awareness initiatives, research developments and stories from the rare disease community."
      />

      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Featured update"
            title="Our latest foundation news"
            description="Important updates from Team Waleed Foundation and our growing rare disease platform."
          />

          <article className="mt-14 rounded-3xl bg-gradient-to-br from-blue-950 via-blue-800 to-teal-600 p-8 text-white shadow-xl sm:p-12">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-cyan-100">
                {featuredNews.category}
              </span>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-200">
                {featuredNews.date}
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                {featuredNews.title}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                {featuredNews.description}
              </p>

              <Link
                href={featuredNews.href}
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Connect With Us
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-slate-100 py-20">
        <Container>
          <SectionTitle
            eyebrow="Latest stories"
            title="News, awareness and foundation initiatives"
            description="Explore current and upcoming work from Team Waleed Foundation."
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {item.category}
                  </span>

                  <span className="text-sm font-medium text-slate-500">
                    {item.date}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-7 inline-flex font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Read more
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
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
                eyebrow="Share a story"
                title="Help us highlight meaningful rare disease experiences."
                description="Families, healthcare professionals, educators and researchers can suggest stories, updates and awareness initiatives."
                align="left"
              />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Submit an update
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Contact Team Waleed Foundation if you have a relevant story,
                research update, educational activity or awareness event to
                share.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-full bg-blue-700 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800"
              >
                Contact the Foundation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Stay connected with Team Waleed Foundation."
        description="Follow our work, explore resources and support the mission for every rare life."
        buttons={[
          {
            label: "Explore Resources",
            href: "/resources",
          },
          {
            label: "Support Us",
            href: "/support",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}