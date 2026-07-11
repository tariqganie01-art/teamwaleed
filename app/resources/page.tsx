import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Resources Library
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-6xl">
            Trusted resources for the rare disease community.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Resources for families, educators, healthcare professionals and
            researchers will be added here.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}