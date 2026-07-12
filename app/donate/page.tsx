import type { Metadata } from "next";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import InfoCard from "@/components/ui/InfoCard";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
 title: "Donate",
  description:
    "Support Team Waleed Foundation in raising awareness, improving rare disease support, promoting research, and helping families access reliable information.",
};

const supportAreas = [
  {
    title: "Rare Disease Awareness",
    description:
      "Help us create educational campaigns that improve public understanding of rare diseases and the challenges faced by affected families.",
  },
  {
    title: "Family Support",
    description:
      "Support initiatives that connect families with reliable information, healthcare resources, specialists, and patient communities.",
  },
  {
    title: "Medical Education",
    description:
      "Help us develop learning resources for doctors, students, caregivers, and healthcare professionals working with rare disease patients.",
  },
  {
    title: "Research Promotion",
    description:
      "Support efforts that encourage clinical research, collaboration, data sharing, and better treatment opportunities for rare diseases.",
  },
];

const donationSteps = [
  {
    number: "01",
    title: "Choose your contribution",
    description:
      "You may support a specific initiative or make a general contribution toward the Foundation’s programmes.",
  },
  {
    number: "02",
    title: "Contact our team",
    description:
      "Send us your name, contact details, proposed donation amount, and preferred area of support.",
  },
  {
    number: "03",
    title: "Receive official payment details",
    description:
      "Our team will share verified banking or digital payment information after the Foundation’s donation facility becomes operational.",
  },
  {
    number: "04",
    title: "Receive acknowledgement",
    description:
      "Eligible contributions will be acknowledged through an official receipt and appropriate documentation.",
  },
];

export default function DonatePage() {
  return (
    <main>
      <PageHero
        eyebrow="Support Our Mission"
        title="Your support can strengthen hope for every rare life"
        description="Your contribution can help Team Waleed Foundation build awareness, connect families with reliable resources, support medical education, and encourage rare disease research."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Donation Facility Coming Soon</Badge>

            <SectionTitle
              title="We are preparing a secure and transparent donation system"
              description="Team Waleed Foundation is completing the required organisational, banking, compliance, and payment arrangements. Online donations will become available after these formalities are completed."
              align="center"
              className="mt-5"
            />
          </div>

          <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-950">
              Please do not transfer money to personal accounts
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Official donation details will only be published on the Team
              Waleed Foundation website and communicated through verified
              Foundation channels. This protects donors and ensures proper
              financial accountability.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Where Your Support Helps"
            title="Supporting practical rare disease initiatives"
            description="Contributions will be directed toward approved programmes that advance awareness, knowledge, patient support, and responsible collaboration."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {supportAreas.map((area) => (
              <InfoCard
                key={area.title}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <Badge>How It Will Work</Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A clear and accountable donation process
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                We aim to maintain transparency at every stage. Donors will
                receive verified payment details and appropriate
                acknowledgement through official Foundation channels.
              </p>

              <div className="mt-8">
                <Button href="/contact">Contact Our Team</Button>
              </div>
            </div>

            <div className="space-y-5">
              {donationSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Other Ways to Help
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Support does not always require a financial contribution
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              You can support the mission by sharing reliable information,
              volunteering your professional skills, connecting healthcare
              experts, and helping rare disease voices reach more people.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Volunteer With Us
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}