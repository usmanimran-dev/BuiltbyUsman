"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ImageOff } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

interface Project {
  index: string;
  title: string;
  domain: string;
  problem: string;
  role: string;
  outcome: string;
  stack: string[];
  href?: string;
  image?: string;
}

const projects: Project[] = [
  {
    index: "01",
    title: "Omni Agent",
    domain: "AI voice · multi-tenant call operations",
    problem:
      "Small and mid-sized businesses lose deals every time an inbound call is missed, and outbound follow-up drifts across staff. Running a real 24/7 multilingual call center to close that gap isn't economical for most of them.",
    role:
      "Built the multi-tenant platform that orchestrates Vapi voice agents on behalf of client businesses — each client modeled as a squad of specialized agents (reception, sales, follow-up) with mid-call handoffs, custom tool-calls for lead capture and appointment booking, and full transcripts logged into Supabase under row-level security. Integrated Telnyx for phone number provisioning, Cal.com for booking, and Wasabi for recording storage.",
    outcome:
      "Live client deployments across automotive, healthcare, and creative services — every inbound call answered, every lead captured, every appointment booked without human intervention, in the caller's language.",
    stack: ["Next.js 14", "TypeScript", "Supabase", "Vapi", "Telnyx", "Cal.com"],
    href: "https://www.developersofchicago.com/omni-agent",
    image: "https://fwfiauyxxewmjyihkvql.supabase.co/storage/v1/object/public/project%20images/omnireal.png",
  },
  {
    index: "02",
    title: "Smart Pump ERP",
    domain: "Fuel retail",
    problem:
      "Fuel station operators were losing revenue to unreconciled transactions and had no unified view of inventory, dispensers, and shift analytics.",
    role:
      "Designed the end-to-end platform: role-based auth, transaction pipelines feeding real-time analytics, and inventory / dispenser monitoring surfaced through a single operator dashboard.",
    outcome:
      "A single ERP the station owner opens in the morning and closes at end of shift — every rupee accounted for, every anomaly flagged before it becomes a loss.",
    stack: ["Angular", "Supabase", "PostgreSQL", "Node.js"],
    href: "https://smart-pump-2eyt.vercel.app/login",
    image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-29%20220645.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMjkgMjIwNjQ1LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODMzMjg1MDQsImV4cCI6MTgxNDg2NDUwNH0.zujw8Q118ZiWftI1PPJS5qBGQDaN9gdJom4pDjncC6w",
  },
  {
    index: "03",
    title: "NGO Assist",
    domain: "Aid distribution",
    problem:
      "Aid organizations had beneficiary lists in spreadsheets, verification happening over WhatsApp, and no audit trail once assistance was redeemed at a vendor — making fraud impossible to detect and reporting impossible to trust.",
    role:
      "Built the full stack: Flutter web and mobile clients for field staff and vendors, a Node.js + Prisma backend, beneficiary registration and verification workflows, vendor-side redemption, and role-based access control across the whole pipeline.",
    outcome:
      "Every aid rupee is now traceable from beneficiary registration to vendor redemption, with an audit log the donor and auditor can both defend.",
    stack: ["Flutter", "Node.js", "Prisma", "PostgreSQL"],
    href: "https://ngo.virtuohr.com",
    image: "https://fwfiauyxxewmjyihkvql.supabase.co/storage/v1/object/public/project%20images/NGO%20PROJECT%20IMAGE.png",
  },
  {
    index: "04",
    title: "I See You Now",
    domain: "Storytelling platform",
    problem:
      "A studio needed a home for long-form, human-authored stories at a moment when AI-generated content is flooding every publishing surface — the platform itself had to signal authenticity, not just carry it.",
    role:
      "Designed and built the platform end-to-end: editorial surfaces, story publishing pipeline, and an interface deliberately tuned to feel human and unhurried rather than algorithmic.",
    outcome:
      "A production site now live at iseeyounow.org, giving the studio a credible home to publish and protect authentic voices.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://iseeyounow.org/",
    image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-03-12%20113355.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDMtMTIgMTEzMzU1LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODMzMjg2NzMsImV4cCI6MTgxNDg2NDY3M30.jbiF9XnYvhNMPEij8psinu7-upwu_7UYK4khaWmGsX0",
  },
  {
    index: "05",
    title: "Yelo Search",
    domain: "Market discovery · Local intelligence",
    problem:
      "Businesses needed fast, reliable access to local market data with low-latency search across millions of indexed records without expensive infrastructure overhead.",
    role:
      "Built a high-performance indexing engine optimized for rapid market intelligence queries, implementing efficient caching layers and query optimization to ensure sub-second response times across diverse geographic markets.",
    outcome:
      "A production search platform powering real-time market discovery for businesses across Pakistan, enabling competitive intelligence at scale.",
    stack: ["React", "Next.js", "Vercel", "SEO Optimization"],
    href: "https://pakistan-finds-red.vercel.app/",
    image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035500.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NTAwLnBuZyIsImlhdCI6MTc3MTg3OTQ1MCwiZXhwIjoxODAzNDE1NDUwfQ.owfuUOWWmbTdUR1UeW1ZsnxBcjkmYen4hg_HHAZ5XOo",
  },
  {
    index: "06",
    title: "Velora",
    domain: "Dating discovery · Real-time matching",
    problem:
      "Existing dating platforms prioritized engagement metrics over genuine connection, and lacked strong privacy safeguards for sensitive user communication.",
    role:
      "Designed and built a modern dating platform with real-time matching algorithms, encrypted communication channels, and profile verification workflows that prioritize user safety and authentic connections.",
    outcome:
      "A secure dating app enabling thousands of users to discover compatible matches with confidence, featuring end-to-end encrypted messaging and robust verification systems.",
    stack: ["Angular", "Firebase", "TypeScript", "Real-time Database"],
    href: "https://datingapp-arxi.vercel.app/signup",
    image: "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035558.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NTU4LnBuZyIsImlhdCI6MTc3MTg3OTQyOSwiZXhwIjoxODAzNDE1NDI5fQ.4kGdL9utvVG8wS-08P1m3cx6SgXtcoMPmeJABUBM8bY",
  },
  {
    index: "07",
    title: "Bismillah Caters",
    domain: "Catering services · Event management",
    problem:
      "Premium catering businesses struggled to showcase diverse menus, handle complex event bookings, and manage inventory across multiple events without fragmented systems.",
    role:
      "Designed and built the full catering platform: online menu showcases, real-time event booking system, inventory management, and order fulfillment tracking for premium halal catering services.",
    outcome:
      "A production catering platform now serving weddings and corporate events, handling premium food orders with transparent pricing, customizable menus, and reliable delivery tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Payment Integration"],
    href: "https://www.bismillahcaters.com/",
    image: "https://fwfiauyxxewmjyihkvql.supabase.co/storage/v1/object/public/project%20images/bismillahimage.png",
  },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center bg-white/[0.03] text-zinc-600"
      >
        <ImageOff size={28} aria-hidden />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      loading="lazy"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setErrored(true)}
    />
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="relative px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title={showAll ? "All seven projects." : "Featured work."}
          description={
            showAll
              ? "A complete snapshot of what I've built: from live AI systems at dealerships to market discovery engines and dating platforms."
              : "Four systems that represent depth, impact, and production complexity. Scroll to see more."
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          {displayedProjects.map((project, i) => (
            <motion.article
              key={project.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all hover:border-blue-500/30 hover:bg-white/[0.04]"
            >
              <a
                href={project.href}
                target={project.href ? "_blank" : undefined}
                rel={project.href ? "noopener noreferrer" : undefined}
                className="flex flex-col"
              >
                {/* Image Section - Full width at top */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent">
                    <ProjectImage
                      src={project.image}
                      alt={`${project.title} interface — ${project.domain}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                {/* Content Section */}
                <div className="flex flex-col gap-5 p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="font-mono text-xs text-zinc-500">{project.index}</span>
                      <h3 className="font-display text-3xl leading-tight text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-blue-400/80">
                        {project.domain}
                      </span>
                    </div>
                    {project.href && (
                      <ArrowUpRight
                        size={20}
                        aria-hidden
                        className="mt-1 shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                      />
                    )}
                  </div>

                  <dl className="flex flex-col gap-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                    <div>
                      <dt className="mb-1.5 text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
                        Problem
                      </dt>
                      <dd className="text-zinc-300 text-sm">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="mb-1.5 text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
                        Role
                      </dt>
                      <dd className="text-zinc-300 text-sm">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="mb-1.5 text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
                        Outcome
                      </dt>
                      <dd className="text-zinc-300 text-sm">{project.outcome}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Show All Button */}
        {!showAll && projects.length > 4 && (
          <motion.button
            onClick={() => setShowAll(true)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 mx-auto flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-300 transition-all hover:border-blue-500/60 hover:bg-blue-500/20"
          >
            View all 7 projects
            <ChevronDown size={16} />
          </motion.button>
        )}
      </div>
    </section>
  );
}
