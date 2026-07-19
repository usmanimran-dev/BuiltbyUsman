"use client";

import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, AudioLines, Bot, BrainCircuit, CalendarCheck,
  ChartNoAxesCombined, Check, ChevronDown, CircleGauge, Database, Globe2,
  Headphones, MessageCircleMore, PhoneCall, PlugZap, Send, Sparkles,
  SquareStack, UserRoundCheck, Workflow,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SectionHeading } from "@/components/ui/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

const builds = [
  ["AI Receptionists", "Answer every call, capture intent, and give customers a helpful first response.", PhoneCall],
  ["AI Voice Agents", "Natural voice conversations that qualify leads and resolve routine requests.", AudioLines],
  ["AI Appointment Booking", "Turn conversations into confirmed appointments without manual follow-up.", CalendarCheck],
  ["WhatsApp Automation", "Keep customers moving with fast, contextual WhatsApp conversations.", MessageCircleMore],
  ["AI Customer Support", "Give customers accurate answers grounded in your business knowledge.", Headphones],
  ["Workflow Automation", "Remove repetitive handoffs across the operations your team runs daily.", Workflow],
  ["CRM Integrations", "Keep customer context, activity, and outcomes in the systems you already use.", PlugZap],
  ["Business Dashboards", "See the conversations, conversions, and bottlenecks that matter most.", ChartNoAxesCombined],
] as const;

const capabilities = [
  ["24/7 Availability", Globe2], ["Voice Conversations", AudioLines], ["Multi-language Support", MessageCircleMore],
  ["Calendar Booking", CalendarCheck], ["Knowledge Base Search", BrainCircuit], ["Lead Qualification", UserRoundCheck],
  ["Call Transfers", PhoneCall], ["SMS & Email Automation", Send], ["Analytics", CircleGauge],
  ["Integrations", PlugZap], ["Human Handoff", Headphones], ["Custom Workflows", Workflow],
] as const;

const industries = ["Dental Practices", "Medical Clinics", "Hotels", "Restaurants", "Automotive", "Real Estate", "Professional Services", "Financial Services"];
const technologies = ["OpenAI", "Claude", "Spring Boot", "Angular", "Node.js", "PostgreSQL", "AWS", "Twilio", "ElevenLabs", "n8n", "Firebase", "Docker", "REST APIs"];
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

const caseStudies = [
  {
    eyebrow: "BYD · current implementation",
    title: "Automotive AI Operations",
    text: "Currently implementing AI systems for BYD workflows. The solution is designed to answer and qualify inbound calls, handle WhatsApp conversations, book test drives, and keep lead context connected across sales operations.",
    tags: ["AI receptionist", "Test-drive booking", "Lead qualification"],
    current: true,
  },
  {
    eyebrow: "Aga Khan · current implementation",
    title: "Healthcare AI Workflows",
    text: "Currently shaping AI workflow capabilities for hospital operations: patient inquiry handling, appointment routing, reminders, multilingual support, and secure handoff paths for clinical and administrative teams.",
    tags: ["Patient inquiries", "Appointment routing", "Human handoff"],
    current: true,
  },
  {
    eyebrow: "Internal product · in development",
    title: "Omni Agent",
    text: "A multi-agent AI platform for businesses featuring AI receptionists, voice agents, workflow automation, analytics, and multi-tenant architecture.",
    tags: ["Multi-agent AI", "Voice", "Automation"],
    internal: true,
  },
];

const faqs = [
  ["Can AI integrate with our CRM?", "Yes. The system can securely read and write customer data, activity, and outcomes in your existing CRM or database through well-defined integrations."],
  ["Can AI answer calls?", "Yes. Voice agents can answer inbound calls, understand requests, qualify callers, and route or transfer conversations when a person is needed."],
  ["Can AI schedule appointments?", "Yes. It can check live availability, collect the required details, create appointments, and send confirmations and reminders."],
  ["How secure is the system?", "Security is designed around least-privilege access, secure integrations, appropriate data handling, and the controls required by your business and industry."],
  ["Can it integrate with existing software?", "Usually, yes. APIs, webhooks, databases, and automation tools make it possible to connect AI workflows to the software your team already relies on."],
  ["How long does implementation take?", "A focused workflow can launch in weeks. Larger integrations are planned in stages so you can get value early while the system grows with your operations."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65, delay, ease }} className={className}>{children}</motion.div>;
}

function GridBackdrop() {
  return <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(24,24,27,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,.08)_1px,transparent_1px)] [background-size:38px_38px]" />;
}

function OrbitalGraphic() {
  return <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[480px]">
    <div className="absolute inset-[8%] rounded-full border border-neutral-300/70" />
    <div className="absolute inset-[22%] rounded-full border border-neutral-300/70" />
    <div className="absolute inset-[37%] rounded-full border border-neutral-300/70" />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[7%]">
      <span className="absolute -top-1 left-1/2 h-3 w-3 rounded-full bg-[#F26D34] shadow-[0_0_24px_7px_rgba(242,109,52,.35)]" />
      <span className="absolute right-[8%] top-[67%] h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_22px_5px_rgba(14,165,233,.3)]" />
    </motion.div>
    <div className="absolute inset-[32%] grid place-items-center rounded-full border border-white/70 bg-white shadow-[0_20px_70px_-28px_rgba(0,0,0,.3)]"><BrainCircuit className="h-11 w-11 text-neutral-900" /></div>
  </div>;
}

export function AIPage() {
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
            <Reveal delay={.28} className="mt-9 flex flex-wrap gap-3"><a href="#ai-contact" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800"><span>Book a Discovery Call</span><ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></a><a href="#case-studies" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-6 py-3.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-900">View AI Case Studies <ArrowDown size={15} /></a></Reveal>
          </div>
          <Reveal delay={.25}><OrbitalGraphic /></Reveal>
        </div>
        <Reveal delay={.36} className="relative mx-auto mt-14 max-w-6xl border-t border-neutral-300/80 pt-6"><p className="text-center text-[11px] font-medium uppercase tracking-[.18em] text-neutral-500">Built to work with your existing systems</p><div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">{connectedSystems.map((system) => <span key={system} className="text-sm font-medium text-neutral-600">{system}</span>)}</div></Reveal>
      </section>

      <section id="what-i-build" className="relative bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="What I build" title="Intelligent operations, designed around your business." description="Every system begins with the customer journey and ends with a workflow your team can depend on." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{builds.map(([title, description, Icon], index) => <Reveal key={title} delay={(index % 4) * .06}><article className="group glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/30 hover:bg-white/[.055]"><div className="mb-8 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-orange-300 transition group-hover:bg-[#F26D34] group-hover:text-white"><Icon size={19} /></div><h3 className="font-display text-2xl text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p></article></Reveal>)}</div></div></section>

      <section id="how-it-works" className="relative overflow-hidden bg-black px-6 py-28 sm:py-40"><div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" /><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="How it works" title="One connected system, not another tool." description="A well-designed AI workflow keeps the right context moving from the first customer signal to the next best action." align="center" /><div className="relative mx-auto max-w-3xl">{workflow.map(([title, text, Icon], index) => <div key={title} className="relative"><Reveal delay={index * .05}><div className="glass relative flex items-center gap-5 rounded-2xl p-5 sm:p-6"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[.06] text-orange-300"><Icon size={21} /></div><div><h3 className="font-display text-2xl text-white">{title}</h3><p className="mt-1 text-sm leading-relaxed text-zinc-400">{text}</p></div><span className="ml-auto hidden text-xs tabular-nums text-zinc-600 sm:block">0{index + 1}</span></div></Reveal>{index < workflow.length - 1 && <div aria-hidden className="flex h-10 justify-center"><div className="w-px bg-gradient-to-b from-orange-400/70 to-white/10" /></div>}</div>)}</div></div></section>

      <section id="capabilities" className="bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="AI capabilities" title="Built to respond, resolve, and move work forward." /><div className="grid divide-x-0 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-3">{capabilities.map(([label, Icon], i) => <Reveal key={label} delay={(i % 3) * .04}><div className="group flex items-center gap-4 px-4 py-6 sm:px-6"><Icon size={19} className="text-zinc-500 transition group-hover:text-orange-300" /><span className="text-sm text-zinc-300">{label}</span></div></Reveal>)}</div></div></section>

      <section id="industries" className="bg-[#F0EFEA] px-6 py-28 text-neutral-900 sm:py-40"><div className="mx-auto max-w-6xl"><div className="mb-16 max-w-2xl"><p className="text-xs uppercase tracking-[.2em] text-neutral-500">Industries</p><h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">AI that fits the way your industry works.</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{industries.map((industry, i) => <motion.a key={industry} href="#ai-contact" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: (i % 4) * .05, ease }} className="group flex min-h-32 flex-col justify-between rounded-2xl border border-neutral-200 bg-white/70 p-5 transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl hover:shadow-neutral-900/10"><SquareStack size={19} className="text-[#F26D34]" /><span className="flex items-center justify-between gap-4 font-display text-2xl">{industry}<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></span></motion.a>)}</div></div></section>

      <section id="technology" className="bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Technology stack" title="Enterprise-grade building blocks." description="The right stack is selected for the workflow, the scale, and the systems it needs to sit alongside." /><div className="flex flex-wrap gap-3">{technologies.map((technology, i) => <Reveal key={technology} delay={i * .025}><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-4 py-2.5 text-sm text-zinc-300 transition hover:border-orange-300/40 hover:bg-orange-300/10"><span className="h-1.5 w-1.5 rounded-full bg-orange-300" />{technology}</span></Reveal>)}</div></div></section>

      <section id="case-studies" className="bg-black px-6 py-28 sm:py-40"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Current implementations & case studies" title="Systems built for the work that cannot wait." description="Current work is described by the capabilities being implemented, not as completed deployment claims." /><div className="mb-8 flex flex-wrap items-center gap-3 border-y border-white/10 py-5"><span className="mr-2 text-[11px] uppercase tracking-[.18em] text-zinc-500">Currently working with</span><span className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 font-display text-lg text-white">BYD</span><span className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 font-display text-lg text-white">Aga Khan</span></div><div className="grid gap-5 lg:grid-cols-3">{caseStudies.map((study, index) => <Reveal key={study.title} delay={index * .08}><article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-7"><div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" /><p className="text-xs uppercase tracking-[.16em] text-orange-300">{study.eyebrow}</p><h3 className="mt-6 font-display text-3xl text-white">{study.title}</h3><p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{study.text}</p>{study.current && <div className="mt-6 rounded-lg border border-sky-300/20 bg-sky-300/10 px-3 py-2 text-xs text-sky-100">Current implementation — capabilities are actively being planned and integrated.</div>}{study.internal && <div className="mt-6 rounded-lg border border-orange-300/20 bg-orange-300/10 px-3 py-2 text-xs text-orange-200">Internal product. In development — not presented as a deployed client project.</div>}<div className="mt-7 flex flex-wrap gap-2">{study.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500">{tag}</span>)}</div></article></Reveal>)}</div></div></section>

      <section id="why-me" className="bg-[#08090c] px-6 py-28 sm:py-40"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[.2em] text-zinc-500">Why work with me</p><h2 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl">The polish of a product team, with engineering underneath.</h2></div><div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">{reasons.map((reason, i) => <Reveal key={reason} delay={i * .04}><div className="flex gap-3 border-b border-white/10 pb-5 text-sm text-zinc-300"><Check size={17} className="shrink-0 text-orange-300" />{reason}</div></Reveal>)}</div></div></section>

      <section id="faq" className="bg-black px-6 py-28 sm:py-40"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[.2em] text-zinc-500">FAQ</p><h2 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl">The practical questions.</h2></div><div className="divide-y divide-white/10 border-y border-white/10">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base text-white"><span>{question}</span><ChevronDown size={18} className="shrink-0 text-zinc-500 transition group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-relaxed text-zinc-400">{answer}</p></details>)}</div></div></section>

      <section id="ai-contact" className="relative overflow-hidden bg-[#F26D34] px-6 py-28 text-neutral-900 sm:py-40"><GridBackdrop /><div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[40px] border-white/20" /><Reveal className="relative mx-auto flex max-w-4xl flex-col items-center text-center"><span className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium">Start a conversation</span><h2 className="mt-7 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">Let&apos;s Build Your AI System</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-800">Whether you need an AI receptionist, intelligent workflow automation, or a custom AI-powered platform, I&apos;d love to discuss your project.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href="mailto:info@builtbyusman.com?subject=AI%20Discovery%20Call" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5">Book a Call <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></a><a href="mailto:info@builtbyusman.com" className="rounded-full border border-neutral-900/20 bg-white/60 px-7 py-3.5 text-sm font-medium transition hover:bg-white">Contact Me</a></div></Reveal></section>
    </main>
    <Footer />
  </>;
}
