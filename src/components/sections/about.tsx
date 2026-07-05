"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MapPin, GraduationCap, Code2, Rocket } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    label: "Based in",
    value: "Karachi, Pakistan",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Pre-Engineering, Class XI (BIEK)",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Full Stack & AI Systems",
  },
  {
    icon: Rocket,
    label: "Goal",
    value: "CS at University Level",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="About"
          title="A bit about me"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <SpotlightCard className="h-full p-8">
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  I&apos;m a self-taught developer currently pursuing Pre-Engineering (Class XI) under BIEK, Karachi,
                  with plans to study Computer Science at university. I started building software early
                  and have been fortunate to ship production systems in trade finance and logistics before
                  most people pick their first framework.
                </p>
                <p>
                  I care about writing clean, performant code that solves real problems. My work spans
                  backend data engineering with DB2 stored procedures and LC workflows, to full-stack
                  mobile applications with real-time GPS tracking and cloud infrastructure on AWS.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m exploring how AI can be integrated into everyday business
                  workflows — from project estimation to document auditing. I believe the best software
                  is built by people who understand both the technology and the problem domain deeply.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <div className="grid gap-4 lg:col-span-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <SpotlightCard className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-zinc-200">{item.value}</p>
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
