"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

const ease = [0.22, 1, 0.36, 1] as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogListing({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="relative bg-[#08090c] px-6 pb-28 pt-40 sm:pb-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div aria-hidden className="absolute left-1/2 top-24 h-72 w-2/3 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[.2em] text-zinc-500">Blog</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl">
            Notes on AI, automation, and what actually ships.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-400">
            Build logs, case-study deep-dives, and thinking behind the systems on this site — written as work happens, not backfilled after the fact.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: index * 0.06, ease }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-10 first:pt-0"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="h-1 w-1 rounded-full bg-zinc-700" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-3xl text-white transition-colors group-hover:text-orange-300 sm:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-orange-300 opacity-0 transition group-hover:gap-2.5 group-hover:opacity-100">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
