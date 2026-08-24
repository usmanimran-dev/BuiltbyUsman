export type Service = {
  slug: string;
  /** Short label used in the /ai services list. */
  title: string;
  listDescription: string;
  /** Page fields. */
  heading: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  whoItIsFor: string[];
  problem: string[];
  sections: { heading: string; paragraphs: string[] }[];
  deliverables: string[];
  timeline: string;
  notRightIf: string[];
  relatedCaseStudy?: { slug: string; label: string };
  relatedPost?: { slug: string; label: string };
};

export const services: Service[] = [
  {
    slug: "workflow-automation",
    title: "Workflow Automation & AI Integration",
    listDescription:
      "Automate your business operations to scale your output not your costs.",
    heading: "Workflow Automation & AI Integration",
    summary:
      "Connecting the systems you already run so work moves between them without someone copying it across by hand.",
    metaTitle: "Workflow Automation & AI Integration | Usman Imran",
    metaDescription:
      "Automating operational workflows across the systems a business already runs — CRM, calendar, database, and messaging — so work moves without manual re-entry.",
    whoItIsFor: [
      "Teams re-entering the same data into two or three systems",
      "Operations that stall because a step waits on someone noticing it",
      "Businesses whose tools each work fine but do not talk to each other",
    ],
    problem: [
      "Most operational drag is not caused by any single tool being bad. It is caused by the gaps between them — a form submission that someone has to read and retype into a CRM, a booking that has to be manually reflected on a calendar, a status change nobody downstream hears about until they ask.",
      "Automation work is mostly about closing those gaps. The interesting part is rarely the automation itself; it is deciding which steps genuinely should be automatic and which ones exist because a person needs to make a judgement call.",
    ],
    sections: [
      {
        heading: "What the work involves",
        paragraphs: [
          "It starts with mapping the workflow as it actually runs, not as the process document says it runs. Those differ more often than not, and automating the documented version of a process that nobody follows produces a system people route around.",
          "From there the automation is built against the systems you already use — APIs, webhooks, databases, and the automation tooling that connects them. The aim is that the software you have keeps working and stops requiring a person to carry data between the parts of it.",
        ],
      },
      {
        heading: "Where AI belongs, and where it does not",
        paragraphs: [
          "A lot of workflow steps do not need AI at all. A rule that routes a request based on a field is a rule; wrapping a language model around it makes it slower, more expensive, and less predictable for no gain.",
          "AI earns its place where a step requires interpreting something unstructured — classifying a free-text request, extracting fields from a document, summarising a conversation into a record. Those are genuinely hard to do with rules, and they are where the integration work pays for itself.",
        ],
      },
    ],
    deliverables: [
      "A mapped view of the workflow as it currently runs",
      "The automation built and connected to your existing systems",
      "Documentation of what runs automatically and what still needs a person",
      "Handover so your team can operate it without me",
    ],
    timeline: "Most workflow automations go live in 1–2 weeks depending on scope.",
    notRightIf: [
      "The process is still changing week to week — automate it once it settles",
      "The real problem is that nobody agrees what the process should be",
    ],
    relatedCaseStudy: { slug: "hbl-trade-finance", label: "Trade Finance Systems — HBL" },
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbot & Conversation Systems",
    listDescription:
      "Instant response system across multiple communication channels to answer every customer.",
    heading: "AI Chatbot & Conversation Systems",
    summary:
      "Conversational systems that answer customers across chat, WhatsApp, and web — and hand off to a person when they should.",
    metaTitle: "AI Chatbot & Conversation Systems | Usman Imran",
    metaDescription:
      "Building AI chat and conversation systems across web, WhatsApp, and messaging channels — grounded in your own content, with human handoff built in.",
    whoItIsFor: [
      "Businesses answering the same questions repeatedly across channels",
      "Teams losing enquiries that arrive outside working hours",
      "Companies running separate tools per channel that share no context",
    ],
    problem: [
      "The common failure is not that a chatbot cannot answer questions. It is that it answers confidently when it should not, or that it traps someone who needed a person from the start.",
      "The second failure is fragmentation: a widget on the website, something else on WhatsApp, and no shared memory between them. A customer who switches channel starts over, which is worse than having no automation at all because it wastes a conversation that was already going well.",
    ],
    sections: [
      {
        heading: "Grounded in your content, not general knowledge",
        paragraphs: [
          "A conversation system for a business should answer from that business's actual material — its services, policies, availability, and records — rather than from a model's general knowledge. That means building a retrieval layer over your content so answers trace back to something real.",
          "It also means the system should be able to say it does not know. An answer of \"let me get someone who can tell you properly\" is a good outcome; a confident wrong answer about a price or a policy is not.",
        ],
      },
      {
        heading: "Handoff as a first-class step",
        paragraphs: [
          "Every conversation system I build has an explicit route to a person, and the threshold for taking it is set deliberately rather than left as a fallback. Anything ambiguous, sensitive, or commercially significant should reach someone who can own it.",
          "The handoff carries context. Whoever picks it up sees what was already discussed rather than starting the conversation again, which is the part that decides whether customers experience the automation as helpful or as an obstacle.",
        ],
      },
    ],
    deliverables: [
      "A conversation system deployed on the channels you actually use",
      "A retrieval layer over your own content so answers are grounded",
      "Configured handoff rules and routing to your team",
      "Documentation and handover",
    ],
    timeline: "Most chatbot builds go live in 1–2 weeks depending on scope.",
    notRightIf: [
      "You need it to give regulated advice — that needs a qualified person",
      "There is no content or policy for it to ground answers in yet",
    ],
    relatedCaseStudy: { slug: "loop-agent", label: "Loop Agent" },
    relatedPost: { slug: "building-loop-agent", label: "Building Loop Agent: One Worker, Every Channel" },
  },
  {
    slug: "digital-fte",
    title: "Digital FTEs (AI Employees)",
    listDescription:
      "An AI worker scoped like a role — one workflow, owned end to end, around the clock.",
    heading: "Digital FTEs (AI Employees)",
    summary:
      "An AI worker scoped like a job description rather than a product: one defined role, owned end to end, with an explicit handoff path to a person.",
    metaTitle: "Digital FTE — AI Employees | Usman Imran",
    metaDescription:
      "Building Digital FTEs: AI workers scoped like a role rather than a tool, covering one workflow end to end with human handoff built in.",
    whoItIsFor: [
      "Roles that are mostly one repeatable workflow at high volume",
      "Work that needs covering outside a single shift",
      "Teams where hiring for a narrow role is hard to justify but the work is real",
    ],
    problem: [
      "FTE — Full-Time Equivalent — is an HR term for one full-time worker's worth of output. A Digital FTE borrows the framing deliberately: instead of pitching AI as a feature bolted onto existing software, it is scoped like a role, with responsibilities written the way a job description is written.",
      "That changes what it gets compared against. Software is judged against other software — price per seat, feature count. A role is judged against a hire: what would this cost as a person, how long until they are productive, and how consistent is the output once they are.",
    ],
    sections: [
      {
        heading: "Where the comparison holds",
        paragraphs: [
          "Availability is the clearest difference and it is structural rather than a performance claim: a role covers roughly forty hours a week before overtime becomes a conversation, and a Digital FTE runs the same on a Sunday at 3am.",
          "Ramp-up is the second. Hiring, onboarding, and reaching full productivity on a defined workflow routinely takes three to six months. A scoped Digital FTE build is typically 2–4 weeks, because the training is a build process rather than a person learning on the job.",
          "Consistency is the third and the most double-edged. A tired employee on their fortieth call is a different employee than on their fifth. A Digital FTE handles call five hundred the way it handled call one — which is an advantage only if the role was scoped correctly in the first place.",
        ],
      },
      {
        heading: "Where it does not",
        paragraphs: [
          "A Digital FTE is a specialist for one workflow, not a general employee. Ask it to cover too much and you get the AI equivalent of a bad hire: present, and unreliable in exactly the moments that matter.",
          "It also does not remove the need for human judgement on anything genuinely ambiguous or sensitive. Every build has an explicit handoff path to a person for that reason. The goal is to absorb the repeatable majority of a role, not to pretend the rest does not need someone.",
        ],
      },
    ],
    deliverables: [
      "A written scope for the role, agreed before anything is built",
      "The Digital FTE built, integrated, and tested against real scenarios",
      "Defined handoff rules and escalation paths",
      "Documentation and ongoing iteration if you want it",
    ],
    timeline: "A full Digital FTE build is usually 2–4 weeks depending on scope.",
    notRightIf: [
      "The role genuinely needs broad judgement across unpredictable situations",
      "The workflow is not defined well enough to write down yet",
    ],
    relatedCaseStudy: { slug: "byd-automotive-ai", label: "Automotive AI Operations — BYD" },
    relatedPost: { slug: "what-is-a-digital-fte", label: "What a Digital FTE Actually Replaces" },
  },
  {
    slug: "domain-specific-ai",
    title: "Domain Specific AI Products",
    listDescription:
      "Custom-fit AI solutions designed for your exact industry needs to fulfill your requirements.",
    heading: "Domain Specific AI Products",
    summary:
      "AI products built around one industry's actual constraints — its terminology, its compliance requirements, and the systems it already runs on.",
    metaTitle: "Domain Specific AI Products | Usman Imran",
    metaDescription:
      "Custom AI products built for a specific industry's constraints — regulated workflows, domain terminology, and integration with the systems already in place.",
    whoItIsFor: [
      "Industries where generic AI tooling misses the domain vocabulary",
      "Regulated sectors where a general tool cannot meet the requirements",
      "Businesses whose workflow is specific enough that off-the-shelf does not fit",
    ],
    problem: [
      "General-purpose AI tools are built for the average case, which means they are built for nobody in particular. In a domain with its own vocabulary, its own document types, and its own rules about what may be automated, that gap shows up immediately.",
      "Trade finance is a clear example: an instrument has a precise legal meaning, documents are examined against stated terms, and screening is a regulatory requirement rather than a feature. A tool that does not model any of that is not slightly wrong, it is unusable.",
    ],
    sections: [
      {
        heading: "Starting from the constraints",
        paragraphs: [
          "Domain work starts by establishing what is actually non-negotiable — which steps are regulated, which records are auditable, what has to be retained and for how long, and where a human decision is legally or practically required.",
          "Those constraints determine the architecture rather than being retrofitted onto it. A screening step that blocks a workflow has to be modelled as a real state, not as a check that can be skipped when it is inconvenient.",
        ],
      },
      {
        heading: "Building on the systems already in place",
        paragraphs: [
          "Domain-specific work almost always means integrating with established systems rather than replacing them. In practice that is contract work in the unglamorous sense: agreeing precisely what each side sends, what it means, and what happens on every path that is not the happy one.",
          "This is where my enterprise background does most of the work — the trade finance systems I have built ran against established banking products under a bank's release process, which is a very different problem from building on a blank page.",
        ],
      },
    ],
    deliverables: [
      "A documented view of the domain constraints the system must respect",
      "The product built and integrated with existing systems",
      "Interface contracts and data-mapping documentation",
      "Handover with the boundaries written down",
    ],
    timeline: "Scoped per project — domain work varies too much for a standard range.",
    notRightIf: [
      "An off-the-shelf tool already covers the workflow adequately",
      "The regulatory position on automating the workflow is still unresolved",
    ],
    relatedCaseStudy: { slug: "hbl-trade-finance", label: "Trade Finance Systems — HBL" },
    relatedPost: { slug: "stored-procedures-trade-finance", label: "In Defence of Stored Procedures" },
  },
  {
    slug: "mobile-web-development",
    title: "Mobile & Web Development",
    listDescription:
      "We develop modern, AI-powered apps and websites built to convert and scale.",
    heading: "Mobile & Web Development",
    summary:
      "Production mobile and web applications — the kind that stay running under real load, not prototypes that demo well.",
    metaTitle: "Mobile & Web Development | Usman Imran",
    metaDescription:
      "Full stack mobile and web development — Flutter apps, Next.js and Angular dashboards, and Node.js backends built for production load.",
    whoItIsFor: [
      "Products needing both a mobile app and an operational dashboard",
      "Teams whose prototype now has to hold up under real usage",
      "Businesses needing real-time features that survive poor connectivity",
    ],
    problem: [
      "The gap between an application that demonstrates well and one that runs in production is mostly made of conditions that do not show up in a demo — unreliable networks, concurrent load, and the state a system finds itself in after running for a month.",
      "Most of the engineering effort in a real product goes into those conditions rather than into the features themselves, and a build that has not accounted for them tends to fail in its first genuinely busy week.",
    ],
    sections: [
      {
        heading: "What I build with",
        paragraphs: [
          "Flutter for mobile where one codebase should serve more than one audience; Next.js and Angular for web dashboards where operators need density and oversight; Node.js services behind them; and AWS for the infrastructure they run on.",
          "The Swifpack platform for Tanzania Posts is the clearest example — two Flutter apps, two web dashboards, Node.js services handling real-time transaction load, and an MQTT and Firebase layer built specifically because drivers were on mobile networks that dropped out for minutes at a time.",
        ],
      },
      {
        heading: "Designed around the failure cases",
        paragraphs: [
          "The decisions that matter most in a production build are usually about what happens when something is unavailable. Choosing a protocol because it already answers reconnection and offline detection, or separating a live stream from durable state so a cold start is not an empty screen, are the kinds of choices that decide whether a system feels reliable.",
          "That is the same discipline whether the product is a logistics platform or an internal tool. It is also the part that is invisible when everything is working, which is rather the point.",
        ],
      },
    ],
    deliverables: [
      "The application built, deployed, and running on your infrastructure",
      "Real-time features where the product needs them",
      "Infrastructure setup and deployment",
      "Documentation and handover",
    ],
    timeline: "Scoped per project depending on surface area and integrations.",
    notRightIf: [
      "You need a simple marketing site — that does not need this depth",
      "The product requirements are not settled enough to build against",
    ],
    relatedCaseStudy: { slug: "swifpack-logistics", label: "Swifpack Logistics Platform" },
    relatedPost: { slug: "mqtt-vs-websockets-gps-tracking", label: "Why MQTT and Not WebSockets for Live GPS" },
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
