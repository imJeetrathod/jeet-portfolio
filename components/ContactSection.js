'use client';

import { useInView } from '../hooks/useInView';
import { useState } from 'react';

export default function ContactSection({ profile }) {
  const [ref, isInView] = useInView();
  const [message, setMessage] = useState('');

  const isDisabled = message.trim().length === 0;

  return (
    <section
      ref={ref}
      id="contact"
      className={`mx-auto w-full max-w-6xl pb-16 ${isInView ? 'animate-fade-in-up' : ''}`}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral-100">Contact</h2>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 shadow-soft">
        <div className="flex flex-col gap-2 text-neutral-200">
          <a className="hover:underline" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}>
            {profile.email}
          </a>
          <a className="hover:underline" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            {profile.phone}
          </a>
        </div>

        <div className="mt-6">
          <textarea
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:border-neutral-500 focus:outline-none mb-4"
            placeholder="Send me your message here..."
          />

          <button
            disabled={isDisabled}
            onClick={() => {
              const subject = 'Portfolio Contact';
              const body = encodeURIComponent(message);
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
                  subject
                )}&body=${body}`,
                '_blank'
              );
            }}
            className={`
              group relative w-full overflow-hidden rounded-xl px-4 py-2.5
              text-sm font-medium transition-all
              focus:outline-none focus:ring-2 focus:ring-neutral-600
              ${
                isDisabled
                  ? 'cursor-not-allowed border border-neutral-800 bg-neutral-900 text-neutral-500'
                  : 'border border-neutral-700 bg-neutral-900 text-neutral-100 hover:border-neutral-500 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.6)]'
              }
            `}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-80"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>Send</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
