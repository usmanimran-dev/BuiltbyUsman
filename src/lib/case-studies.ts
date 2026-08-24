export type CaseStudy = {
  slug: string;
  /**
   * Which surface the study belongs to. `/ai` renders only "ai" studies so the
   * page stays topically focused; enterprise work is surfaced from the
   * homepage instead.
   */
  domain: "ai" | "enterprise";
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
  measures: { kind: "result" | "target" | "scope" | "status"; label: string; value: string; note: string }[];
  relatedPost?: { slug: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "byd-automotive-ai",
    domain: "ai",
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
    domain: "ai",
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
    domain: "ai",
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
  {
    slug: "hbl-trade-finance",
    domain: "enterprise",
    eyebrow: "HBL · delivered via Socium",
    title: "Trade Finance Systems",
    challenge:
      "Letter of Credit and Amendments workflows had to run across Finastra's trade finance and compliance products while keeping documents, screening, and transaction state consistent.",
    steps: [
      ["Instrument raised", "A Letter of Credit or amendment enters the workflow with its terms and parties."],
      ["Screened and documented", "Compliance screening runs and supporting documents are captured against the transaction."],
      ["State stays consistent", "Every consuming system reads the same instrument state through one contract."],
    ],
    target: "Delivered — enterprise banking deployment",
    tags: ["DB2", "Trade Finance", "FTI / FCC integration", "EDMS"],
    client: "HBL",
    sector: "Banking — trade finance",
    status: "Delivered as an engineer at Socium",
    summary:
      "Letter of Credit and Amendments workflows on DB2, integrated with Finastra's Trade Innovation and Financial Crime Compliance products, plus an EDMS for the documents trade finance runs on. Delivered as an engineer at Socium.",
    context: [
      "Trade finance is document-heavy and rule-bound in a way most software domains are not. A Letter of Credit is a bank's conditional promise to pay against documents that comply exactly with stated terms — and an amendment changes those terms while the instrument is still live. Getting the data layer right is not a matter of storing a record; it is a matter of several systems agreeing, continuously, on what an instrument currently says.",
      "The work sat at that data layer: DB2 underneath, Java middleware above, Finastra products alongside, and an enterprise bank's release process around all of it. This was delivered while employed at Socium, the software company serving the deployment, rather than as an independent engagement with HBL.",
    ],
    constraints: [
      {
        label: "The database is the integration point",
        text: "This was not one application with a private database. Java middleware and other consumers read the same instrument state, which meant logic implemented per-consumer would drift — and in trade finance, two systems disagreeing about the state of an instrument is a material problem, not a bug to fix next sprint.",
      },
      {
        label: "Screening is blocking, not advisory",
        text: "Financial crime compliance screening is a regulatory requirement, not a feature. A transaction cannot simply proceed while screening resolves in the background, so the workflow has to model a blocking step honestly rather than treating clearance as an afterthought.",
      },
      {
        label: "Documents are the product",
        text: "In trade finance the documents are what is actually being examined — invoices, transport documents, certificates. Any system handling these instruments has to keep documents reliably attached to the transaction they belong to, and retrievable long after the transaction closes.",
      },
      {
        label: "Enterprise release cadence",
        text: "Changes ship through a bank's release process with a DBA team and audit expectations attached. That constrains not just how fast you move but what kind of solution survives review.",
      },
    ],
    build: [
      {
        heading: "LC and Amendments workflows",
        paragraphs: [
          "The core of the work was 25+ DB2 stored procedures supporting Letter of Credit and Amendments workflows. Putting that logic in the database was a deliberate choice rather than a legacy inheritance: with multiple consumers reading the same instrument, the logic lives once next to the data instead of being reimplemented per consumer and drifting apart.",
          "Performance work concentrated on optimising multi-table joins and query execution plans. An amendment touches a lot of tables, and the gain was available precisely because the logic was close enough to the data to be tuned as a unit.",
        ],
      },
      {
        heading: "FTI and FCC product integration",
        paragraphs: [
          "The workflows had to operate against Finastra's trade finance stack rather than in isolation — Trade Innovation (FTI) for the trade finance processing itself, and Financial Crime Compliance (FCC) for the sanctions and financial crime screening that trade transactions are subject to.",
          "Integration work of this kind is mostly contract work in the unglamorous sense: agreeing precisely what each side sends, what it means, and what happens when a response is anything other than the happy path. Screening in particular has to be modelled as a real state in the workflow — cleared, blocked, or pending review — rather than a boolean the workflow can shrug at.",
        ],
      },
      {
        heading: "EDMS for trade finance documents",
        paragraphs: [
          "Alongside the workflows, an Electronic Document Management System was built for the trade finance system — the layer that holds the documents an instrument is examined against and keeps them associated with the right transaction.",
          "The requirement that shapes an EDMS in this setting is retrieval rather than storage. Documents have to be findable against the instrument they belong to, by people who may be looking months later during a dispute or an audit, which makes the indexing and the association model the parts that matter most.",
        ],
      },
      {
        heading: "Making the boundary explicit",
        paragraphs: [
          "Database schemas were mapped to REST API responses and Java middleware contracts so downstream systems received clean, structured data rather than raw table shapes. Integration documentation and data-mapping sheets were maintained alongside the code.",
          "That documentation is the part I would insist on again. Stored procedures earn a reputation as an undocumented layer only one person understands, and the only thing that prevents it is treating the boundary as a written contract. It measurably reduced schema-mismatch errors during releases.",
        ],
      },
    ],
    stack: [
      "DB2",
      "Stored Procedures",
      "Finastra Trade Innovation (FTI)",
      "Finastra Financial Crime Compliance (FCC)",
      "EDMS",
      "REST APIs",
      "Java middleware",
    ],
    measures: [
      {
        kind: "result",
        label: "Average API response time",
        value: "~35% faster",
        note: "Achieved through query execution plan and multi-table join optimisation on the LC and Amendments workflows.",
      },
      {
        kind: "scope",
        label: "DB2 stored procedures",
        value: "25+",
        note: "Supporting Letter of Credit and Amendments workflows across enterprise banking systems.",
      },
      {
        kind: "result",
        label: "Schema-mismatch errors at release",
        value: "Reduced",
        note: "Through maintained integration documentation and data-mapping sheets. Deliberately not given a percentage — the improvement was real but was not measured as a single figure.",
      },
    ],
    relatedPost: { slug: "stored-procedures-trade-finance", label: "In Defence of Stored Procedures" },
  },
  {
    slug: "swifpack-logistics",
    domain: "enterprise",
    eyebrow: "Tanzania Posts · delivered via iVisionGate",
    title: "Swifpack Logistics Platform",
    challenge:
      "A national postal operator needed live driver tracking, delivery management, and fleet oversight across mobile networks that drop out for minutes at a time.",
    steps: [
      ["Trip starts", "A driver accepts a booking or delivery in the Flutter app."],
      ["Position streams live", "GPS updates flow over MQTT, surviving coverage gaps without losing the trip."],
      ["Fleet stays visible", "Dispatchers monitor and manage the fleet from the web dashboards."],
    ],
    target: "Delivered — national logistics deployment",
    tags: ["Flutter", "Node.js", "MQTT", "AWS"],
    client: "Tanzania Posts Corporation",
    sector: "Logistics & mobility",
    status: "Delivered as an engineer at iVisionGate",
    summary:
      "A digital mobility and logistics platform for Tanzania Posts Corporation: Flutter driver and customer apps, web dashboards for fleet management, and a real-time GPS layer built to survive unreliable mobile networks. Delivered as an engineer at iVisionGate.",
    context: [
      "Swifpack covers ride booking, delivery tracking, and trip management for a national postal operator — which means the system has two quite different audiences at once. Drivers need something that works one-handed, in a vehicle, all day. Dispatchers need an operational picture of the whole fleet at a glance.",
      "The defining condition was the network. Drivers were on mobile connections, moving, for a full shift. Connections did not fail cleanly; they degraded, dropped for a minute or two in a coverage gap, and came back. That is the constraint the architecture had to be organised around, and it was delivered while employed at iVisionGate rather than as an independent engagement.",
    ],
    constraints: [
      {
        label: "Connectivity is the core condition, not an edge case",
        text: "A tracking system that assumes a stable connection is not really a tracking system for this fleet. The question was never how to stream coordinates, but what happens during the ninety seconds when you cannot.",
      },
      {
        label: "A full shift on one battery",
        text: "The driver app runs backgrounded for most of the day. A chatty protocol or aggressive polling loop that flattens the phone by mid-afternoon fails the requirement regardless of how good the tracking is.",
      },
      {
        label: "Two audiences, opposite needs",
        text: "Driver apps optimise for glanceability and low interaction cost. Fleet dashboards optimise for density and oversight. The same underlying data has to serve both without either being an afterthought.",
      },
      {
        label: "Operational scale",
        text: "This is a national postal operator's fleet, so the real-time layer has to hold up under sustained concurrent load rather than performing well in a demo with a handful of drivers.",
      },
    ],
    build: [
      {
        heading: "Driver and customer apps",
        paragraphs: [
          "Both apps were built in Flutter, covering real-time ride booking, delivery tracking, and trip management. Sharing a codebase across the two audiences kept trip state modelled once rather than reimplemented per app, which matters when the definition of an in-progress trip has to agree on both sides of the transaction.",
        ],
      },
      {
        heading: "The real-time layer",
        paragraphs: [
          "MQTT carries the live position stream. It was chosen over a plain WebSocket connection specifically because it already answers the questions this deployment forces — quality-of-service levels per message type, persistent sessions so a driver leaving a coverage gap resumes rather than restarts, and broker-side detection when a client disconnects ungracefully.",
          "Firebase holds the durable state the apps read on cold start — last known position and current trip status — so a dispatcher opening the dashboard sees the fleet immediately rather than an empty map waiting for the next ping. Keeping the live stream and the queryable state as separate concerns is deliberate: trying to make a message bus also serve as the database tends to produce a system that does neither job well.",
        ],
      },
      {
        heading: "Dashboards and backend",
        paragraphs: [
          "Corporate fleet management and operational monitoring run through Next.js and Angular web dashboards. Behind them, Node.js services handle the high-volume real-time transaction load.",
          "The AWS infrastructure was deployed and maintained as part of the same work, which kept the performance question honest — latency is a property of the deployed system rather than of the code in isolation, and owning both ends made it possible to actually move the number.",
        ],
      },
    ],
    stack: ["Flutter", "Next.js", "Angular", "Node.js", "MQTT", "Firebase", "AWS"],
    measures: [
      {
        kind: "result",
        label: "Real-time update latency",
        value: "~35% lower",
        note: "Measured against the baseline the platform started from, across the live GPS update path.",
      },
      {
        kind: "scope",
        label: "Deployment",
        value: "National",
        note: "Delivered to Tanzania Posts Corporation, covering ride booking, delivery tracking, and fleet management.",
      },
      {
        kind: "scope",
        label: "Surfaces shipped",
        value: "4",
        note: "Flutter driver app, Flutter customer app, and two web dashboards for fleet management and operational monitoring.",
      },
    ],
    relatedPost: {
      slug: "mqtt-vs-websockets-gps-tracking",
      label: "Why MQTT and Not WebSockets for Live GPS",
    },
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
