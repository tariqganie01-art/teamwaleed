import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    title: "Waleed's Journey",
    description:
      "A story of courage, learning, family support and hope.",
    href: "https://www.youtube.com/@waleed-2019",
  },
  {
    title: "Rare Disease Awareness",
    description:
      "Educational videos that help families and communities understand rare diseases.",
    href: "https://www.youtube.com/@waleed-2019",
  },
  {
    title: "Team Waleed Foundation",
    description:
      "Foundation updates, awareness initiatives and future programmes.",
    href: "https://www.youtube.com/@waleed-2019",
  },
];

export default function FeaturedVideos() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          eyebrow="Featured videos"
          title="Stories, education and awareness through video."
          description="Watch Team Waleed Foundation videos and follow Waleed's journey on YouTube."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl text-white">
                <FaYoutube aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {video.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {video.description}
              </p>

              <a
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Watch on YouTube
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex rounded-full border-2 border-blue-700 px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            View Foundation Updates
          </Link>
        </div>
      </Container>
    </section>
  );
}