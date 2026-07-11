type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignment =
    align === "left" ? "text-left" : "mx-auto max-w-3xl text-center";

  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}