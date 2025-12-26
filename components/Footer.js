export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-neutral-400 mb-2">Stay Connected</p>
            <a
              href="https://www.linkedin.com/in/hi-jeet-rathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-300 hover:text-white transition-colors"
            >
              LinkedIn →
            </a>
          </div>
         <p className="hidden md:block text-sm text-neutral-400">
  © {year} Jeet Rathod
</p>

        </div>
      </div>
    </footer>
  );
}
