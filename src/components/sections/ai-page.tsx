"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, AudioLines, Bot, BrainCircuit, CalendarCheck,
  ChartNoAxesCombined, Check, ChevronDown, CircleGauge, Database, Globe2,
  Headphones, Infinity as InfinityIcon, MessageCircleMore, Pause, PhoneCall,
  PlugZap, Send, Sparkles, UserRoundCheck, Workflow, X,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { openCalModal } from "@/lib/cal";
import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";

// /ai stays AI-only; enterprise work is surfaced from the homepage instead.
const aiCaseStudies = caseStudies.filter((study) => study.domain === "ai");

const ease = [0.22, 1, 0.36, 1] as const;



const capabilities = [
  ["24/7 Availability", Globe2], ["Voice Conversations", AudioLines], ["Multi-language Support", MessageCircleMore],
  ["Calendar Booking", CalendarCheck], ["Knowledge Base Search", BrainCircuit], ["Lead Qualification", UserRoundCheck],
  ["Call Transfers", PhoneCall], ["SMS & Email Automation", Send], ["Analytics", CircleGauge],
  ["Integrations", PlugZap], ["Human Handoff", Headphones], ["Custom Workflows", Workflow],
] as const;

/**
 * Structural differences only. Earlier revisions carried invented figures
 * (cost per task, consistency percentages) that no source backed up and that
 * contradicted the FAQ on this same page. Every number here comes from copy
 * already published on the site.
 */
const fteComparison = [
  ["Availability", "~40 hrs/week", "Around the clock"],
  ["Time to productive", "3–6 months to hire and onboard", "2–4 weeks to build and hand over"],
  ["Consistency", "Varies with workload and fatigue", "Call 500 handled like call 1"],
  ["Scaling", "Hire and train again", "Change the configuration"],
  ["Judgement", "Broad — adapts to the unfamiliar", "Narrow — one scoped workflow"],
  ["Cost", "Salary, benefits, overhead", "Fixed monthly rate, scoped per build"],
] as const;

const industries = [
  "Finance & Accounting", "HR & Recruitment", "Sales & E-commerce", "Real Estate",
  "Healthcare & Clinics", "Manufacturing & Supply Chain", "Education & Training",
  "Retail & Distribution", "Logistics & Delivery", "Travel & Hospitality",
  "Startups & Tech Companies", "Marketing Agencies",
] as const;
type ModelEntry = {
  name: string;
  url: string;
  icon?: React.ComponentType<{ size?: number }>;
};

const models: ModelEntry[] = [
  { name: "OpenAI", url: "https://openai.com" },
  { name: "Anthropic", url: "https://www.anthropic.com" },
  { name: "Gemini", url: "https://gemini.google.com" },
  { name: "Meta (Llama)", icon: InfinityIcon, url: "https://llama.meta.com" },
  { name: "Mistral", url: "https://mistral.ai" },
  { name: "DeepSeek", url: "https://www.deepseek.com" },
  { name: "Groq", url: "https://groq.com" },
  { name: "Cohere", url: "https://cohere.com" },
  { name: "ElevenLabs", icon: Pause, url: "https://elevenlabs.io" },
  { name: "HuggingFace", url: "https://huggingface.co" },
  { name: "Perplexity", url: "https://www.perplexity.ai" },
  { name: "xAI (Grok)", icon: X, url: "https://x.ai" },
  { name: "Qwen", url: "https://qwenlm.github.io" },
  { name: "Together AI", url: "https://www.together.ai" },
  { name: "Fireworks AI", url: "https://fireworks.ai" },
  { name: "Ollama", url: "https://ollama.com" },
  { name: "Azure OpenAI", url: "https://azure.microsoft.com/en-us/products/ai-services/openai-service" },
  { name: "Stability AI", url: "https://stability.ai" },
  { name: "Amazon Bedrock", url: "https://aws.amazon.com/bedrock/" },
  { name: "Google Vertex AI", url: "https://cloud.google.com/vertex-ai" },
  { name: "Replicate", url: "https://replicate.com" },
  { name: "LM Studio", url: "https://lmstudio.ai" },
  { name: "Cerebras", url: "https://www.cerebras.ai" },
  { name: "NovitaAI", url: "https://novita.ai" },
];

const stats = [
  ["24/7", "Runs outside business hours, not only during them", Globe2],
  ["2–4 weeks", "Typical build and handover for a Digital FTE", CalendarCheck],
  ["One workflow", "Scoped like a role, not a general assistant", UserRoundCheck],
  ["Human handoff", "Built in for anything ambiguous or sensitive", Headphones],
] as const;

const taglines = [
  "The Work Doesn't Stop When You Do",
  "Grow Output, Not Headcount",
  "Built, Not Just Consulted",
  "Same Result, Every Single Time",
] as const;
const reasons = ["Enterprise software experience", "Production-ready architecture", "Modern UI/UX", "Scalable backend systems", "AI integration expertise", "Long-term support", "Responsive design", "Performance focus"];
const connectedSystems = ["CRM", "POS", "DMS", "HIS / EMR", "ERP", "Calendar", "WhatsApp", "Call Systems"];

const workflow = [
  ["Customer", "A call, message, or form submission starts the conversation.", UserRoundCheck],
  ["AI Agent", "Understands intent and responds in your brand voice.", Bot],
  ["Business Logic", "Applies your rules, routing, and decision-making.", BrainCircuit],
  ["CRM / Database", "Reads and writes the context your team needs.", Database],
  ["Calendar", "Finds availability and confirms the right slot.", CalendarCheck],
  ["Notifications", "Keeps customers and teams informed at the right moment.", Send],
  ["Analytics Dashboard", "Turns every interaction into a clearer operating picture.", ChartNoAxesCombined],
] as const;

const faqs = [
  ["What is a Digital FTE?", "A Digital FTE is an AI-driven role I build for your business — it works around the clock on a defined set of tasks, the same way a specialist employee would, without sick days, ramp-up time, or turnover."],
  ["How long does it take to deploy?", "Most chatbots and workflow automations go live in 1–2 weeks. A full Digital FTE build usually takes 2–4 weeks depending on scope — I map the workflow, build it, test it, and hand it over."],
  ["Do I need any technical knowledge to work with you?", "None. You describe the problem you're trying to solve and I handle the design, build, and integration. You review the working system, not the code."],
  ["How much does it cost?", "It depends on what's being built. Workflow automations and chatbots are scoped per project; Digital FTEs are typically a fixed monthly rate. I'll give you a specific number after a quick discovery call — no vague ranges."],
  ["Can AI integrate with our CRM?", "Yes. The system can securely read and write customer data, activity, and outcomes in your existing CRM or database through well-defined integrations."],
  ["Can AI answer calls?", "Yes. Voice agents can answer inbound calls, understand requests, qualify callers, and route or transfer conversations when a person is needed."],
  ["Can AI schedule appointments?", "Yes. It can check live availability, collect the required details, create appointments, and send confirmations and reminders."],
  ["How secure is the system?", "Security is designed around least-privilege access, secure integrations, appropriate data handling, and the controls required by your business and industry."],
  ["Can it integrate with existing software?", "Usually, yes. APIs, webhooks, databases, and automation tools make it possible to connect AI workflows to the software your team already relies on."],
  ["What happens after the system is deployed?", "You get a fully working system plus documentation. Ongoing support and iteration are available if you want the system to keep evolving as your business changes."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65, delay, ease }} className={className}>{children}</motion.div>;
}

function GridBackdrop() {
  return <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(24,24,27,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,.08)_1px,transparent_1px)] [background-size:38px_38px]" />;
}

function ModelCard({ name, icon: Icon, url, index }: { name: string; icon?: React.ComponentType<{ size?: number }>; url?: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: .88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: (index % 6) * .05 }}
      whileHover={{ y: -4, borderColor: "rgba(253,186,116,.35)", backgroundColor: "rgba(255,255,255,.06)" }}
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[.03] px-4 py-8 text-center"
    >
      <motion.span
        animate={{ scale: [1, 1.05, 1], opacity: [.85, 1, .85] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: (index % 6) * .25 }}
        whileHover={{ scale: 1.2, rotate: 8, boxShadow: "0 0 0 6px rgba(242,109,52,.12)" }}
        className="grid h-12 w-12 place-items-center rounded-full bg-white/[.06] text-white"
      >
        {Icon ? <Icon size={22} /> : <span className="font-display text-lg">{name[0]}</span>}
      </motion.span>
      <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">{name}</span>
      {url && <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-600 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:text-orange-300">Visit <ArrowRight size={10} className="-rotate-45" /></a>}
    </motion.div>
  );
}

function TaglineCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % taglines.length), 3800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
      <div className="relative h-24 w-full sm:h-16">
        <AnimatePresence mode="wait">
          <motion.h3
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: .5, ease }}
            className="absolute inset-0 flex items-center justify-center font-display text-3xl leading-tight text-white sm:text-5xl"
          >
            {taglines[index]}
          </motion.h3>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs tabular-nums text-zinc-500">{index + 1} / {taglines.length}</span>
        <button onClick={() => setIndex((i) => (i + 1) % taglines.length)} className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-orange-300/40 hover:text-orange-300">Next</button>
      </div>
    </div>
  );
}

function IndustriesRow({ items, reverse, duration }: { items: readonly string[]; reverse?: boolean; duration: number }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((industry, i) => (
          <span key={`${industry}-${i}`} className="flex items-center whitespace-nowrap rounded-full border border-neutral-200 bg-white/70 px-5 py-2.5 font-display text-lg text-neutral-900">
            {industry}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function FTEComparisonCard() {
  return <div className="relative mx-auto w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,.25)] sm:p-8">
    <h3 className="font-display text-2xl text-neutral-900">Human vs Digital FTE</h3>
    <div className="mt-6 grid grid-cols-[1.15fr_.85fr_.85fr] gap-x-2 gap-y-0 text-sm">
      <span className="pb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-neutral-400">Metric</span>
      <span className="pb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-neutral-400">Human</span>
      <span className="pb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#F26D34]">Digital FTE</span>
      {fteComparison.map(([metric, human, digital]) => <Fragment key={metric}>
        <span className="border-t border-neutral-100 py-3 text-neutral-800">{metric}</span>
        <span className="border-t border-neutral-100 py-3 text-neutral-400">{human}</span>
        <span className="border-t border-neutral-100 py-3 font-semibold text-[#F26D34]">{digital}</span>
      </Fragment>)}
    </div>
  </div>;
}

export function AIPage() {
  const [showAllModels, setShowAllModels] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const visibleModels = showAllModels ? models : models.slice(0, 12);
  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 6);

  return <>
    <Navbar />
    <main id="main-content" className="relative z-10 overflow-hidden">
      <section id="top" className="relative overflow-hidden bg-[#F0EFEA] px-6 pb-24 pt-32 text-neutral-900 sm:pb-32">
        <GridBackdrop />
        <div aria-hidden className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-orange-300/25 blur-[100px]" />
        <div aria-hidden className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-sky-300/25 blur-[100px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.06fr_.94fr]">
          <div>
            <Reveal><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/60 px-3 py-1.5 text-xs font-medium text-neutral-700"><Sparkles size={13} className="text-[#F26D34]" /> AI systems for modern operations</div></Reveal>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08, ease }} className="max-w-3xl font-display text-5xl leading-[1.01] tracking-tight sm:text-6xl lg:text-7xl">Build AI Systems That Work <em className="text-[#F26D34]">24/7</em></motion.h1>
            <Reveal delay={.18}><p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600">I design and build AI-powered systems that automate customer interactions, streamline operations, and integrate seamlessly with the tools your business already runs on — including CRM, POS, DMS, hospital information, ERP, calendar, and call systems.</p></Reveal>
            <Reveal delay={.28} className="mt-9 flex flex-wrap gap-3"><a href="https://cal.com/usman-vhehv8/30min" onClick={openCalModal} className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800"><span>Book a Discovery Call</span><ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></a><a href="#case-studies" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-6 py-3.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-900">View AI Case Studies <ArrowDown size={15} /></a></Reveal>
          </div>
          <Reveal delay={.25}><FTEComparisonCard /></Reveal>
        </div>
        <Reveal delay={.36} className="relative mx-auto mt-14 max-w-6xl border-t border-neutral-300/80 pt-6"><p className="text-center text-[11px] font-medium uppercase tracking-[.18em] text-neutral-500">Built to work with your existing systems</p><div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">{connectedSystems.map((system) => <span key={system} className="text-sm font-medium text-neutral-600">{system}</span>)}</div></Reveal>
      </section>

      <section id="what-i-build" className="relative bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Services" title="Built to scale your business." /><div className="divide-y divide-white/10 border-y border-white/10">{services.map((service, index) => <Reveal key={service.slug} delay={index * .06}><Link href={`/ai/${service.slug}`} className="group grid items-center gap-3 py-8 sm:grid-cols-[3rem_1fr_auto] sm:gap-8"><span className="font-display text-2xl text-zinc-600">0{index + 1}</span><div><h3 className="font-display text-2xl text-white transition group-hover:text-orange-300 sm:text-3xl">{service.title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">{service.listDescription}</p></div><span className="inline-flex items-center gap-2 text-sm font-medium text-orange-300 transition group-hover:gap-3">Learn More <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span></Link></Reveal>)}</div></div></section>

      <section id="case-studies" className="bg-black px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Current implementations & case studies" title="Systems built for the work that cannot wait." description="Current work is described by the capabilities being implemented, not as completed deployment claims." /><div className="mb-8 flex flex-wrap items-center gap-3 border-y border-white/10 py-5"><span className="mr-2 text-[11px] uppercase tracking-[.18em] text-zinc-500">Currently working with</span><span className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 font-display text-lg text-white">BYD</span><span className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 font-display text-lg text-white">Aga Khan</span></div><div className="grid gap-5 lg:grid-cols-3">{aiCaseStudies.map((study, index) => <Reveal key={study.title} delay={index * .08}><Link href={`/work/${study.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-7 transition hover:border-white/25"><div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" /><p className="text-xs uppercase tracking-[.16em] text-orange-300">{study.eyebrow}</p><h3 className="mt-6 font-display text-3xl text-white">{study.title}</h3>

<p className="mt-5 text-[10px] uppercase tracking-[.14em] text-zinc-600">The challenge</p><p className="mt-2 text-sm leading-relaxed text-zinc-400">{study.challenge}</p>

<p className="mt-6 text-[10px] uppercase tracking-[.14em] text-zinc-600">The system</p><div className="mt-3 space-y-3">{study.steps.map(([label, text], i) => <div key={label} className="flex gap-3"><span className="mt-0.5 shrink-0 font-display text-sm text-orange-300/70">0{i + 1}</span><div><p className="text-sm font-medium text-white">{label}</p><p className="text-xs leading-relaxed text-zinc-500">{text}</p></div></div>)}</div>

<div className="mt-6 rounded-lg border border-orange-300/20 bg-orange-300/10 px-3 py-2 text-xs text-orange-200">{study.target}</div>

<div className="mt-6 flex flex-1 flex-wrap content-start gap-2">{study.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500">{tag}</span>)}</div>

<span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-300 transition group-hover:gap-3">Read the case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></Link></Reveal>)}</div></div></section>

      <section id="about-ai" className="bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><Reveal><p className="text-xs uppercase tracking-[.2em] text-zinc-500">About</p><h2 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl">I Build. I Don&apos;t Just Consult.</h2></Reveal><Reveal delay={.12} className="space-y-5 text-base leading-relaxed text-zinc-400"><p>I started building production AI and automation systems as the tooling matured — not as a side experiment, but as the core of how I ship software for banking, logistics, and now AI-driven operations.</p><p>Every engagement ends the same way: a deployed, working system, not a slide deck. I design the workflow, build the integration, and hand over something your team can run on day one.</p><a href="#ai-contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:bg-zinc-200">Get In Touch <ArrowRight size={15} /></a></Reveal></div></section>

      <section id="stats" className="border-y border-white/10 bg-black px-6 py-16"><div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([value, label, Icon], i) => <Reveal key={label} delay={i * .06} className="flex flex-col items-start gap-3"><Icon size={20} className="text-orange-300" /><span className="font-display text-4xl text-white">{value}</span><span className="text-sm text-zinc-400">{label}</span></Reveal>)}</div></section>

      <section id="tagline" className="bg-black px-6 py-24 sm:py-32"><TaglineCarousel /></section>

      <section id="how-it-works" className="relative overflow-hidden bg-black px-6 py-28 sm:py-40"><div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" /><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="How it works" title="One connected system, not another tool." description="A well-designed AI workflow keeps the right context moving from the first customer signal to the next best action." align="center" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{workflow.map(([title, text, Icon], index) => <Reveal key={title} delay={(index % 4) * .06}><article className="group glass relative h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/30 hover:bg-white/[.055]"><span aria-hidden className="absolute right-6 top-6 font-display text-3xl text-white/10">0{index + 1}</span><motion.div whileHover={{ scale: 1.12, rotate: 6 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="mb-8 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-orange-300 transition-colors duration-300 group-hover:bg-[#F26D34] group-hover:text-white"><Icon size={19} /></motion.div><h3 className="font-display text-2xl text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-400">{text}</p></article></Reveal>)}</div></div></section>

      <section id="capabilities" className="bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="AI capabilities" title="Built to respond, resolve, and move work forward." /><div className="grid divide-x-0 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-3">{capabilities.map(([label, Icon], i) => <Reveal key={label} delay={(i % 3) * .04}><div className="group flex items-center gap-4 px-4 py-6 sm:px-6"><motion.span whileHover={{ scale: 1.2, rotate: -6 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="text-zinc-500 transition-colors duration-300 group-hover:text-orange-300"><Icon size={19} /></motion.span><span className="text-sm text-zinc-300">{label}</span></div></Reveal>)}</div></div></section>

      <section id="industries" className="overflow-hidden bg-[#F0EFEA] py-28 text-neutral-900 sm:py-40"><div className="mx-auto max-w-6xl px-6"><div className="mb-16 max-w-2xl"><p className="text-xs uppercase tracking-[.2em] text-neutral-500">Who we serve</p><h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">Industries powered by automation.</h2></div></div><div className="space-y-4"><IndustriesRow items={industries.slice(0, 6)} duration={32} /><IndustriesRow items={industries.slice(6)} reverse duration={36} /></div><div className="mx-auto mt-14 max-w-6xl px-6 text-center"><a href="#ai-contact" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-900">Don&apos;t see your industry? I build custom. <ArrowRight size={15} /></a></div></section>

      <section id="technology" className="bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Technology stack" title="Model-agnostic by design." description="We build your AI systems on whichever model fits the job — not just the most popular one. Best model for the task, every time." align="center" /><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{visibleModels.map(({ name, icon, url }, i) => <ModelCard key={name} name={name} icon={icon} url={url} index={i} />)}</div><div className="mt-10 flex justify-center"><button onClick={() => setShowAllModels((v) => !v)} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-orange-300/40 hover:text-orange-300">{showAllModels ? "See Less" : "See More"} <ChevronDown size={15} className={`transition-transform ${showAllModels ? "rotate-180" : ""}`} /></button></div></div></section>

      <section id="why-me" className="bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[.2em] text-zinc-500">Why work with me</p><h2 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl">The polish of a product team, with engineering underneath.</h2></div><div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">{reasons.map((reason, i) => <Reveal key={reason} delay={i * .04}><div className="flex gap-3 border-b border-white/10 pb-5 text-sm text-zinc-300"><Check size={17} className="shrink-0 text-orange-300" />{reason}</div></Reveal>)}</div></div></section>

      <section id="faq" className="bg-black px-6 py-28 sm:py-40"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[.2em] text-zinc-500">FAQ</p><h2 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl">The practical questions.</h2></div><div><div className="divide-y divide-white/10 border-y border-white/10">{visibleFaqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base text-white"><span>{question}</span><ChevronDown size={18} className="shrink-0 text-zinc-500 transition group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-relaxed text-zinc-400">{answer}</p></details>)}</div>{faqs.length > 6 && <button onClick={() => setShowAllFaqs((v) => !v)} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-orange-300 transition hover:gap-3">{showAllFaqs ? "See Less" : "See More"} <ChevronDown size={15} className={`transition-transform ${showAllFaqs ? "rotate-180" : ""}`} /></button>}</div></div></section>

      <section id="ai-contact" className="relative overflow-hidden bg-[#F26D34] px-6 py-28 text-neutral-900 sm:py-40"><GridBackdrop /><div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[40px] border-white/20" /><Reveal className="relative mx-auto flex max-w-4xl flex-col items-center text-center"><span className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium">Start a conversation</span><h2 className="mt-7 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">Let&apos;s Build Your AI System</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-800">Whether you need an AI receptionist, intelligent workflow automation, or a custom AI-powered platform, I&apos;d love to discuss your project.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href="https://cal.com/usman-vhehv8/30min" onClick={openCalModal} className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5">Book a Call <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></a><a href="mailto:usman@builtbyusman.com" className="rounded-full border border-neutral-900/20 bg-white/60 px-7 py-3.5 text-sm font-medium transition hover:bg-white">Contact Me</a></div></Reveal></section>
    </main>
    <Footer />
  </>;
}
