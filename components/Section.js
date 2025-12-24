'use client';

import { useInView } from '../hooks/useInView';

export default function Section({ id, title, children, className = '' }) {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id={id} className={`scroll-mt-24 py-10 ${isInView ? className : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
        <div className="h-px flex-1 bg-neutral-800" />
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
