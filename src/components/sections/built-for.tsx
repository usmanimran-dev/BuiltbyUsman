"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Wordmark {
  name: string;
  context: string;
  metric: string;
  category: string;
}

const wordmarks: Wordmark[] = [
  {
    name: "HBL",
    category: "Banking",
    context: "Trade finance systems",
    metric: "25+ stored procedures",
  },
  {
    name: "Finastra",
    category: "Fintech",
    context: "Banking integration work",
    metric: "Banking system integration work",
  },
  {
    name: "Tanzania Posts",
    category: "Logistics",
    context: "Swifpack logistics platform",
    metric: "Real-time GPS at scale",
  },
];

function GridPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function GlowOrb() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-[500px] w-[500px] rounded-full bg-gradient-radial from-amber-500/[0.08] via-orange-500/[0.03] to-transparent blur-3xl" />
    </div>
  );
}

export function BuiltFor() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32">
      <GridPattern />
      <GlowOrb />

      {/* Top separator line with fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-2"
          >
            <div className="h-px w-8 bg-amber-400/50" />
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
              Trusted implementations
            </span>
            <div className="h-px w-8 bg-amber-400/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl"
          >
            Engineering for{" "}
            <span className="italic text-amber-300">enterprise</span>{" "}
            operations.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400"
          >
            Systems I&apos;ve architected and shipped for global financial
            institutions and logistics platforms.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {wordmarks.map((wm, i) => (
            <motion.div
              key={wm.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.1,
                ease,
              }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-8 transition-all hover:border-amber-400/20 hover:bg-white/[0.04]"
            >
              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-radial from-amber-400/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Category label */}
                <div className="mb-8 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    {wm.category}
                  </span>
                </div>

                {/* Company name */}
                <h3 className="font-display text-3xl leading-tight text-white transition-colors group-hover:text-amber-100 sm:text-4xl">
                  {wm.name}
                </h3>

                {/* Context */}
                <p className="mt-3 text-sm text-zinc-400">{wm.context}</p>

                {/* Metric badge */}
                <div className="mt-8 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-amber-400"
                    >
                      <path
                        d="M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-medium text-zinc-300">
                      {wm.metric}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-white/10" />
          <p className="text-xs text-zinc-500">
            Delivered as an engineer at the software company serving these
            organizations
          </p>
          <div className="h-px w-12 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
