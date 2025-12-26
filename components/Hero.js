'use client';

import { useState } from 'react';

// Mock hook for demonstration
const useInView = () => {
  return [null, true];
};

export default function Hero() {
  const [ref, isInView] = useInView();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const titles = [
    'Salesforce Developer',
    'Automation Enthusiast',
    'Trailhead Ranger',
    '3x Certified',
    '#TDX25 Winner',
  ];

  const profile = {
    location: 'Ahmedabad, Gujarat, India',
    name: 'Jeet Rathod',
    phone: '+91 91066 04262',
    email: 'work.jeetrathod@gmail.com',
    links: {
      linkedin: 'https://linkedin.com/in/hi-jeet-rathod',
      trailhead: 'https://www.salesforce.com/trailblazer/imjeetrathod',
    },
  };

  const nextIndex = (currentTitleIndex + 1) % titles.length;

  const handleTitleClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentTitleIndex(nextIndex);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <section
      ref={ref}
      className={`mx-auto w-full max-w-6xl px-5 pt-12 pb-10 ${isInView ? 'animate-fade-in-up' : ''
        }`}
    >
      {/* MAIN CARD */}
      <div
        className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-soft md:p-10"
        style={{
          /* 🎛 TITLE SIZE CONTROLS */
          '--title-font-mobile': '2rem',   // 📱 change mobile title size here
          '--title-font-desktop': '3.25rem',  // 💻 change laptop title size here
        }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* LEFT */}
          <div>
            {/* LOCATION */}
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-neutral-400"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span>{profile.location}</span>
            </div>

            {/* TITLE */}
            <div
              onClick={handleTitleClick}
              className="
                relative mt-2
                h-[2.8rem] md:h-[4.5rem]
                overflow-hidden cursor-pointer select-none
                font-semibold tracking-tight
                whitespace-nowrap md:whitespace-normal
              "
            >
              <div
                className={`absolute inset-0 ${isAnimating ? 'title-wrapper-animate' : ''
                  }`}
              >
                <h1 className="title-item">
                  {titles[currentTitleIndex]}
                </h1>

                <h1 className="title-item">
                  {titles[nextIndex]}
                </h1>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
              I build reliable Salesforce solutions with LWC, Apex, and automation
              that makes teams faster.
            </p>

            {/* ACTIONS */}
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

          {/* RIGHT – QUICK INFO */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4 md:min-w-[320px]">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              Quick Info
            </div>

            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Name</span>
                <span className="text-neutral-200">{profile.name}</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Phone</span>
                <a
                  className="text-neutral-200 hover:underline"
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                >
                  {profile.phone}
                </a>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Email</span>
                <a
                  className="text-neutral-200 hover:underline"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">LinkedIn</span>
                <a
                  className="text-neutral-200 hover:underline"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Trailhead</span>
                <a
                  className="text-neutral-200 hover:underline"
                  href={profile.links.trailhead}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TITLE ANIMATION + SIZE CONTROL */}
      <style jsx>{`
        .title-wrapper-animate {
          transform: translateY(-100%);
          transition: transform 0.6s ease;
        }

        .title-item {
          height: 100%;
          display: flex;
          align-items: center;
          font-size: var(--title-font-mobile);
          font-weight: inherit;
          line-height: 1.2;
          white-space: inherit;
        }

        @media (min-width: 768px) {
          .title-item {
            font-size: var(--title-font-desktop);
          }
        }
      `}</style>
    </section>
  );
}
