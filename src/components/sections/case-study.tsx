"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { openCalModal } from "@/lib/cal";

const ease = [0.22, 1, 0.36, 1] as const;

const measureStyles: Record<CaseStudy["measures"][number]["kind"], string> = {
  target: "border-orange-300/25 bg-orange-300/[.07]",
  scope: "border-white/10 bg-white/[.03]",
  status: "border-white/10 bg-white/[.03]",
};

const measureLabels: Record<CaseStudy["measures"][number]["kind"], string> = {
  target: "Target",
  scope: "Scope",
  status: "Status",
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <article className="relative bg-[#08090c] px-6 pb-28 pt-40 sm:pb-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:42px_42px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-72 w-2/3 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-3xl">
        <Link
          href="/ai#case-studies"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={14} /> All case studies
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mt-8"
        >
          <p className="text-xs uppercase tracking-[.18em] text-orange-300">
            {study.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] text-white sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {study.summary}
          </p>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["Client", study.client],
              ["Sector", study.sector],
              ["Status", study.status],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#0c0d10] p-4">
                <dt className="text-[10px] uppercase tracking-[.14em] text-zinc-600">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.header>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            The situation
          </h2>
          <div className="mt-5 space-y-4">
            {study.context.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            What made it hard
          </h2>
          <div className="mt-6 space-y-4">
            {study.constraints.map((constraint) => (
              <div
                key={constraint.label}
                className="rounded-xl border border-white/10 bg-white/[.03] p-5"
              >
                <p className="text-sm font-medium text-white">
                  {constraint.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {constraint.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            How it works
          </h2>
          <div className="mt-6 space-y-4">
            {study.steps.map(([label, text], i) => (
              <div key={label} className="flex gap-4">
                <span className="mt-0.5 shrink-0 font-display text-sm text-orange-300/70">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 space-y-12">
          {study.build.map((block) => (
            <Reveal key={block.heading}>
              <h2 className="font-display text-2xl text-white sm:text-3xl">
                {block.heading}
              </h2>
              <div className="mt-5 space-y-4">
                {block.paragraphs.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-zinc-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            Where this stands
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            Figures below are labelled by what they actually are. Nothing here is
            presented as a delivered result unless it is one.
          </p>
          <div className="mt-6 space-y-3">
            {study.measures.map((measure) => (
              <div
                key={measure.label}
                className={`rounded-xl border p-5 ${measureStyles[measure.kind]}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="text-sm text-zinc-300">{measure.label}</p>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[.14em] text-zinc-500">
                      {measureLabels[measure.kind]}
                    </span>
                    <span className="font-display text-2xl text-white">
                      {measure.value}
                    </span>
                  </div>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">
                  {measure.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-sm text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        {study.relatedPost && (
          <Reveal className="mt-16">
            <Link
              href={`/blog/${study.relatedPost.slug}`}
              className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-6 transition hover:border-white/20"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[.14em] text-zinc-600">
                  Related writing
                </p>
                <p className="mt-2 text-base text-white">
                  {study.relatedPost.label}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="shrink-0 text-zinc-500 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        )}

        <Reveal className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-zinc-400">
            Working on something similar? I&apos;d be glad to talk through it.
          </p>
          <a
            href="https://cal.com/usman-vhehv8/30min"
            onClick={openCalModal}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F26D34] px-5 py-3 text-sm font-medium text-neutral-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
          >
            Book a Discovery Call
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </article>
  );
}
