'use client';

import Image from 'next/image';

export default function Header({ profile }) {
  const nav = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const openGmail = () => {
    const email = profile.email;
    const subject = encodeURIComponent('Regarding Collaboration / Opportunity');
    const body = encodeURIComponent(
      'Hi,\n\nI came across your portfolio and would love to connect.\n\nThanks.'
    );

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Try opening Gmail app
      window.location.href = `googlegmail://co?to=${email}&subject=${subject}&body=${body}`;

      // Fallback to mailto if Gmail app is not installed
      setTimeout(() => {
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      }, 500);
    } else {
      // Desktop → Gmail Web
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
        '_blank'
      );
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#" className="group flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Jeet Rathod"
              width={36}
              height={36}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{profile.name}</div>
            <div className="text-xs text-neutral-400">{profile.title}</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-xl px-3 py-2 text-sm text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900/60"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openGmail}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </header>
  );
}
