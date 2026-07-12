"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#08090c] px-6 text-center">
      <span className="font-mono text-sm text-zinc-500">500</span>
      <h1 className="mt-4 font-display text-5xl text-white">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-base text-zinc-400">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
      >
        Try again
      </button>
    </main>
  );
}
