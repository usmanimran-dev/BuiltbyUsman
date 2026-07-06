"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

interface Card {
  heading: string;
  items: string[];
  gradient: string;
  ring: string;
  check: string;
}

const backCard: Card = {
  heading: "Code I ship",
  items: ["Input validation", "Error handling", "Type safety", "Query optimization"],
  gradient:
    "bg-gradient-to-br from-orange-200/95 via-orange-100/90 to-amber-50/85",
  ring: "ring-orange-300/40",
  check: "text-orange-600",
};

const frontCard: Card = {
  heading: "Systems I build",
  items: [
    "Role-based access control",
    "Audit logging",
    "Real-time sync integrity",
    "Graceful failure states",
  ],
  gradient: "bg-gradient-to-br from-blue-100/95 via-sky-100/90 to-indigo-100/90",
  ring: "ring-sky-300/40",
  check: "text-blue-600",
};

function ChecklistCard({
  card,
  className,
  motionProps,
}: {
  card: Card;
  className?: string;
  motionProps: Parameters<typeof motion.div>[0];
}) {
  return (
    <motion.div
      {...motionProps}
      className={`w-64 rounded-2xl p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] ring-1 ${card.gradient} ${card.ring} ${className ?? ""}`}
    >
      <h3 className="font-display text-xl leading-snug text-neutral-900">
        {card.heading}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-sm text-neutral-800"
          >
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/70 ${card.check}`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Standards() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="relative flex h-[440px] items-center justify-center">
          <ChecklistCard
            card={backCard}
            className="absolute left-4 top-6 -rotate-6"
            motionProps={{
              initial: { opacity: 0, x: -20, rotate: -12 },
              whileInView: { opacity: 1, x: 0, rotate: -6 },
              whileHover: { rotate: -8, y: -4 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.7, ease },
            }}
          />
          <ChecklistCard
            card={frontCard}
            className="absolute right-4 top-24"
            motionProps={{
              initial: { opacity: 0, x: 20, rotate: 4 },
              whileInView: { opacity: 1, x: 0, rotate: 0 },
              whileHover: { rotate: 2, y: -4 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.7, delay: 0.15, ease },
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="flex flex-col gap-8"
        >
          <h2 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl">
            Engineering standards, not shortcuts
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-zinc-400">
            I build for the failure cases, not just the happy path — the same discipline required in banking workflows carries into every system I ship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
