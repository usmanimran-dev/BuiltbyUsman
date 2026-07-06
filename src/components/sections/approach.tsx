"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function QuoteMark() {
  return (
    <svg
      aria-hidden
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      className="text-amber-400"
    >
      <path
        d="M2 26 Q2 14 8 8 Q12 4 16 4 L16 10 Q12 10 10 14 Q14 14 14 20 Q14 26 8 26 Z M22 26 Q22 14 28 8 Q32 4 36 4 L36 10 Q32 10 30 14 Q34 14 34 20 Q34 26 28 26 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-black px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/25">
            Approach
          </span>

          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Built for real operational complexity
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            No shortcuts between clean code, real business logic, and systems that actually ship.
          </p>
        </motion.div>

        <div className="mt-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex flex-col gap-5"
          >
            <h3 className="font-display text-4xl text-white sm:text-5xl">
              Depth over demos
            </h3>
            <p className="text-base leading-relaxed text-zinc-400">
              I've built stored procedures handling live Letter of Credit workflows, real-time GPS systems processing live driver data, and AI agents that convert real project briefs into structured estimates — not tutorial projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="rounded-2xl border border-white/5 bg-neutral-900/60 p-8"
          >
            <QuoteMark />

            <p className="mt-6 font-display text-3xl leading-snug text-white sm:text-[32px]">
              25+ stored procedures. Live transaction workflows. Zero downtime tolerance.
            </p>

            <p className="mt-6 text-sm text-zinc-500">
              — Trade finance systems, Socium
            </p>

            <div className="my-7 h-px w-full bg-white/5" />

            <div>
              <p className="text-2xl font-display text-white">
                <span className="text-amber-300">~35%</span> faster API response times
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Query optimization work, production banking system
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
