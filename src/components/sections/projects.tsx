"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink, Brain, FileSearch, Fuel, Heart, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Project Estimator",
    icon: Brain,
    problem: "Software agencies struggle to scope projects accurately, leading to budget overruns and missed deadlines.",
    role: "Full Stack Developer",
    stack: ["Next.js", "OpenAI API", "Node.js", "PostgreSQL"],
    outcome: "Generates detailed project estimates with task breakdowns, timelines, and cost projections using AI analysis.",
  },
  {
    title: "IntelliAudit",
    icon: FileSearch,
    problem: "Manual document auditing is slow, error-prone, and doesn't scale across large organizations.",
    role: "Full Stack Developer",
    stack: ["React", "Claude API", "Node.js", "PostgreSQL"],
    outcome: "AI-powered document auditing system that automates compliance checks and surfaces anomalies instantly.",
  },
  {
    title: "Smart Pump ERP",
    icon: Fuel,
    problem: "Fuel station operations rely on fragmented tools with no unified view of inventory, sales, and staffing.",
    role: "Full Stack Developer",
    stack: ["Angular", "Node.js", "PostgreSQL", "Chart.js"],
    outcome: "Complete ERP system for petrol pump management — inventory tracking, shift management, and financial reporting.",
  },
  {
    title: "NGO Assist",
    icon: Heart,
    problem: "Non-profits lack affordable tools to manage donors, volunteers, and beneficiaries in one place.",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcome: "Management platform streamlining donor relations, volunteer coordination, and impact tracking for NGOs.",
  },
  {
    title: "Velora",
    icon: Sparkles,
    problem: "Businesses need custom AI integrations but lack the technical expertise to build and deploy them.",
    role: "Full Stack Developer",
    stack: ["Next.js", "OpenAI API", "Claude API", "Tailwind CSS"],
    outcome: "AI-powered platform enabling businesses to create custom AI workflows without deep technical knowledge.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="A selection of projects spanning AI, fintech, logistics, and enterprise software."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SpotlightCard className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <project.icon size={20} />
                  </div>
                  <ExternalLink size={16} className="text-zinc-600 transition-colors hover:text-indigo-400" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
                <p className="mb-3 text-sm text-zinc-500 leading-relaxed">{project.problem}</p>
                <p className="mb-4 text-sm text-zinc-300 leading-relaxed">{project.outcome}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
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
    </section>
  );
}
