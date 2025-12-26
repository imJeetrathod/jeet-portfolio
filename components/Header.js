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

 const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Regarding%20Collaboration%20/%20Opportunity&body=Hi,%0A%0AI came across your portfolio and would love to connect.%0A%0AThanks.`;


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
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
          >
            Send Message
          </a>
        </div>
      </div>
    </header>
  );
}
