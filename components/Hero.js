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
    'Apex & LWC Specialist',
    'Agentforce Specialist',
    'Automation Enthusiast',
    'Trailhead Ranger',
    '3x Certified',
    '#TDX25 Winner',
  ];

  const profile = {
    location: 'Ahmedabad, Gujarat, IN',
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
      className={`mx-auto w-full max-w-6xl px-5 pt-12 pb-10 ${
        isInView ? 'animate-fade-in-up' : ''
      }`}
    >
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-soft md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* LEFT */}
          <div>
            <div className="text-sm text-neutral-400">{profile.location}</div>

            {/* TITLE */}
            <div
  onClick={handleTitleClick}
  className="
    relative mt-2
    h-[2.8rem] md:h-[4.5rem]
    overflow-hidden cursor-pointer select-none
    text-2xl md:text-5xl font-semibold tracking-tight
    whitespace-nowrap md:whitespace-normal
  "
>

              <div
                className={`absolute inset-0 ${
                  isAnimating ? 'title-wrapper-animate' : ''
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

            <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
              I build reliable Salesforce solutions with LWC, Apex, and automation
              that makes teams faster.
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

      {/* TITLE ANIMATION */}
      <style jsx>{`
        .title-wrapper-animate {
          transform: translateY(-100%);
          transition: transform 0.6s ease;
        }

.title-item {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: inherit;
  font-weight: inherit;
  line-height: 1.2; /* safer for animation */
  white-space: inherit;
}

      `}</style>
    </section>
  );
}
