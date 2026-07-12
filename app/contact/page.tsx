import {
  FaEnvelope,
  FaFacebookF,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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
      "Ask questions, share experiences or suggest resources for families affected by rare diseases.",
  },
  {
    title: "Healthcare Professionals",
    description:
      "Connect with us for medical education, awareness programmes and clinical collaboration.",
  },
  {
    title: "Researchers",
    description:
      "Discuss publications, research interests, studies and collaboration opportunities.",
  },
  {
    title: "Volunteers and Partners",
    description:
      "Support awareness campaigns, events, community activities and foundation partnerships.",
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
          description="Families, doctors, researchers, educators, volunteers and organizations are welcome to connect with Team Waleed Foundation."
        />

        <section className="bg-white py-20">
          <Container>
            <SectionTitle
              eyebrow="Who can contact us"
              title="Let us work together for every rare life."
              description="Choose the option that best describes your enquiry."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactOptions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
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
                  eyebrow="Contact information"
                  title="Reach Team Waleed Foundation"
                  description="Call, email, send a WhatsApp message or connect through our social media platforms."
                  align="left"
                />

                <div className="mt-8 rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
                  <h2 className="text-3xl font-bold">
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
                        className="mt-2 flex items-center gap-3 text-lg font-semibold transition hover:text-cyan-300"
                      >
                        <FaPhoneAlt
                          className="text-cyan-300"
                          aria-hidden="true"
                        />
                        <span>+91 94190 40309</span>
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
                        className="mt-2 flex items-center gap-3 text-lg font-semibold transition hover:text-cyan-300"
                      >
                        <FaWhatsapp
                          className="text-2xl text-green-400"
                          aria-hidden="true"
                        />
                        <span>Chat with us</span>
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                        Email
                      </p>

                      <a
                        href="mailto:contact@teamwaleed.org"
                        className="mt-2 flex items-center gap-3 break-all text-lg font-semibold transition hover:text-cyan-300"
                      >
                        <FaEnvelope
                          className="shrink-0 text-cyan-300"
                          aria-hidden="true"
                        />
                        <span>contact@teamwaleed.org</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-white/20 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                      Follow us
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4">
                      <a
                        href="https://www.facebook.com/teamwaleed"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Team Waleed Foundation on Facebook"
                        title="Facebook"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white transition hover:scale-110 hover:bg-blue-700"
                      >
                        <FaFacebookF aria-hidden="true" />
                      </a>

                      <a
                        href="https://wa.me/919419040309"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact Team Waleed Foundation on WhatsApp"
                        title="WhatsApp"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl text-white transition hover:scale-110 hover:bg-green-600"
                      >
                        <FaWhatsapp aria-hidden="true" />
                      </a>

                      <a
                        href="https://www.youtube.com/@waleed-2019"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Team Waleed Foundation on YouTube"
                        title="YouTube"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl text-white transition hover:scale-110 hover:bg-red-700"
                      >
                        <FaYoutube aria-hidden="true" />
                      </a>

                      <a
                        href="mailto:contact@teamwaleed.org"
                        aria-label="Email Team Waleed Foundation"
                        title="Email"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-xl text-white transition hover:scale-110 hover:bg-cyan-700"
                      >
                        <FaEnvelope aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900">
                  Send us a message
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Complete the form and include enough detail for us to
                  understand your request.
                </p>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="mt-8 space-y-6"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="YOUR_WEB3FORMS_ACCESS_KEY"
                  />

                  <input
                    type="hidden"
                    name="subject"
                    value="New enquiry from Team Waleed Foundation website"
                  />

                  <input
                    type="hidden"
                    name="from_name"
                    value="Team Waleed Foundation Website"
                  />

                  <input
                    type="hidden"
                    name="redirect"
                    value="https://teamwaleed.org/contact-success"
                  />

                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-semibold text-slate-700"
                    >
                      Full name
                    </label>

                    <input
                      id="fullName"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-semibold text-slate-700"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block font-semibold text-slate-700"
                    >
                      Mobile number
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="block font-semibold text-slate-700"
                    >
                      Enquiry type
                    </label>

                    <select
                      id="enquiryType"
                      name="enquiry_type"
                      defaultValue="General enquiry"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    >
                      <option>General enquiry</option>
                      <option>Family support</option>
                      <option>Healthcare professional</option>
                      <option>Research collaboration</option>
                      <option>Volunteer</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquirySubject"
                      className="block font-semibold text-slate-700"
                    >
                      Subject
                    </label>

                    <input
                      id="enquirySubject"
                      name="enquiry_subject"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-semibold text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="mt-2 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-blue-700 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    Send message
                  </button>

                  <p className="text-sm leading-6 text-slate-500">
                    Your message will be sent securely to Team Waleed
                    Foundation.
                  </p>
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