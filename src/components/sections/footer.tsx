"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Usman Imran
        </p>
        <p className="text-sm text-zinc-600">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
