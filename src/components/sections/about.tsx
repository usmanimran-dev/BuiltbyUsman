"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const paragraphs = [
  "Full-stack engineer specializing in mission-critical systems for financial services, logistics operations, and AI-driven automation. Based in Karachi, with a track record of architecting production systems that handle real operational complexity at scale — from enterprise banking workflows to multi-tenant voice AI platforms deployed across regional markets.",
  "My focus is on building systems that solve problems businesses haven't yet solved at the infrastructure level. Rather than optimize for feature velocity, I optimize for operational resilience: systems that degrade gracefully, fail with clarity, and maintain data integrity under concurrent load.",
  "Technical foundation spans backend architecture (Node.js, PostgreSQL, DB2 enterprise systems), real-time systems (MQTT, Firebase, WebSocket-driven applications), and AI integration (LLM pipelines, voice automation, intelligent workflow systems). Current work centers on multi-tenant architecture patterns and scaling AI operations across regional deployments.",
  "I pursue formal computer science training at DHA Suffa University while building production systems — learning that informs architecture decisions rather than replacing hands-on expertise. Invested in sustainable code practices, measurable performance gains, and systems designed for operator understanding.",
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-40">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-20">
        <SectionHeading eyebrow="About" title="Building systems for operational complexity." />

        <div className="flex flex-col gap-8">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg leading-[1.8] text-zinc-300"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
