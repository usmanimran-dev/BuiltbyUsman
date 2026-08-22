"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { openCalModal } from "@/lib/cal";

const ease = [0.22, 1, 0.36, 1] as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <article className="relative bg-[#08090c] px-6 pb-28 pt-40 sm:pb-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div aria-hidden className="absolute left-1/2 top-24 h-72 w-2/3 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]" />
      <div className="relative mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={14} /> All posts
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        <div className="mt-12 space-y-10 border-t border-white/10 pt-10">
          {post.content.map((block, i) => (
            <motion.div
              key={block.heading ?? i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease }}
            >
              {block.heading && (
                <h2 className="mb-4 font-display text-2xl text-white sm:text-3xl">
                  {block.heading}
                </h2>
              )}
              <div className="space-y-4">
                {block.paragraphs.map((paragraph, j) => (
                  <p key={j} className="text-base leading-relaxed text-zinc-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-zinc-400">
            Working on something similar? I'd be glad to talk through it.
          </p>
          <a
            href="https://cal.com/usman-vhehv8/30min"
            onClick={openCalModal}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F26D34] px-5 py-3 text-sm font-medium text-neutral-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
          >
            Book a Discovery Call
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
