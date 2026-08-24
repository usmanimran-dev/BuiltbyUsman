export type CaseStudy = {
  slug: string;
  /** Card fields — rendered in the #case-studies grid on /ai. */
  eyebrow: string;
  title: string;
  challenge: string;
  steps: [string, string][];
  target: string;
  tags: string[];
  /** Page fields — rendered at /work/[slug]. */
  client: string;
  sector: string;
  status: string;
  summary: string;
  context: string[];
  constraints: { label: string; text: string }[];
  build: { heading: string; paragraphs: string[] }[];
  stack: string[];
  /**
   * Kept deliberately separate from delivered results. `kind` drives how each
   * figure is labelled in the UI so a target never reads as an outcome.
   */
  measures: { kind: "target" | "scope" | "status"; label: string; value: string; note: string }[];
  relatedPost?: { slug: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "byd-automotive-ai",
    eyebrow: "BYD · current implementation",
    title: "Automotive AI Operations",
    challenge:
      "BYD dealerships were missing inbound calls during peak hours, and slow follow-up meant test-drive leads went cold before anyone called back.",
    steps: [
      ["Call comes in", "Inbound call or WhatsApp message reaches the AI receptionist."],
      ["Lead qualified", "Intent is captured and the lead is qualified in real time."],
      ["Test drive booked", "Availability is checked and the appointment is confirmed."],
    ],
    target: "Target: 90%+ resolution without human handoff",
    tags: ["AI receptionist", "Test-drive booking", "Lead qualification"],
    client: "BYD",
    sector: "Automotive retail",
    status: "Current implementation — rolling out across locations",
    summary:
      "An AI receptionist handling inbound calls and WhatsApp for BYD dealerships: qualifying test-drive leads in real time and booking against live dealership availability. Currently rolling out location by location.",
    context: [
      "The brief was not \"build a chatbot.\" It was that leads were being lost in the first sixty seconds — calls going unanswered during the busiest part of the day, and callbacks happening slowly enough that a warm lead had already contacted another dealer.",
      "That framing matters, because it rules out a lot of solutions that look reasonable on paper. An after-hours voicemail system does not help someone who called at 2pm on a Saturday. A generic chat widget does not help someone who is calling because they want to speak to a person about a car.",
    ],
    constraints: [
      {
        label: "Peak-hour concurrency",
        text: "The problem only exists when the dealership is busy, which means the system has to hold up precisely when the most calls arrive at once. Handling calls well at low volume proves nothing here.",
      },
      {
        label: "Per-location reality",
        text: "Each dealership has its own numbers, its own calendar, and its own inventory. A lead qualified for one location is not automatically useful to another.",
      },
      {
        label: "Knowing when to stop",
        text: "A caller with a finance question or a complaint should reach a person quickly. The system has to be willing to hand off rather than trying to resolve everything.",
      },
    ],
    build: [
      {
        heading: "What runs today",
        paragraphs: [
          "An inbound call or WhatsApp message reaches the AI receptionist first. Intent is captured and the lead is qualified in real time — not simply whether someone is interested, but the specific model, timeline, and location that make a lead actionable for a sales team.",
          "From there, availability is checked against the dealership's calendar and the test-drive appointment is confirmed without a person touching the booking. The caller gets a confirmed time on the same call rather than a promise that someone will get back to them.",
        ],
      },
      {
        heading: "Squads, not one general-purpose bot",
        paragraphs: [
          "Each location is modelled as a squad of specialised agents — reception, sales, follow-up — rather than a single agent trying to cover every conversation. A reception agent that only has to handle reception is easier to make reliable than a general-purpose one, and handoffs between them happen mid-conversation rather than by starting over.",
          "This is also the architecture that made a multi-location rollout tractable: a new dealership is a squad configuration and a phone number, not a separate deployment.",
        ],
      },
      {
        heading: "Where a person still steps in",
        paragraphs: [
          "Anything the system is not confident about routes to a human, and that threshold is deliberately conservative during rollout. The goal is to absorb the repeatable majority of inbound volume, not to prevent callers from reaching staff.",
        ],
      },
    ],
    stack: ["Vapi", "Telnyx", "Supabase (RLS)", "Cal.com", "WhatsApp"],
    measures: [
      {
        kind: "target",
        label: "Resolution without human handoff",
        value: "90%+",
        note: "A target being worked towards, not a delivered result. Rollout is ongoing and this figure will be replaced once it can be verified across live locations.",
      },
      {
        kind: "scope",
        label: "Dealership locations in rollout",
        value: "40+",
        note: "Being rolled out location by location rather than switched on everywhere at once.",
      },
      {
        kind: "status",
        label: "Published outcomes",
        value: "Not yet",
        note: "I would rather under-claim during a rollout than publish a number that does not hold once every location is live and every edge case has appeared.",
      },
    ],
    relatedPost: { slug: "byd-ai-rollout-notes", label: "Build Notes: Automotive AI at BYD" },
  },
  {
    slug: "aga-khan-healthcare-ai",
    eyebrow: "Aga Khan · current implementation",
    title: "Healthcare AI Workflows",
    challenge:
      "Patient inquiries and appointment requests were routed manually, creating delays for both patients and administrative staff.",
    steps: [
      ["Inquiry received", "Patient calls or messages with a question or request."],
      ["Intent routed", "Request is classified and sent to the right department."],
      ["Handoff when needed", "Clinical or administrative staff step in for anything sensitive."],
    ],
    target: "In progress — outcomes being defined with clinical teams",
    tags: ["Patient inquiries", "Appointment routing", "Human handoff"],
    client: "Aga Khan",
    sector: "Healthcare",
    status: "Early implementation — scope still being defined with clinical teams",
    summary:
      "Routing patient inquiries and appointment requests that were previously handled manually. An early-stage engagement: the routing layer is the focus, and clinical judgement stays with clinical staff.",
    context: [
      "Patient inquiries and appointment requests were arriving through channels that all funnelled into manual triage. The cost of that lands twice — patients wait for a response to a question that may be routine, and administrative staff spend their day sorting requests rather than resolving them.",
      "This is an earlier-stage engagement than the automotive work, and the honest description of it is a routing problem rather than a resolution problem. The question being answered is \"where should this go,\" not \"what should the patient do.\"",
    ],
    constraints: [
      {
        label: "Clinical judgement is out of scope",
        text: "Anything touching diagnosis, triage severity, or medical advice belongs with clinical staff. The system classifies and routes; it does not advise. That boundary is the design, not a limitation to be engineered away later.",
      },
      {
        label: "Sensitive data handling",
        text: "Patient information carries handling requirements that shape what the system is allowed to store, log, and pass between steps.",
      },
      {
        label: "Conservative handoff",
        text: "In a healthcare setting the cost of wrongly keeping someone in an automated flow is much higher than the cost of handing off unnecessarily. The threshold is set accordingly.",
      },
    ],
    build: [
      {
        heading: "What the system does",
        paragraphs: [
          "A patient calls or messages with a question or request. The request is classified by intent and routed to the department that owns it, rather than sitting in a general queue waiting for someone to read it and forward it on.",
          "Where a request is sensitive, ambiguous, or clinical in nature, it goes to administrative or clinical staff with the context already captured — so the person picking it up starts with the request understood rather than starting the conversation again.",
        ],
      },
      {
        heading: "What it deliberately does not do",
        paragraphs: [
          "It does not give medical advice, assess urgency, or make any clinical determination. Those decisions stay with qualified staff. Building an AI layer in a healthcare setting means being precise about where its authority ends, and in this case it ends at routing.",
        ],
      },
      {
        heading: "What is still being defined",
        paragraphs: [
          "This is an active engagement with scope still being worked out alongside clinical teams. There is no results section on this page yet because there is not yet a result worth publishing — the measures that matter are being defined with the people who will have to live with them.",
        ],
      },
    ],
    stack: ["Intent classification", "Department routing", "Human handoff"],
    measures: [
      {
        kind: "status",
        label: "Engagement stage",
        value: "In progress",
        note: "Scope and success measures are being defined with clinical teams rather than assumed up front.",
      },
      {
        kind: "status",
        label: "Published outcomes",
        value: "None yet",
        note: "This page will carry real figures when there are real figures. Until then it describes what is being built, not what has been achieved.",
      },
    ],
  },
  {
    slug: "loop-agent",
    eyebrow: "Internal product · in development",
    title: "Loop Agent",
    challenge:
      "Businesses need one AI worker that holds context across voice, chat, and follow-up — not a different disconnected tool for every channel.",
    steps: [
      ["Customer reaches out", "Any channel — call, chat, or WhatsApp — starts the same thread."],
      ["Context stays in the loop", "CRM, calendar, and history stay in sync as the conversation moves."],
      ["Nothing drops", "Follow-up, booking, and handoff all draw from the same context."],
    ],
    target: "In development — one agent, every channel",
    tags: ["Multi-agent AI", "Voice", "Automation"],
    client: "Internal product",
    sector: "Product development",
    status: "In development — not yet a deployed client project",
    summary:
      "One agent holding a single conversation thread across voice, chat, and WhatsApp, instead of separate tools that lose context when a customer switches channel. Currently an internal build.",
    context: [
      "The pattern across client work was consistently the same failure: a voice bot that answers calls well, a chatbot that handles WhatsApp fine, and no shared memory between them. A customer calls, gets qualified, messages an hour later, and starts from zero. The business paid for two AI tools and got one broken conversation.",
      "Loop Agent is the attempt to solve that directly — one agent, one context object, however many channels the customer actually uses.",
    ],
    constraints: [
      {
        label: "Channels are transports, not products",
        text: "Treating voice and chat as separate systems that occasionally sync is what produces the problem. They have to read and write the same conversation thread, or the architecture reintroduces the gap it was built to close.",
      },
      {
        label: "Tenant isolation",
        text: "Shared infrastructure serving multiple clients means isolation has to be enforced at the data layer rather than trusted to application code.",
      },
      {
        label: "Handoff edge cases",
        text: "Mid-conversation handoffs between specialised agents are where a multi-agent system is most likely to lose the thread, which makes them the hardest part to get right.",
      },
    ],
    build: [
      {
        heading: "One context, every channel",
        paragraphs: [
          "Rather than a voice bot and a chat bot that occasionally sync, every channel is treated as a different transport for the same underlying conversation. Intent, history, CRM state, and calendar availability live in one context record tied to the customer rather than three copies drifting apart.",
          "In practice: if a call ends with \"let me think about it,\" the follow-up that goes out later is grounded in what was actually discussed. If the customer replies on WhatsApp, that reply lands with the full history attached rather than as a fresh message from a stranger.",
        ],
      },
      {
        heading: "Multi-tenant by design",
        paragraphs: [
          "Each client is modelled as a squad of specialised agents — reception, sales, follow-up — defined as configuration rather than code. A client wanting different qualification questions gets a different squad definition, not a fork of the codebase.",
          "Data isolation is enforced through row-level security at the database, so a missing tenant filter returns nothing rather than leaking across clients.",
        ],
      },
      {
        heading: "What is still ahead",
        paragraphs: [
          "Hardening the handoff logic for edge cases, and getting the first non-internal deployment live so the \"one context, every channel\" claim is tested against a real, messy customer base rather than internal test scenarios.",
        ],
      },
    ],
    stack: ["Vapi", "Telnyx", "Supabase (RLS)", "Cal.com"],
    measures: [
      {
        kind: "status",
        label: "Stage",
        value: "In development",
        note: "An internal product, not a deployed client project. The architecture draws on patterns proven in live client work.",
      },
      {
        kind: "status",
        label: "First external deployment",
        value: "Not yet live",
        note: "The claim that context survives a channel switch is not properly tested until it meets a real customer base.",
      },
    ],
    relatedPost: { slug: "building-loop-agent", label: "Building Loop Agent: One Worker, Every Channel" },
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
