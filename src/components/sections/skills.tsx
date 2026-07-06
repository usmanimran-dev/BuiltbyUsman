"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const groups: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["Angular", "Next.js", "React", "Flutter", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "DB2", "Firebase", "Supabase"],
  },
  {
    label: "AI / LLM",
    items: ["OpenAI API", "Claude API", "RAG workflows"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Docker", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with."
          description="Tools I reach for often. The list is short on purpose."
        />

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-baseline justify-between border-b border-white/5 pb-3">
                <h3 className="text-sm font-medium text-white">
                  {group.label}
                </h3>
                <span className="font-mono text-xs text-zinc-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-col gap-2 text-base text-zinc-400">
                {group.items.map((item) => (
                  <li key={item} className="transition-colors hover:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
