"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { submitContact } from "@/lib/supabase";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);
    const result = await submitContact({ name, email, message });
    if (result.ok) {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-40">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Contact"
            title="Have something worth building?"
            description="Tell me what you're trying to do and where you're stuck. I'll reply within a day."
          />

          <div className="flex flex-col gap-4 text-sm">
            <a
              href="mailto:info@builtbyusman.com"
              className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
            >
              <Mail size={16} className="text-blue-400" />
              <span>info@builtbyusman.com</span>
              <ArrowRight
                size={14}
                className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
            <a
              href="https://github.com/usmanimran-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
            >
              <GithubIcon size={16} />
              <span>github.com/usmanimran-dev</span>
              <ArrowRight
                size={14}
                className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/usman-imran-037aa0302/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <ArrowRight
                size={14}
                className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="glass flex flex-col gap-5 rounded-2xl p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-zinc-500">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-0 border-b border-white/10 bg-transparent py-2 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-zinc-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 border-b border-white/10 bg-transparent py-2 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500"
              placeholder="you@company.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-zinc-500">
              What are you building?
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none border-0 border-b border-white/10 bg-transparent py-2 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500"
              placeholder="A short description of the problem and where you're stuck."
            />
          </div>

          <div className="mt-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-8px_rgba(59,130,246,0.6)] transition-all hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Sent — thank you"
                : "Send message"}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            {status === "error" && errorMsg && (
              <p className="max-w-xs text-right text-xs text-red-400">
                {errorMsg}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
