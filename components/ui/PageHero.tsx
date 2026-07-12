import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-teal-600 py-24 text-white">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
          {eyebrow}
        </p>

        <h1 className="mt-5 text-4xl font-extrabold sm:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50">
          {description}
        </p>
      </Container>
    </section>
  );
}