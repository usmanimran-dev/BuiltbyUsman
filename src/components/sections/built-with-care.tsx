"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

interface Card {
  icon: LucideIcon;
  heading: string;
  body: string;
}

const cards: Card[] = [
  {
    icon: Lock,
    heading: "Auth done right",
    body: "JWT authentication, role-based access control, and proper session handling on every system I build.",
  },
  {
    icon: Zap,
    heading: "Built for scale",
    body: "Query optimization and efficient architecture — not just what works today, but what holds up under real load.",
  },
  {
    icon: ShieldCheck,
    heading: "Data handled carefully",
    body: "Input validation, audit logging, and structured error handling as standard practice, not an afterthought.",
  },
  {
    icon: Server,
    heading: "Production-first mindset",
    body: "CI/CD pipelines, proper environment separation, and real deployment discipline on every project.",
  },
  {
    icon: RefreshCw,
    heading: "Resilient by design",
    body: "Graceful failure handling and real-time sync integrity, learned from building live GPS and transaction systems.",
  },
  {
    icon: CheckCircle2,
    heading: "Tested before it ships",
    body: "I check the edge cases, not just the happy path, before calling something done.",
  },
];

export function BuiltWithCare() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/25">
            Built with care
          </span>

          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Secure and reliable by default
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.06,
                  ease,
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/[0.06] bg-neutral-900/50 p-7 transition-colors hover:border-white/10 hover:bg-neutral-900/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-zinc-300 ring-1 ring-inset ring-white/10">
                  <Icon size={18} />
                </span>

                <h3 className="mt-6 font-display text-3xl leading-snug text-white">
                  {card.heading}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
