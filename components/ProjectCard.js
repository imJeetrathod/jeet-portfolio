export default function ProjectCard({ title, subtitle, description, tags }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 shadow-soft">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-1 text-sm text-neutral-400">{subtitle}</div>
      <p className="mt-3 text-neutral-300 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
