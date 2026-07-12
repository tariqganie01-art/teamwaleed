import Image from "next/image";

import Timeline from "@/components/Timeline";

export default function MeetWaleedPage() {
  return (
    <main>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Meet Waleed
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
              A young life inspiring a wider mission
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Waleed is a young student living with Morquio Syndrome, also
              known as MPS IV. His journey continues to inspire awareness,
              learning, inclusion and hope.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/waleed-hero.png"
                  alt="Waleed, the inspiration behind Team Waleed Foundation"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Waleed&apos;s story
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Courage, curiosity and determination
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Waleed&apos;s journey is one of courage, resilience and hope.
                  Despite the challenges of Morquio Syndrome, he continues to
                  learn, explore and participate in the world around him.
                </p>

                <p>
                  He has a strong interest in science, technology, geography
                  and space. His curiosity and knowledge encourage others to
                  see ability, potential and ambition before limitation.
                </p>

                <p>
                  Team Waleed Foundation was inspired by his journey. Its
                  purpose is to raise awareness, strengthen education, support
                  families and encourage responsible collaboration for rare
                  diseases.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                    Interests
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    Science, technology, geography and space
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                    Inspiration
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    Hope, awareness, education and inclusion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
    </main>
  );
}