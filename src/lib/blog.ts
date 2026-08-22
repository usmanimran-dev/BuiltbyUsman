export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: { heading?: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "what-is-a-digital-fte",
    title: "What a Digital FTE Actually Replaces",
    excerpt:
      "\"Digital FTE\" gets thrown around a lot. Here's what the term means in practice, and where it genuinely does — and doesn't — replace a hire.",
    date: "2026-08-10",
    readTime: "5 min read",
    tags: ["Digital FTE", "AI Strategy"],
    content: [
      {
        paragraphs: [
          "FTE — Full-Time Equivalent — is an HR term for one full-time worker's worth of output. A Digital FTE borrows that framing on purpose: instead of pitching AI as a feature you bolt onto existing software, it's scoped like a role. A defined set of responsibilities, owned end to end, the way you'd write a job description rather than a product spec sheet.",
          "That distinction matters because it changes what you're actually comparing. Most software gets evaluated against other software — price per seat, feature checklist, integration count. A Digital FTE gets evaluated against a hire: what would it cost to bring on a person for this role, how long would it take to get them productive, and how consistent would their output be once they're up to speed.",
        ],
      },
      {
        heading: "Where the comparison holds up",
        paragraphs: [
          "Availability is the clearest win. A human role covers roughly 40 hours a week before overtime becomes a conversation. A Digital FTE runs the same shift on a Sunday at 3am as a Tuesday afternoon — no shift differential, no burnout.",
          "Ramp-up time is the second. Hiring, onboarding, and getting a new employee to full productivity on a defined workflow routinely takes three to six months. A well-scoped Digital FTE role can be live in weeks, because the 'training' is a build process, not a person learning on the job.",
          "Consistency is the third, and it's the one people underestimate. A tired employee on their fortieth call of the day is a different employee than they were on their fifth. A Digital FTE handles call five hundred the same way it handled call one — for better and for worse, which is exactly why scoping the role correctly matters.",
        ],
      },
      {
        heading: "Where it doesn't",
        paragraphs: [
          "A Digital FTE is only as good as how narrowly and honestly its role is scoped. It's not a general employee — it's a specialist for one workflow. Ask it to do too much and you get the AI equivalent of a bad hire: technically present, unreliable in practice.",
          "It also doesn't remove the need for human judgment on anything genuinely ambiguous or sensitive. Every Digital FTE build I ship has an explicit handoff path to a person for exactly that reason — the goal is to absorb the repeatable 80%, not to pretend the other 20% doesn't need a human.",
        ],
      },
      {
        heading: "The honest version of the pitch",
        paragraphs: [
          "A Digital FTE isn't magic and it isn't a replacement for your whole team. It's a way to staff one well-defined, high-volume role — the one that's currently eating a person's entire day in repetitive work — with something that doesn't get tired, doesn't quit, and costs a fraction of the hire it's standing in for.",
        ],
      },
    ],
  },
  {
    slug: "building-loop-agent",
    title: "Building Loop Agent: One Worker, Every Channel",
    excerpt:
      "Most AI tooling handles one channel well and falls apart the moment a conversation moves to a second one. Here's the problem Loop Agent is built to solve, and where it stands today.",
    date: "2026-08-16",
    readTime: "6 min read",
    tags: ["Loop Agent", "Product", "Architecture"],
    content: [
      {
        paragraphs: [
          "The pattern I kept running into across client work — BYD, Aga Khan, and a handful of smaller builds — was the same failure mode: a voice bot that answers calls well, a chatbot that handles WhatsApp fine, and no shared memory between them. A customer calls, gets qualified, then messages on WhatsApp an hour later and starts from zero. The business paid for two AI tools and got one broken conversation.",
          "Loop Agent is my answer to that: one agent, one context object, however many channels the customer actually uses.",
        ],
      },
      {
        heading: "The core idea",
        paragraphs: [
          "Instead of building a voice bot and a chat bot as separate systems that occasionally sync, Loop Agent treats every channel as a different transport for the same underlying conversation thread. Voice, WhatsApp, and follow-up messaging all read from and write to one context record tied to the customer — intent, history, CRM state, and calendar availability all live in one place, not three.",
          "Concretely: if a customer starts on a call and the conversation ends in 'let me think about it,' the follow-up message that goes out later isn't a generic nudge — it's grounded in exactly what was discussed on the call. If they then reply on WhatsApp, that reply lands with full context, not as a fresh inbound message from a stranger.",
        ],
      },
      {
        heading: "What's actually built",
        paragraphs: [
          "Right now Loop Agent is an internal product, in development — not a deployed client project. The architecture draws directly from patterns proven in live client work: Vapi for voice orchestration, Telnyx for number provisioning, Supabase with row-level security for the shared context store, and Cal.com for scheduling. The multi-tenant piece — modeling each client as a squad of specialized agents (reception, sales, follow-up) with mid-call handoffs — is the part carried over most directly from the BYD build.",
          "What's still ahead: hardening the handoff logic for edge cases, and getting the first non-internal deployment live so the 'one context, every channel' claim gets tested against a real, messy customer base instead of internal test scenarios.",
        ],
      },
      {
        heading: "Why this, and not just 'add more integrations'",
        paragraphs: [
          "It would be easier to sell Loop Agent as a chatbot with a voice add-on. But that's the exact framing that produces the disconnected-tools problem in the first place. The bet here is that the hard part isn't answering a call or replying to a WhatsApp message — plenty of tools do both. The hard part is making sure the business doesn't lose the thread the moment a customer changes channels, which is also the moment most AI tooling quietly breaks.",
        ],
      },
    ],
  },
  {
    slug: "byd-ai-rollout-notes",
    title: "Build Notes: Automotive AI at BYD",
    excerpt:
      "A running log of what's actually shipped for the BYD dealership rollout, what's still in progress, and why the target metrics are targets — not results — for now.",
    date: "2026-08-20",
    readTime: "4 min read",
    tags: ["Case Study", "Automotive", "BYD"],
    content: [
      {
        paragraphs: [
          "BYD dealerships were losing test-drive leads to a simple, familiar problem: peak-hour calls going unanswered, and slow follow-up letting warm leads go cold before anyone called back. The brief wasn't 'build a chatbot' — it was 'stop losing the lead in the first sixty seconds.'",
        ],
      },
      {
        heading: "The system, as it stands",
        paragraphs: [
          "An inbound call or WhatsApp message reaches the AI receptionist first. Intent is captured and the lead is qualified in real time — not just 'are you interested,' but the specific model, timeline, and location that make a lead actually actionable for a sales team. From there, availability is checked against the dealership's calendar and the test-drive appointment is confirmed without a human touching the booking.",
          "This is being rolled out across 40+ BYD dealership locations, with the pattern re-used from what became the core architecture behind Loop Agent — squads of specialized agents rather than one general-purpose bot trying to do everything.",
        ],
      },
      {
        heading: "Why I'm not publishing results yet",
        paragraphs: [
          "The site lists a target — 90%+ resolution without human handoff — deliberately labeled as a target, not a delivered number. This is current implementation, still being rolled out location by location, and I'd rather under-claim during rollout than publish a number that doesn't hold once every dealership is live and every edge case has shown up.",
          "When there's a real, verified number to publish, it'll replace the target here. Until then, this stays a build log, not a results page.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
