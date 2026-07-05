"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Building2, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Socium",
    role: "Backend Data Engineer — Trade Finance",
    period: "[Dates TBC]",
    description:
      "Designed and optimized DB2 stored procedures powering Letter of Credit (LC) and Amendment workflows for trade finance operations.",
    achievements: [
      "Built core LC/Amendment processing logic in DB2 stored procedures",
      "Achieved ~35% improvement in API response times through query optimization",
      "Worked directly with banking domain logic and compliance-critical data flows",
    ],
    stack: ["DB2", "Stored Procedures", "REST APIs", "Trade Finance"],
  },
  {
    company: "IvisionGate",
    role: "Full Stack Engineer",
    period: "[Dates TBC]",
    description:
      "Led development of Swifpack — a logistics and parcel management system built for Tanzania Posts Corporation.",
    achievements: [
      "Built driver and user-facing Flutter mobile apps with real-time parcel tracking",
      "Implemented MQTT + Firebase for live GPS tracking across delivery fleets",
      "Designed and managed AWS infrastructure for the entire system",
      "Delivered end-to-end from architecture through deployment",
    ],
    stack: ["Flutter", "MQTT", "Firebase", "AWS", "Node.js"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="Production experience in trade finance and logistics, working with enterprise-scale systems."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent lg:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <SpotlightCard className="p-8 lg:ml-16">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                        {i === 0 ? <Building2 size={20} /> : <Briefcase size={20} />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                        <p className="text-sm text-indigo-400">{exp.role}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-500">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mb-4 text-zinc-400 leading-relaxed">{exp.description}</p>

                  <ul className="mb-6 space-y-2">
                    {exp.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
