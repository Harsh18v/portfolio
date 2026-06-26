export default function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-16 max-w-2xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}
