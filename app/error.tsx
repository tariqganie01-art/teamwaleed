"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Something Went Wrong
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          We could not load this page
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
          Please try again. If the problem continues, return to the homepage or
          contact Team Waleed Foundation.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}