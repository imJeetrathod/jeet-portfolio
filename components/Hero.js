'use client';

import { useInView } from '../hooks/useInView';

export default function Hero({ profile }) {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className={`mx-auto w-full max-w-6xl px-5 pt-12 pb-10 ${isInView ? 'animate-fade-in-up' : ''}`}>
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-soft md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm text-neutral-400">{profile.location}</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
              {profile.title}
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
              I build reliable Salesforce solutions with LWC, Apex, and automation that makes teams faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 px-4 py-2.5 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4 md:min-w-[320px]">
            <div className="text-xs uppercase tracking-widest text-neutral-400">Quick Info</div>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Name</span>
                <span className="text-neutral-200">{profile.name}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Phone</span>
                <a className="text-neutral-200 hover:underline" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Email</span>
                <a className="text-neutral-200 hover:underline" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">LinkedIn</span>
                <a className="text-neutral-200 hover:underline" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Trailhead</span>
                <a className="text-neutral-200 hover:underline" href={profile.links.trailhead} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
