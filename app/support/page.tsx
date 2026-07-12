import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900">
          Support Team Waleed Foundation
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          This page will include donations, volunteering, partnerships,
          healthcare collaboration and corporate CSR opportunities.
        </p>
      </main>

      <Footer />
    </>
  );
}