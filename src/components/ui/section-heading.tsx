"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 flex flex-col gap-5 ${alignClass}`}
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
        <span className="h-px w-8 bg-zinc-700" />
        {eyebrow}
      </div>
      <h2 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
