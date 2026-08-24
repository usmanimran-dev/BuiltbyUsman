"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, CalendarCheck, Check, ChevronRight, CircleCheckBig, Clock3,
  Database, PhoneCall, Play, Send, Sparkles, X,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const demos = {
  Healthcare: {
    description: "A patient calls after hours to find the right department and schedule a visit.",
    transcript: ["Thanks for calling. How can I help today?", "I need to book an appointment with a specialist.", "I can help with that. Let me check the next available time."],
    highlights: ["Patient inquiry routing", "Appointment scheduling", "Secure human handoff"],
  },
  Automotive: {
    description: "An inbound customer inquiry becomes a qualified lead and confirmed test drive.",
    transcript: ["Thanks for calling. Are you interested in a test drive?", "Yes, I would like to see the new model this weekend.", "Great — I have reserved a time and shared the details."],
    highlights: ["Test-drive booking", "Lead qualification", "CRM lead creation"],
  },
  Banking: {
    description: "A customer is guided through a service request with the appropriate controls and escalation path.",
    transcript: ["Welcome. How may I assist with your account today?", "I need help with a card-related request.", "I’ll securely route you to the right service team."],
    highlights: ["Intent classification", "Service routing", "Audit-ready workflows"],
  },
  Hospitality: {
    description: "A guest inquiry is answered instantly, with availability and preferences captured before the handoff.",
    transcript: ["Welcome. Are you looking to make a reservation?", "Yes, for two people tomorrow evening.", "I’ve found availability and sent a confirmation."],
    highlights: ["Reservation handling", "Availability checks", "WhatsApp confirmation"],
  },
} as const;

type DemoName = keyof typeof demos;

const timeline = [
  ["Incoming call", PhoneCall], ["AI greeting", Sparkles], ["Lead qualification", CircleCheckBig],
  ["Appointment scheduled", CalendarCheck], ["CRM updated", Database], ["SMS sent", Send], ["Dashboard updated", Clock3],
] as const;

const stats = ["24/7 Availability", "<2 sec Response Time", "CRM Integration", "Voice + Chat Support", "Multi-language", "Enterprise Ready"];

function videoEmbedUrl(url?: string) {
  if (!url) return null;
  if (url.includes("loom.com/share/")) return url.replace("loom.com/share/", "loom.com/embed/");
  if (url.includes("youtube.com/watch?v=")) return url.replace("watch?v=", "embed/");
  if (url.includes("youtu.be/")) return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]?.split("?")[0]}`;
  return url;
}

function FloatingBadge({ children, className }: { children: React.ReactNode; className: string }) {
  return <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} className={`absolute hidden items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/90 px-3 py-2 text-xs text-zinc-200 shadow-2xl backdrop-blur-xl lg:flex ${className}`}>{children}</motion.div>;
}

export function AIProductDemo() {
  const [active, setActive] = useState<DemoName>("Automotive");
  const [modalOpen, setModalOpen] = useState(false);
  const [timelineStep, setTimelineStep] = useState(0);
  const demo = demos[active];
  // Add private YouTube or Loom URLs here when recordings are ready. They load only after a user opens the modal.
  const videoUrl: string | undefined = undefined;
  const embedUrl = videoEmbedUrl(videoUrl);

  useEffect(() => {
    const interval = window.setInterval(() => setTimelineStep((step) => (step + 1) % timeline.length), 1350);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setModalOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  return <section id="product-demo" className="relative overflow-hidden bg-[#08090c] px-6 py-28 sm:py-40">
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:42px_42px]" />
    <div aria-hidden className="absolute left-1/2 top-1/3 h-96 w-2/3 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]" />
    <div className="relative mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .65, ease }} className="mb-16 max-w-2xl">
        <p className="text-xs uppercase tracking-[.2em] text-zinc-500">Interactive product demo</p>
        <h2 className="mt-5 font-display text-5xl leading-[1.05] text-white sm:text-6xl">See AI In Action</h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-400">Watch how our AI systems answer calls, qualify leads, automate workflows, and integrate with your existing business software in real time.</p>
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-[.68fr_1.32fr]">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .7, ease }}>
          <h3 className="font-display text-4xl leading-[1.08] text-white sm:text-5xl">Watch AI Handle Real Business Operations</h3>
          <p className="mt-6 leading-relaxed text-zinc-400">See how our AI systems answer customer calls, qualify leads, schedule appointments, update CRMs, automate workflows, and integrate with existing enterprise software—all in real time.</p>
          <ul className="mt-8 space-y-3">{["Answers calls 24/7", "Books appointments automatically", "Qualifies new leads", "Updates CRM instantly", "Sends SMS & WhatsApp", "Integrates with your software"].map(item => <li key={item} className="flex items-center gap-3 text-sm text-zinc-300"><Check size={16} className="text-orange-300" />{item}</li>)}</ul>
          <div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-2 rounded-full bg-[#F26D34] px-5 py-3 text-sm font-medium text-neutral-950 transition hover:-translate-y-0.5 hover:bg-orange-300"><Play size={15} fill="currentColor" /> Watch Full Demo <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" /></button><a href="#ai-contact" className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/[.04]">Book Discovery Call</a></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .7, delay: .08, ease }} className="relative">
          <FloatingBadge className="-left-9 top-[13%]"><PhoneCall size={13} className="text-sky-300" /> Incoming Call</FloatingBadge><FloatingBadge className="-right-8 top-[9%]"><Sparkles size={13} className="text-orange-300" /> AI Answered</FloatingBadge><FloatingBadge className="-left-12 bottom-[21%]"><CalendarCheck size={13} className="text-emerald-300" /> Appointment Booked</FloatingBadge><FloatingBadge className="-right-10 bottom-[26%]"><Database size={13} className="text-violet-300" /> CRM Updated</FloatingBadge>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111216] p-2 shadow-[0_36px_100px_-32px_rgba(242,109,52,.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(242,109,52,.15),transparent_32%),radial-gradient(circle_at_0%_100%,rgba(56,189,248,.1),transparent_35%)]" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0d10]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3"><span className="h-2 w-2 rounded-full bg-red-400/80" /><span className="h-2 w-2 rounded-full bg-amber-300/80" /><span className="h-2 w-2 rounded-full bg-emerald-400/80" /><div className="mx-auto rounded-md bg-white/[.05] px-12 py-1 text-[10px] text-zinc-500">omni-agent / live</div></div>
              <div className="grid min-h-[390px] grid-cols-[.78fr_1.22fr] sm:min-h-[440px]">
                <aside className="hidden border-r border-white/10 p-4 sm:block"><p className="text-[10px] uppercase tracking-[.15em] text-zinc-600">Live agents</p><div className="mt-5 space-y-3">{["Voice concierge", "WhatsApp assistant", "Follow-up agent"].map((agent, i) => <div className="rounded-lg bg-white/[.035] p-2.5" key={agent}><div className="flex items-center justify-between text-xs text-zinc-300"><span>{agent}</span><span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-emerald-400" : "bg-zinc-600"}`} /></div><p className="mt-1 text-[10px] text-zinc-600">{i === 0 ? "Active now" : "Standing by"}</p></div>)}</div></aside>
                <div className="relative p-4 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-xs text-zinc-500">Live conversation</p><p className="mt-1 text-sm font-medium text-white">{active} inquiry</p></div><span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />Live</span></div><div className="mt-7 flex items-end gap-1.5"><span className="text-[10px] text-zinc-600">Voice</span><div className="flex h-9 flex-1 items-center justify-center gap-1">{Array.from({ length: 22 }).map((_, i) => <motion.span key={i} animate={{ height: [8, 10 + (i % 5) * 5, 8] }} transition={{ duration: .7 + (i % 4) * .15, repeat: Infinity, ease: "easeInOut" }} className="w-1 rounded-full bg-gradient-to-t from-orange-500 to-amber-200" />)}</div></div><div className="mt-6 space-y-3">{demo.transcript.map((line, i) => <motion.div key={line} initial={{ opacity: 0, x: i % 2 ? 8 : -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .35 }} className={`max-w-[88%] rounded-xl px-3 py-2 text-[11px] leading-relaxed ${i % 2 ? "ml-auto bg-orange-500/15 text-orange-100" : "bg-white/[.055] text-zinc-300"}`}>{line}</motion.div>)}</div><div className="absolute bottom-4 right-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-[10px] text-emerald-200 shadow-lg"><div className="flex items-center gap-1.5"><CalendarCheck size={12} /> Appointment booked</div><p className="mt-1 text-emerald-300/70">Thursday · 2:30 PM</p></div></div>
              </div>
            </div>
            <button type="button" onClick={() => setModalOpen(true)} aria-label="Open full AI demo" className="group absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/90 text-neutral-900 shadow-[0_0_0_12px_rgba(255,255,255,.08),0_0_70px_10px_rgba(242,109,52,.35)] transition hover:scale-110"><Play size={21} fill="currentColor" className="ml-0.5" /></button>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 border-y border-white/10 py-6"><div className="flex flex-wrap items-center gap-2"><span className="mr-2 text-xs uppercase tracking-[.16em] text-zinc-500">Demo categories</span>{(Object.keys(demos) as DemoName[]).map(name => <button type="button" key={name} onClick={() => setActive(name)} className={`rounded-full px-4 py-2 text-sm transition ${active === name ? "bg-[#F26D34] text-neutral-950" : "border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"}`}>{name}</button>)}</div><div className="mt-5 grid gap-4 text-sm sm:grid-cols-[1.2fr_1fr]"><p className="leading-relaxed text-zinc-300">{demo.description}</p><div className="flex flex-wrap content-start gap-2">{demo.highlights.map(item => <span key={item} className="rounded-full bg-white/[.05] px-3 py-1.5 text-xs text-zinc-400">{item}</span>)}</div></div></div>

      <div className="mt-14"><p className="text-xs uppercase tracking-[.18em] text-zinc-500">Feature timeline</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{timeline.map(([label, Icon], index) => <div key={label} className={`relative rounded-xl border p-4 transition duration-500 ${index <= timelineStep ? "border-orange-300/35 bg-orange-300/10" : "border-white/10 bg-white/[.025]"}`}><Icon size={18} className={index <= timelineStep ? "text-orange-300" : "text-zinc-600"} /><p className="mt-5 text-xs text-zinc-300">{label}</p>{index < timeline.length - 1 && <ChevronRight size={14} className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-zinc-600 lg:block" />}</div>)}</div></div>
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{stats.map((stat, i) => <motion.div key={stat} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05, duration: .45 }} className="rounded-xl border border-white/10 bg-white/[.025] p-4 text-sm text-zinc-300 transition hover:-translate-y-1 hover:border-orange-300/30">{stat}</motion.div>)}</div>
    </div>

    <AnimatePresence>{modalOpen && <motion.div role="dialog" aria-modal="true" aria-label="AI product demonstration" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-black/75 p-4 backdrop-blur-xl" onMouseDown={() => setModalOpen(false)}><motion.div initial={{ opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 16 }} transition={{ duration: .25, ease }} className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#111216] shadow-2xl" onMouseDown={event => event.stopPropagation()}><button type="button" onClick={() => setModalOpen(false)} aria-label="Close demo" className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black"><X size={17} /></button>{embedUrl ? <div className="aspect-video"><iframe className="h-full w-full" src={embedUrl} title="AI systems demonstration" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div> : <div className="grid min-h-[420px] place-items-center p-10 text-center"><div><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange-300 text-neutral-950"><Play size={20} fill="currentColor" /></div><h3 className="mt-6 font-display text-4xl text-white">Interactive AI demo</h3><p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400">This product preview is ready for your private YouTube or Loom recording. Add its URL to the demo component and it will be lazy-loaded here only after a visitor opens the modal.</p></div></div>}</motion.div></motion.div>}</AnimatePresence>
  </section>;
}
