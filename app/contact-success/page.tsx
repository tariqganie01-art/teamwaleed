import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export default function ContactSuccessPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Message Sent"
          title="Thank you for contacting Team Waleed Foundation."
          description="Your message has been received successfully."
        />

        <section className="bg-slate-100 py-20">
          <Container>
            <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-5xl text-green-600">
                ✓
              </div>

              <h2 className="mt-8 text-4xl font-bold text-slate-900">
                Message Sent Successfully
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Thank you for contacting Team Waleed Foundation.
                <br />
                We appreciate your interest and will review your enquiry as soon
                as possible.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/"
                  className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                >
                  Return to Home
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border-2 border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                >
                  Send Another Message
                </Link>
              </div>

              <div className="mt-12 rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Need immediate assistance?
                </h3>

                <div className="mt-6 space-y-3 text-slate-700">
                  <p>
                    📞 +91 94190 40309
                  </p>

                  <p>
                    ✉️ contact@teamwaleed.org
                  </p>

                  <p>
                    💬 WhatsApp available for quick communication.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}