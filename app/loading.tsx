export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <div className="text-center">
        <div
          className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-700"
          aria-label="Loading"
        />

        <h1 className="mt-6 text-xl font-bold text-slate-950">
          Loading Team Waleed Foundation
        </h1>

        <p className="mt-2 text-slate-600">
          Please wait while we prepare this page.
        </p>
      </div>
    </main>
  );
}   