import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/ui/CTASection";

const contactOptions = [
  {
    title: "Families",
    description:
      "Need guidance, resources or support for a rare disease journey.",
  },
  {
    title: "Healthcare Professionals",
    description:
      "Collaborate in education, awareness and patient care.",
  },
  {
    title: "Researchers",
    description:
      "Partner with us on research, publications and innovation.",
  },
  {
    title: "Volunteers & Partners",
    description:
      "Support awareness campaigns, events and foundation activities.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Contact Us"
          title="We would love to hear from you."
          description="Whether you are a family, doctor, researcher, volunteer or organization, Team Waleed Foundation welcomes your message."
        />

        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="Who can contact us"
              title="Let's work together for every rare life."
              description="Choose the option that best describes your enquiry."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactOptions.map((item) => (
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
          </Container>
        </section>

        <section className="bg-slate-100 py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

              <div>

                <SectionTitle
                  eyebrow="Contact Information"
                  title="Reach Team Waleed Foundation"
                  description="You can call, email, WhatsApp or connect through our social media platforms."
                  align="left"
                />

                <div className="mt-8 rounded-3xl bg-blue-900 p-8 text-white">

                  <h2 className="text-3xl font-bold">
                    Team Waleed Foundation
                  </h2>

                  <p className="mt-3 text-blue-100">
                    Together for every rare life.
                  </p>

                  <div className="mt-8 space-y-6">

                    <div>
                      <p className="text-sm uppercase tracking-wider text-blue-300">
                        Mobile
                      </p>

                      <a
                        href="tel:+919419040309"
                        className="text-lg font-semibold hover:text-cyan-300"
                      >
                        +91 94190 40309
                      </a>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wider text-blue-300">
                        WhatsApp
                      </p>

                      <a
                        href="https://wa.me/919419040309"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold hover:text-cyan-300"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wider text-blue-300">
                        Email
                      </p>

                      <a
                        href="mailto:contact@teamwaleed.org"
                        className="break-all text-lg font-semibold hover:text-cyan-300"
                      >
                        contact@teamwaleed.org
                      </a>
                    </div>

                  </div>

                  <div className="mt-10 border-t border-white/20 pt-6">

                    <p className="text-sm uppercase tracking-wider text-blue-300">
                      Follow Us
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">

                      <a
                        href="https://www.facebook.com/teamwaleed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-4 py-2 font-semibold hover:bg-white hover:text-blue-900"
                      >
                        Facebook
                      </a>

                      <a
                        href="https://www.youtube.com/@waleed-2019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-4 py-2 font-semibold hover:bg-white hover:text-blue-900"
                      >
                        YouTube
                      </a>

                    </div>

                    <p className="mt-6 text-sm text-blue-200">
                      Instagram and LinkedIn pages will be available soon.
                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow">

                <h2 className="text-3xl font-bold text-slate-900">
                  Send us a Message
                </h2>

                <p className="mt-3 text-slate-600">
                  Fill in the form below and our team will respond as soon as possible.
                </p>

                <form className="mt-8 space-y-6">

                  <div>
                    <label className="block font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700">
                      Message
                    </label>

                    <textarea
                      rows={6}
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-blue-700 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>
          </Container>
        </section>

        <CTASection
          title="Join our mission."
          description="Together we can improve awareness, education, research and support for rare diseases."
          buttons={[
            {
              label: "Support Us",
              href: "/support",
            },
            {
              label: "Research Hub",
              href: "/research",
              variant: "secondary",
            },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}