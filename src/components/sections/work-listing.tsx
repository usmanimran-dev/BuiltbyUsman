"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.22, 1, 0.36, 1] as const;

function StudyCard({ study, delay }: { study: CaseStudy; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      <Link
        href={`/work/${study.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-7 transition hover:border-white/25"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" />
        <p className="text-xs uppercase tracking-[.16em] text-orange-300">
          {study.eyebrow}
        </p>
        <h3 className="mt-5 font-display text-2xl text-white sm:text-3xl">
          {study.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {study.challenge}
        </p>
        <div className="mt-6 flex flex-1 flex-wrap content-start gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-300 transition group-hover:gap-3">
          Read the case study
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  );
}

export function WorkListing({ studies }: { studies: CaseStudy[] }) {
  const groups = [
    {
      key: "ai" as const,
      title: "AI systems",
      description:
        "Voice and conversation systems currently being implemented, plus the product the patterns feed into.",
    },
    {
      key: "enterprise" as const,
      title: "Enterprise systems",
      description:
        "Banking and logistics platforms delivered as an engineer at the software companies serving these organizations.",
    },
  ];

  return (
    <section className="relative bg-[#08090c] px-6 pb-28 pt-40 sm:pb-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:42px_42px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-72 w-2/3 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[.2em] text-zinc-500">
            Case studies
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] text-white sm:text-5xl">
            Systems built for work that cannot wait.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Current implementations are described by what is being built, not as
            completed deployment claims. Delivered work carries the figures it
            actually earned.
          </p>
        </motion.header>

        <div className="mt-20 space-y-20">
          {groups.map((group) => {
            const items = studies.filter((s) => s.domain === group.key);
            if (items.length === 0) return null;

            return (
              <div key={group.key}>
                <div className="border-b border-white/10 pb-5">
                  <h2 className="font-display text-2xl text-white sm:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
                    {group.description}
                  </p>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((study, i) => (
                    <StudyCard key={study.slug} study={study} delay={i * 0.07} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
