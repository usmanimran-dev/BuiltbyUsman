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
  {
    slug: "mqtt-vs-websockets-gps-tracking",
    title: "Why MQTT and Not WebSockets for Live GPS",
    excerpt:
      "Building live driver tracking for a national logistics platform, the obvious choice was a WebSocket stream. I went with MQTT instead. Here's the constraint that decided it.",
    date: "2026-08-24",
    readTime: "6 min read",
    tags: ["Architecture", "Real-Time Systems", "Logistics"],
    content: [
      {
        paragraphs: [
          "Swifpack — the mobility and logistics platform delivered to Tanzania Posts Corporation — needed live GPS from every active driver, surfaced on a fleet dashboard in something close to real time. The default answer to that problem is a WebSocket connection per driver, pushing coordinates to a Node process that fans them out to whoever's watching.",
          "That's a perfectly good answer in a datacentre. It was the wrong one here, and the reason had almost nothing to do with throughput.",
        ],
      },
      {
        heading: "The constraint that actually mattered",
        paragraphs: [
          "Drivers were on mobile networks, moving, all day. Connections didn't fail cleanly — they degraded, dropped for ninety seconds in a coverage gap, and came back. Phones were on battery for a full shift with the app backgrounded for most of it.",
          "Once you write that down, the problem stops being 'how do I stream coordinates' and becomes 'what happens in the ninety seconds when I can't.' A raw WebSocket has no opinion about that. It gives you a bidirectional pipe and leaves reconnection, buffering, delivery guarantees, and offline detection as an exercise for the reader. Every one of those is something you will end up building badly under deadline.",
        ],
      },
      {
        heading: "What MQTT gave me for free",
        paragraphs: [
          "MQTT was designed for exactly this environment — constrained devices on unreliable links — and three of its features map directly onto the problem. Quality-of-service levels let me decide per message type whether at-least-once delivery was worth the overhead: position pings are cheap and frequent, so losing one is fine, but a trip-state change isn't. Persistent sessions meant a driver coming out of a coverage gap resumed rather than restarted, without me writing reconnect-and-replay logic by hand.",
          "The third is the one that sold it. MQTT's Last Will and Testament lets a client register, at connect time, a message the broker publishes on its behalf if it disconnects ungracefully. That means 'this driver has gone offline' is handled by the protocol itself, at the moment the broker notices the socket is gone. With raw WebSockets you build that out of heartbeats and timeouts, and you get to pick between false positives and slow detection. Here it came included.",
          "The pub/sub model also removed a layer of coordination I'd otherwise own. Drivers publish to their own topic; the dashboard subscribes to the fleet. Neither knows the other exists, and adding a second consumer later — analytics, an ops alerting service — meant adding a subscriber, not modifying the publisher.",
        ],
      },
      {
        heading: "Why Firebase is in there too",
        paragraphs: [
          "MQTT carries the high-frequency stream. It is deliberately not the system of record. Firebase holds the durable state the apps read on cold start — last known position, current trip status — so a dispatcher opening the dashboard sees the fleet immediately instead of an empty map waiting for the next ping.",
          "That split is the part I'd defend hardest. Using one technology for the live stream and another for durable, queryable state is not redundancy; it's the two having genuinely different jobs. Trying to make the message bus also be the database is a common way to end up with neither working well.",
        ],
      },
      {
        heading: "Where this is the wrong call",
        paragraphs: [
          "MQTT means running and operating a broker. If your clients are browsers on stable connections and you have no offline story to worry about, that's real operational cost buying you very little — use WebSockets and move on. It's also a poor fit if your traffic is mostly request/response rather than a genuine stream; you'd be reaching for pub/sub to solve a problem HTTP already solves.",
          "The decision here came down to one question: is unreliable connectivity a core property of the system, or an edge case? For a fleet of drivers on mobile networks it's the core property, and picking a protocol that already has answers for it beat building those answers myself. Latency on real-time updates ended up around 35% lower than the baseline we started from — but the reason I'd make the same call again is the reconnection code I never had to write.",
        ],
      },
    ],
  },
  {
    slug: "stored-procedures-trade-finance",
    title: "In Defence of Stored Procedures",
    excerpt:
      "Putting business logic in the database is supposed to be an anti-pattern. On a trade finance system running on enterprise DB2, it was the right architecture — and here's the reasoning.",
    date: "2026-08-24",
    readTime: "6 min read",
    tags: ["Architecture", "Fintech", "Databases"],
    content: [
      {
        paragraphs: [
          "I wrote 25+ DB2 stored procedures supporting Letter of Credit and Amendments workflows for enterprise banking deployments. By the standards of most modern backend advice, that sentence describes a mistake. Business logic belongs in the application layer; the database stores rows and stays out of the way.",
          "I think that advice is correct far more often than not, and I think it was wrong here. The interesting part is why.",
        ],
      },
      {
        heading: "The advice assumes a greenfield you don't have",
        paragraphs: [
          "'Keep logic in the app layer' quietly assumes your application is the only thing talking to the database, and that you get to choose the database. Neither held. The system was DB2, chosen years before I arrived, with Java middleware in front of it and other consumers besides the service I was working on. The database wasn't an implementation detail of one application — it was the integration point between several.",
          "When multiple consumers need the same Letter of Credit logic, you get one of two outcomes. Either the logic lives once, next to the data, and everyone calls it — or it gets reimplemented per consumer, and they drift. In a domain where the consequence of drift is two systems disagreeing about the state of a financial instrument, that's not a stylistic preference.",
        ],
      },
      {
        heading: "Data gravity is a real force",
        paragraphs: [
          "An LC amendment touches a lot of tables. Done in the application layer, that's a sequence of queries, each a network round trip, with the app assembling results it mostly doesn't need in order to produce a small answer. Done as a procedure, the work happens next to the data and one result comes back.",
          "This is where most of the performance work landed — optimising multi-table joins and query execution plans, which brought average API response times down by roughly 35%. That gain was available precisely because the logic was close enough to the data to be optimised as a unit. Spread the same work across a dozen application-level calls and there's no execution plan to tune; there's just a lot of network.",
        ],
      },
      {
        heading: "The compliance argument nobody mentions",
        paragraphs: [
          "Banking systems get audited. A stored procedure is a database object with controlled deployment, defined permissions, and a change process that a DBA team already owns and an auditor already understands. That institutional fit isn't a technical argument, and it's the kind of thing greenfield advice never accounts for — but on an enterprise banking deployment it carries genuine weight, and pretending otherwise means proposing architectures that will not survive review.",
        ],
      },
      {
        heading: "What it actually costs",
        paragraphs: [
          "I'd rather be honest about the trade than pretend it's free. Stored procedures are meaningfully worse to test — there's no fast in-memory harness, and the tooling is a long way behind what you'd expect for application code. Version control is a convention you impose rather than something the platform gives you. And the logic is now tied to DB2 specifically, so 'we'll migrate the database later' stops being a cheap sentence.",
          "The thing that made those costs manageable was treating the boundary as a contract. Mapping database schemas to REST responses and Java middleware contracts explicitly — and maintaining the data-mapping documentation alongside — is what stopped procedures becoming an undocumented layer only one person understood. That documentation cut schema-mismatch errors during releases, and it's the part I'd insist on if I did it again.",
          "The general rule I'd draw out: put logic where the constraints are, not where the convention is. On a greenfield service with one consumer and a database you control, keep it in the app layer — that advice is good and I follow it. On an enterprise system where the database is the integration point, the consumers are plural, and the auditors are real, the convention is answering a question you weren't asked.",
        ],
      },
    ],
  },
  {
    slug: "multi-tenant-voice-ai-architecture",
    title: "Multi-Tenant or One Instance Per Client?",
    excerpt:
      "Rolling voice AI out across 40+ dealership locations forces an architectural decision early. Isolated instances are the safe-feeling answer. Here's why I went the other way.",
    date: "2026-08-24",
    readTime: "5 min read",
    tags: ["Architecture", "Loop Agent", "Multi-Tenancy"],
    content: [
      {
        paragraphs: [
          "The BYD rollout covers 40+ dealership locations. Each one has its own phone numbers, its own calendar, its own inventory, and its own idea of how a lead should be handled. That shape forces a decision before you write much of anything: does every location get its own deployment, or does one system serve all of them?",
          "Per-client instances feel safer. Total isolation, no shared blast radius, and per-location customisation is trivial because nothing is shared. It's also the answer that stops working somewhere around location fifteen.",
        ],
      },
      {
        heading: "What isolation actually costs at 40 locations",
        paragraphs: [
          "Forty deployments means forty upgrade paths. A prompt fix, a bug in handoff logic, a provider SDK bump — each one is now a fleet-wide operation rather than a deploy. Forty monitoring targets, forty sets of credentials, forty places for configuration to quietly diverge until two locations behave differently and nobody can say when that started.",
          "The failure mode isn't dramatic. It's that the cost of every change scales linearly with the client count, so shipping improvements gets slower exactly as the deployment gets more successful. That's a bad gradient to be on.",
        ],
      },
      {
        heading: "Isolate the data, share the code",
        paragraphs: [
          "The approach I settled on separates two things that per-instance architecture conflates: isolation of data and isolation of code. Tenants genuinely must not see each other's conversations, leads, or calendars — that's non-negotiable. But that isolation belongs at the data layer, not in forty copies of a codebase.",
          "Supabase with row-level security enforces it where it should be enforced: at the database, as policy, rather than as a filter that every query is trusted to remember. A missing WHERE clause becomes a query that returns nothing instead of a cross-tenant leak. Number provisioning through Telnyx maps locations onto the shared system without duplicating it, and Cal.com handles per-location scheduling against each tenant's real availability.",
        ],
      },
      {
        heading: "Configuration as data, not as a fork",
        paragraphs: [
          "The piece that makes this hold up under real customisation pressure is modelling each tenant as a squad of specialised agents — reception, sales, follow-up — defined as configuration rather than code. A location that wants different qualification questions or a different handoff threshold gets a different squad definition, not a branch.",
          "That distinction is the whole architecture, really. The moment per-client behaviour lives in code, you've rebuilt per-client instances with extra steps and worse ergonomics. Keeping it as data means a new location is a row and a phone number, not a deployment.",
        ],
      },
      {
        heading: "The honest trade",
        paragraphs: [
          "Shared infrastructure means a bad deploy can affect everyone at once, and that risk is real — it's bought back with staged rollout and tenant-scoped feature flags, not wished away. Multi-tenancy is also genuinely harder to get right at the start; RLS policies are unforgiving, and the correct time to discover you've modelled tenancy wrong is not after forty locations depend on it.",
          "There's also a case where per-instance is simply correct: a client with regulatory requirements demanding physical data separation isn't negotiating, and the right answer is a dedicated deployment priced accordingly. I'd treat that as a deliberate exception, not as a reason to make it the default for everyone else.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  // Compare rather than branching on `<` alone: returning -1 for equal dates is
  // an inconsistent comparator, and posts now share a publish date.
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
