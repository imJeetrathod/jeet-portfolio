export default function Hero({ profile }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-12 pb-10">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-soft md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm text-neutral-400">{profile.location}</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
              {profile.title}
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
              I build reliable Salesforce solutions—clean UI with LWC, scalable Apex, and automation that makes teams faster.
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
                <a className="text-neutral-200 hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              Add your LinkedIn / Trailhead links in code and I’ll render them here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
