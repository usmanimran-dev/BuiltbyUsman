"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function CornerLines({ position }: { position: "tl" | "br" }) {
  const transform =
    position === "tl" ? "" : "translate(1200,800) rotate(180)";
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full text-neutral-400/40 ${
        position === "tl" ? "-scale-y-100" : ""
      }`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6" transform={transform}>
        {Array.from({ length: 14 }).map((_, i) => {
          const offset = i * 22;
          return (
            <path
              key={i}
              d={`M ${-100 + offset} 900 C 200 ${700 - offset * 2}, 700 ${
                600 - offset
              }, 1400 ${200 - offset * 1.5}`}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-[#F0EFEA] px-6 pt-32 pb-24 text-neutral-900"
    >
      <CornerLines position="tl" />
      <CornerLines position="br" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-5xl leading-[1.02] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl"
          >
            Full stack developer building the AI systems fintech and logistics companies actually trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600"
          >
            I build production systems for banking workflows, logistics platforms, and AI-powered tools — not prototypes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-md"
            >
              Get in touch
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="relative"
        >
          <DemoCard />
        </motion.div>
      </div>
    </section>
  );
}

function DemoCard() {
  return (
    <div className="relative">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <TagPill color="amber">24/7 call handling</TagPill>
        <TagPill color="blue">Lead booking</TagPill>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]">
        <div className="mb-4 flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-neutral-100 px-4 py-2.5 text-sm text-neutral-800">
            We're missing inbound calls during peak hours. Need AI to answer and book test drives automatically.
          </div>
        </div>

        <div className="mb-3 flex items-center gap-2 text-xs text-neutral-500">
          <Sparkles size={14} className="text-amber-500" />
          <span className="font-medium text-neutral-700">Currently building & deploying:</span>
          <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
        </div>

        <div className="mb-4 rounded-2xl rounded-tl-sm bg-neutral-50 px-4 py-3 text-sm leading-relaxed text-neutral-800">
          Active implementations in progress:
          <ul className="mt-2 space-y-1 text-[13px] text-neutral-700">
            <li>
              · <span className="text-neutral-500">BYD dealerships —</span> Rolling out across 40+ locations
            </li>
            <li>
              · <span className="text-neutral-500">Kia group —</span> Expanding test drive automation
            </li>
            <li>
              · <span className="text-neutral-500">Target metrics —</span> 90%+ resolution without handoff
            </li>
          </ul>
          <p className="mt-3 text-neutral-600">
            Building the system that turns every missed call into a captured lead and booked appointment.
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-wider text-neutral-400">
            Omni Agent — Multi-tenant Voice AI
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-400">
          <span className="flex-1">See implementation details…</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}

function TagPill({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "amber" | "blue";
}) {
  const styles =
    color === "amber"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-blue-50 text-blue-700 border-blue-200";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          color === "amber" ? "bg-amber-500" : "bg-blue-500"
        }`}
      />
      {children}
    </span>
  );
}
