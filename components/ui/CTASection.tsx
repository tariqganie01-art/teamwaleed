import Link from "next/link";
import Container from "@/components/ui/Container";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type CTASectionProps = {
  title: string;
  description: string;
  buttons: CTAButton[];
};

export default function CTASection({
  title,
  description,
  buttons,
}: CTASectionProps) {
  return (
    <section className="bg-blue-950 py-20 text-white">
      <Container className="text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold">{title}</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {buttons.map((button) => (
            <Link
              key={button.label}
              href={button.href}
              className={
                button.variant === "secondary"
                  ? "rounded-full border-2 border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-blue-800"
                  : "rounded-full bg-white px-7 py-3.5 font-semibold text-blue-800 transition hover:bg-blue-50"
              }
            >
              {button.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}