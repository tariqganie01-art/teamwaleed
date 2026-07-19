import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
          The page you are looking for may have been moved, removed, or the
          address may be incorrect.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Return Home
          </Link>

          <Link
            href="/resources"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            View Resources
          </Link>
        </div>
      </div>
    </main>
  );
}