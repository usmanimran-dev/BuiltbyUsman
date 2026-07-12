import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#08090c] px-6 text-center">
      <span className="font-mono text-sm text-zinc-500">404</span>
      <h1 className="mt-4 font-display text-5xl text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-base text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
      >
        Back to home
      </Link>
    </main>
  );
}
