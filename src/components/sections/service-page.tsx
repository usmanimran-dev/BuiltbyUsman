"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import type { Service } from "@/lib/services";
import { openCalModal } from "@/lib/cal";

const ease = [0.22, 1, 0.36, 1] as const;

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

export function ServicePageView({ service }: { service: Service }) {
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
          href="/ai#what-i-build"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={14} /> All services
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mt-8"
        >
          <p className="text-xs uppercase tracking-[.18em] text-orange-300">
            Service
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] text-white sm:text-5xl">
            {service.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {service.summary}
          </p>
        </motion.header>

        <Reveal className="mt-12 rounded-2xl border border-white/10 bg-white/[.03] p-7">
          <p className="text-[10px] uppercase tracking-[.14em] text-zinc-600">
            Who this is for
          </p>
          <ul className="mt-4 space-y-2.5">
            {service.whoItIsFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                <Check size={15} className="mt-0.5 shrink-0 text-orange-300/80" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            The problem
          </h2>
          <div className="mt-5 space-y-4">
            {service.problem.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 space-y-12">
          {service.sections.map((block) => (
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
            What you get
          </h2>
          <ul className="mt-6 space-y-2.5">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                <Check size={15} className="mt-0.5 shrink-0 text-orange-300/80" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.03] p-5">
            <Clock size={15} className="mt-0.5 shrink-0 text-zinc-500" />
            <p className="text-sm leading-relaxed text-zinc-400">
              {service.timeline}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            When this is the wrong fit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            Worth saying plainly rather than finding out after a build starts.
          </p>
          <ul className="mt-6 space-y-2.5">
            {service.notRightIf.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-zinc-400"
              >
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {(service.relatedCaseStudy || service.relatedPost) && (
          <Reveal className="mt-16 space-y-3">
            {service.relatedCaseStudy && (
              <Link
                href={`/work/${service.relatedCaseStudy.slug}`}
                className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-6 transition hover:border-white/20"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[.14em] text-zinc-600">
                    Related case study
                  </p>
                  <p className="mt-2 text-base text-white">
                    {service.relatedCaseStudy.label}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-zinc-500 transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}
            {service.relatedPost && (
              <Link
                href={`/blog/${service.relatedPost.slug}`}
                className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-6 transition hover:border-white/20"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[.14em] text-zinc-600">
                    Related writing
                  </p>
                  <p className="mt-2 text-base text-white">
                    {service.relatedPost.label}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-zinc-500 transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}
          </Reveal>
        )}

        <Reveal className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-zinc-400">
            Think this fits what you&apos;re trying to do? Let&apos;s talk it through.
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
