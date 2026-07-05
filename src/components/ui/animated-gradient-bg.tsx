"use client";

export function AnimatedGradientBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-indigo-600/20 blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-violet-600/15 blur-[120px] animate-[float_10s_ease-in-out_infinite_2s]" />
      <div className="absolute top-1/3 left-1/2 h-[40%] w-[40%] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px] animate-[pulse-glow_6s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
    </div>
  );
}
