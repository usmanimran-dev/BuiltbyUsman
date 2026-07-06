"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Bubble {
  text: string;
  top: string;
  left: string;
}

const bubbles: Bubble[] = [
  { text: "What's this going to cost?", top: "6%", left: "42%" },
  { text: "Can it integrate with our CRM?", top: "22%", left: "58%" },
  { text: "We don't have a fixed scope yet", top: "42%", left: "10%" },
  { text: "How long will this take?", top: "58%", left: "50%" },
  { text: "What if requirements change mid-build?", top: "80%", left: "22%" },
];

function BubbleCluster() {
  return (
    <div className="relative h-[440px] w-full">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full text-neutral-400"
        viewBox="0 0 400 440"
        preserveAspectRatio="none"
      >
        <polygon
          points="200,40 340,140 280,340 120,340 60,140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeOpacity="0.5"
        />
      </svg>

      {bubbles.map((b, i) => (
        <motion.div
          key={b.text}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.5,
            delay: 0.4 + i * 0.12,
            ease,
          }}
          style={{ top: b.top, left: b.left }}
          className="absolute -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-800 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.12)]"
        >
          {b.text}
        </motion.div>
      ))}
    </div>
  );
}

export function HowIBuild() {
  return (
    <section className="relative overflow-hidden bg-[#F0EFEA] px-6 py-40 text-neutral-900">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full bg-orange-500/90 px-3 py-1 text-xs font-medium text-white">
            How I build
          </span>

          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-neutral-900 sm:text-6xl md:text-7xl">
            Beyond the surface-level build
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            Most tools solve the easy 20%. I build for the hard part most people skip.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="relative rounded-r-xl bg-neutral-200/60 p-5 pl-6"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-neutral-500/70" />
              <h3 className="font-display text-2xl leading-snug text-neutral-900">
                Surface-level tools
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Generate a quick estimate or a simple form — handles the obvious ask, misses the edge cases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="relative rounded-r-xl bg-orange-100/70 p-5 pl-6"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-orange-500" />
              <h3 className="font-display text-2xl leading-snug text-neutral-900">
                What I actually build
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                My AI Project Estimator doesn't just generate a number — it classifies project complexity, structures the tech stack recommendation, and handles ambiguous or incomplete briefs without breaking. Same discipline applies to every system I ship, from banking workflows to logistics platforms.
              </p>
            </motion.div>
          </div>

          <BubbleCluster />
        </div>
      </div>
    </section>
  );
}
