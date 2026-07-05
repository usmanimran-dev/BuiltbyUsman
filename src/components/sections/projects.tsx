"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink, ImageOff } from "lucide-react";
import { categoryLabels, visibleProjects, type ProjectCategory } from "@/lib/projects-data";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const tabs: { key: "all" | Exclude<ProjectCategory, "archive">; label: string }[] = [
  { key: "all", label: "All" },
  { key: "automation", label: categoryLabels.automation },
  { key: "web", label: categoryLabels.web },
  { key: "mobile", label: categoryLabels.mobile },
  { key: "shopify", label: categoryLabels.shopify },
];

export function Projects() {
  const [active, setActive] = useState<"all" | Exclude<ProjectCategory, "archive">>("all");

  const filtered = useMemo(() => {
    if (active === "all") return visibleProjects;
    return visibleProjects.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="Selected work across automation, web apps, mobile apps, and Shopify commerce."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === tab.key
                  ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-300"
                  : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <SpotlightCard className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative h-44 w-full overflow-hidden border-b border-white/5 bg-white/[0.02]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized={project.image.startsWith("http")}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-600">
                        <ImageOff size={24} />
                        <span className="text-xs">Image coming soon</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-white leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 gap-2 pt-0.5">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 transition-colors hover:text-indigo-400"
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 transition-colors hover:text-indigo-400"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="mb-4 text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
