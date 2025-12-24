'use client';

import { useInView } from '../hooks/useInView';

export default function ContactSection({ profile }) {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="contact" className={`mx-auto w-full max-w-6xl px-5 pb-16 ${isInView ? 'animate-fade-in-up' : ''}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral-100">Contact</h2>
      </div>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 shadow-soft">
        <div className="flex flex-col gap-2 text-neutral-200">
          <a className="hover:underline" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}>{profile.email}</a>
          <a className="hover:underline" href={`tel:${profile.phone.replace(/\s/g,'')}`}>{profile.phone}</a>
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Send me a message</label>
          <textarea
            id="message"
            rows="4"
            className="block w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:border-neutral-500 focus:outline-none mb-4"
            placeholder="Your message here..."
          ></textarea>
          <button
            onClick={() => {
              const message = document.getElementById('message').value;
              const subject = 'Portfolio Contact';
              const body = encodeURIComponent(message);
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}&body=${body}`, '_blank');
            }}
            className="w-full rounded-md bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          >
            Send via Gmail
          </button>
        </div>
      </div>
    </section>
  );
}