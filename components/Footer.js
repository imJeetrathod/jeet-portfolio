export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-400">© {year} Jeet Rathod. All rights reserved.</p>
          <p className="text-sm text-neutral-500">Built with Next.js + Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
