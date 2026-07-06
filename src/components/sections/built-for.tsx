"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Wordmark {
  name: string;
  context: string;
}

const wordmarks: Wordmark[] = [
  { name: "HBL", context: "Trade finance systems" },
  { name: "Finastra", context: "Banking integration work" },
  {
    name: "Tanzania Posts Corporation",
    context: "Swifpack logistics platform",
  },
];

function WavyLines() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1600 400"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full text-white/25"
    >
      <defs>
        <linearGradient id="wave-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#wave-fade)" strokeWidth="0.6">
        {Array.from({ length: 22 }).map((_, i) => {
          const yBase = 260 + i * 6;
          return (
            <path
              key={i}
              d={`M -50 ${yBase} C 300 ${yBase - 60 - i * 2}, 700 ${
                yBase + 40
              }, 1100 ${yBase - 40 - i * 2} S 1700 ${yBase + 20}, 1700 ${
                yBase + 10
              }`}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function BuiltFor() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32">
      <WavyLines />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-center text-sm text-zinc-400 sm:text-base"
        >
          Systems built for{" "}
          <span className="italic text-amber-300/90">real</span> operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="flex w-full flex-col items-center justify-center gap-y-14 sm:flex-row sm:flex-wrap sm:gap-x-16 md:gap-x-24"
        >
          {wordmarks.map((wm) => (
            <div
              key={wm.name}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="font-display text-3xl leading-none text-white sm:text-[28px]">
                {wm.name}
              </span>
              <span className="text-xs tracking-wide text-zinc-500">
                {wm.context}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="max-w-xl text-center text-xs leading-relaxed text-zinc-600"
        >
          Built as an engineer at the software houses serving these
          organizations.
        </motion.p>
      </div>
    </section>
  );
}
