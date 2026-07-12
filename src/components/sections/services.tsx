"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "AI Voice Agents",
    description:
      "I build production voice agents for businesses — call handling, lead qualification, and appointment booking that runs 24/7.",
  },
  {
    title: "Full Stack Web Platforms",
    description:
      "End-to-end platforms: frontend, backend, database, and deployment. Built for real load, not demos.",
  },
  {
    title: "Forward-Deployed Engineering",
    description:
      "I embed with your team to understand the business problem first, then ship the system that solves it.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="Three ways I work with businesses that need real systems, not prototypes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass flex flex-col gap-4 rounded-2xl p-8"
            >
              <h3 className="font-display text-2xl leading-snug text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
