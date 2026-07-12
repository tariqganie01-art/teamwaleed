import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900">
          News
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          News and updates will be published here soon.
        </p>
      </main>

      <Footer />
    </>
  );
}