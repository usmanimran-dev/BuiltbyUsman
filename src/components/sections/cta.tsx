"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function RadiatingLines({ side }: { side: "left" | "right" }) {
  const flip = side === "right" ? "scale(-1,1) translate(-800,0)" : "";
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute top-0 ${
        side === "left" ? "left-0" : "right-0"
      } h-full w-1/2 text-neutral-900/25`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6" transform={flip}>
        {Array.from({ length: 26 }).map((_, i) => {
          const r = 60 + i * 40;
          return (
            <circle key={i} cx={0} cy={300} r={r} strokeOpacity={0.45 - i * 0.012} />
          );
        })}
      </g>
    </svg>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F26D34] px-6 py-40">
      <RadiatingLines side="left" />
      <RadiatingLines side="right" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-900">
          Ready to build something?
        </span>

        <h2 className="mt-8 font-display text-5xl leading-[1.05] text-neutral-900 sm:text-6xl md:text-7xl">
          Let&apos;s build the system your business actually needs.
        </h2>

        <a
          href="#contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
        >
          Get in touch
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </motion.div>
    </section>
  );
}
