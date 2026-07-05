"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["Angular", "Next.js", "React", "Flutter", "React Native", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "DB2 Stored Procedures"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "DB2", "Firebase", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "Vercel", "Docker", "CI/CD"],
  },
  {
    label: "AI & Integration",
    skills: ["OpenAI API", "Claude API", "MQTT", "Firebase Cloud Messaging"],
  },
  {
    label: "Tools",
    skills: ["Git", "Figma", "Postman", "VS Code"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Skills"
          title="My toolkit"
          description="Technologies I use to build production systems."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-400">
                {category.label}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(99, 102, 241, 0.15)",
                      borderColor: "rgba(99, 102, 241, 0.3)",
                    }}
                    className="cursor-default rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
