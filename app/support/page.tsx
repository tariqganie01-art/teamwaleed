import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/ui/CTASection";
import Link from "next/link";

const supportOptions = [
  {
    title: "Donate",
    description:
      "Support awareness, family resources, education and future rare disease initiatives.",
    action: "Donation options coming soon",
  },
  {
    title: "Volunteer",
    description:
      "Contribute your time, professional skills or community support to foundation activities.",
    action: "Join as a volunteer",
  },
  {
    title: "Healthcare Collaboration",
    description:
      "Doctors and healthcare professionals can support education, awareness and clinical learning.",
    action: "Connect with us",
  },
  {
    title: "Research Partnership",
    description:
      "Researchers and institutions can explore responsible collaboration and educational initiatives.",
    action: "Explore collaboration",
  },
  {
    title: "Corporate CSR",
    description:
      "Organizations can support rare disease awareness, resources, events and patient-focused programmes.",
    action: "Discuss CSR support",
  },
  {
    title: "Community Awareness",
    description:
      "Help share verified information and strengthen understanding of rare diseases in your community.",
    action: "Support awareness",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Support Us"
          title="Help us build hope, awareness and support."
          description="Every contribution of time, knowledge, partnership or financial support can strengthen the rare disease community."
        />

        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="Ways to support"
              title="Choose how you would like to contribute."
              description="Team Waleed Foundation welcomes support from individuals, professionals, institutions and organizations."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {supportOptions.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex font-semibold text-blue-700 hover:text-blue-900"
                  >
                    {item.action}
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-slate-100 py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionTitle
                  eyebrow="Financial support"
                  title="Donation facilities will be added after registration."
                  description="The website can later support secure donations through UPI, bank transfer, Razorpay or other approved payment methods."
                  align="left"
                />
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">
                  Planned donation options
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "UPI payment",
                    "Bank transfer",
                    "Online payment gateway",
                    "Corporate CSR support",
                    "Recurring donations",
                    "Donation receipts",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
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
            </div>
          </Container>
        </section>

        <CTASection
          title="Ready to support Team Waleed Foundation?"
          description="Contact us to volunteer, collaborate, partner or discuss future donation opportunities."
          buttons={[
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "Explore Our Mission",
              href: "/about",
              variant: "secondary",
            },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}