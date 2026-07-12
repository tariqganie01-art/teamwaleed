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
      "Share your questions, experiences or suggestions for rare disease support resources.",
  },
  {
    title: "Healthcare Professionals",
    description:
      "Connect with us regarding education, awareness, clinical collaboration or rare disease care.",
  },
  {
    title: "Researchers",
    description:
      "Discuss research interests, publications, studies or collaboration opportunities.",
  },
  {
    title: "Volunteers and Partners",
    description:
      "Support campaigns, community activities, professional services or organizational partnerships.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Contact and Collaboration"
          title="Connect with Team Waleed Foundation."
          description="Families, doctors, researchers, educators, volunteers and organizations are welcome to reach out."
        />

        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="Who can contact us"
              title="Building connections across the rare disease community."
              description="Choose the area that best matches your enquiry."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactOptions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
                >
                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>

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
                  eyebrow="Contact details"
                  title="Reach us directly."
                  description="Call, message, email or follow Team Waleed Foundation on social media."
                  align="left"
                />

                <div className="mt-8 rounded-3xl bg-blue-950 p-8 text-white">
                  <h2 className="text-2xl font-bold">
                    Team Waleed Foundation
                  </h2>

                  <p className="mt-3 leading-7 text-blue-100">
                    Together for every rare life.
                  </p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                        Mobile
                      </p>

                      <a
                        href="tel:+919419040309"
                        className="mt-1 inline-block text-lg font-semibold transition hover:text-cyan-300"
                      >
                        +91 94190 40309
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                        WhatsApp
                      </p>

                      <a
                        href="https://wa.me/919419040309"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-lg font-semibold transition hover:text-cyan-300"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                        Email
                      </p>

                      <a
                        href="mailto:contact@teamwaleed.org"
                        className="mt-1 inline-block break-all text-lg font-semibold transition hover:text-cyan-300"
                      >
                        contact@teamwaleed.org
                      </a>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-white/20 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                      Follow Team Waleed Foundation
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="https://www.facebook.com/teamwaleed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-blue-900"
                      >
                        Facebook
                      </a>

                      <a
                        href="https://www.youtube.com/@waleed-2019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-blue-900"
                      >
                        YouTube
                      </a>
                    </div>

                    <p className="mt-6 text-sm leading-6 text-blue-200">
                      Instagram and LinkedIn profiles will be added soon.
                    </p>
                  </div>
                </div>
              </div>

              <form className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900">
                  Send an enquiry
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Complete the form and include enough detail for us to
                  understand your request.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Full name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-800"
                  >
                    Mobile number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="enquiry"
                    className="block text-sm font-semibold text-slate-800"
                  >
                    Enquiry type
                  </label>

                  <select
                    id="enquiry"
                    name="enquiry"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  >
                    <option>Family support</option>
                    <option>Healthcare professional</option>
                    <option>Research collaboration</option>
                    <option>Volunteer</option>
                    <option>Partnership</option>
                    <option>General enquiry</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-800"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 rounded-full bg-blue-700 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800"
                >
                  Send Enquiry
                </button>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  The form is ready visually. Email delivery will be connected
                  in a later step.
                </p>
              </form>
            </div>
          </Container>
        </section>

        <CTASection
          title="Interested in supporting the mission?"
          description="Volunteers, professionals, institutions and community partners can help strengthen rare disease awareness and support."
          buttons={[
            {
              label: "Explore Resources",
              href: "/resources",
            },
            {
              label: "View Research Hub",
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