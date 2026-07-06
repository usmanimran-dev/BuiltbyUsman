"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

interface Role {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

const roles: Role[] = [
  {
    company: "Socium",
    role: "Backend Data Engineer — Trade Finance Systems",
    period: "2024 — Present",
    summary:
      "Built Letter of Credit and Amendments workflows while employed at Socium, for HBL and Finastra deployments.",
    bullets: [
      "Wrote 25+ DB2 stored procedures supporting Letter of Credit and Amendments workflows across enterprise banking systems.",
      "Optimized multi-table joins and query execution plans, reducing average API response times by approximately 35%.",
      "Mapped database schemas to REST API responses and Java middleware contracts so downstream systems receive clean, structured data.",
      "Maintained integration documentation and data-mapping sheets that reduced schema-mismatch errors during releases.",
    ],
    stack: ["DB2", "Stored Procedures", "Trade Finance", "REST APIs"],
  },
  {
    company: "iVisionGate",
    role: "Full Stack Engineer",
    period: "2022 — 2024",
    summary:
      "Led development of Swifpack, a digital mobility and logistics platform delivered to Tanzania Posts Corporation.",
    bullets: [
      "Architected Flutter driver and user apps for real-time ride booking, delivery tracking, and trip management.",
      "Built Next.js and Angular web dashboards for corporate fleet management and operational monitoring.",
      "Wrote Node.js backend services handling high-volume, real-time transactions, and integrated MQTT + Firebase for live GPS updates.",
      "Deployed and maintained the AWS infrastructure; reduced real-time update latency by approximately 35%.",
    ],
    stack: ["Flutter", "Next.js", "Angular", "Node.js", "MQTT", "Firebase", "AWS"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          description="Two roles, both shipping software people rely on daily."
        />

        <div className="divide-y divide-white/5 border-y border-white/5">
          {roles.map((role, i) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-8 py-14 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {role.period}
                </span>
                <h3 className="font-display text-4xl text-white">
                  {role.company}
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-medium text-blue-400">{role.role}</p>
                  <p className="mt-3 text-base leading-relaxed text-zinc-300">
                    {role.summary}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="grid grid-cols-[16px_1fr] gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-3 bg-zinc-600"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {role.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
