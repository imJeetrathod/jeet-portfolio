export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
        <div className="h-px flex-1 bg-neutral-800" />
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
