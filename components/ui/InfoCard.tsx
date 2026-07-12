type InfoCardProps = {
  title: string;
  description: string;
  className?: string;
};

export default function InfoCard({
  title,
  description,
  className = "",
}: InfoCardProps) {
  return (
    <article
      className={`rounded-3xl border border-slate-200 bg-white p-7 shadow-sm ${className}`}
    >
      <h3 className="text-xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}