export type ProjectCategory = "automation" | "web" | "mobile" | "shopify" | "archive";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  /** Filename to drop into /public/projects once the user supplies it. */
  expectedImage?: string;
  live?: string;
  github?: string;
  category: ProjectCategory[];
  hidden?: boolean;
}

export const categoryLabels: Record<Exclude<ProjectCategory, "archive">, string> = {
  automation: "Automation",
  web: "Web Apps",
  mobile: "Mobile Apps",
  shopify: "Shopify",
};

export const projects: Project[] = [
  // AUTOMATION
  {
    id: 20260529,
    title: "Omni Agent — AI Fleet of Automation",
    description:
      "Four coordinated AI agents that answer every call, qualify every lead, book every appointment, and follow up automatically — 24/7, in 21+ languages.",
    tags: ["Next.js 14", "Supabase", "Vapi AI", "TypeScript", "Tailwind CSS", "Recharts"],
    image: null,
    expectedImage: "/projects/omni-agent-dashboard.png",
    live: "https://www.developersofchicago.com/omni-agent",
    category: ["automation"],
  },
  {
    id: 20250807,
    title: "AI Email Auto-Reply — n8n Automation",
    description:
      "A smart, fully automated email response system using n8n, GPT, and Gmail API to save time and ensure professional responses.",
    tags: ["n8n", "AI", "Automation"],
    image: null,
    expectedImage: "/projects/videon8n.png",
    live: "https://vimeo.com/1107894672?share=copy#t=0",
    category: ["automation"],
  },
  {
    id: 6,
    title: "FlowNest — AI Project Manager",
    description:
      "AI-powered internal tool for project management, engineered with Bubble.io's advanced logic engine.",
    tags: ["Bubble.io", "AI", "Management"],
    image: null,
    expectedImage: "/projects/flow.png",
    live: "https://demo-app-63324.bubbleapps.io/version-test/?&v=projects",
    category: ["automation"],
  },
  {
    id: 20260221,
    title: "Diamond Sync Engine — B2B Shopify Integration",
    description:
      "A custom Node.js desktop engine that bridges a B2B diamond supplier API to Shopify. Auto-syncs 1,200+ products daily with 60+ metafields, custom OAuth, and zero cloud hosting costs.",
    tags: ["Node.js", "Shopify API", "Automation"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/WhatsApp%20Image%202026-02-21%20at%207.14.23%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9XaGF0c0FwcCBJbWFnZSAyMDI2LTAyLTIxIGF0IDcuMTQuMjMgUE0uanBlZyIsImlhdCI6MTc3MjAzNTI4NCwiZXhwIjoxODAzNTcxMjg0fQ.m3IUjzIuOCXRRl3pLEjrstbMiLFRRy7UzbCNGH2nlpQ",
    live: "https://github.com/usmanimran-dev/CGD-API-Project",
    github: "https://github.com/usmanimran-dev/CGD-API-Project",
    category: ["automation"],
  },

  // WEB APPS
  {
    id: 20260327,
    title: "Restaurant ERP & POS — Multi-Tenant SaaS",
    description:
      "A modern, multi-tenant Restaurant Management SaaS platform built with Flutter Web and Supabase. Complete ERP and POS solution with dynamic module control, role-based permissions, and secure data isolation.",
    tags: ["Flutter", "Supabase", "ERP"],
    image: null,
    expectedImage: "/projects/restaurant-erp.png",
    category: ["web"],
  },
  {
    id: 20260129,
    title: "Smart Pump — IoT Telemetry & ERP",
    description:
      "A secure ERP system for fuel stations that monitors real-time transaction pipelines to prevent revenue loss.",
    tags: ["Angular", "Supabase", "IoT"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-29%20220645.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMjkgMjIwNjQ1LnBuZyIsImlhdCI6MTc3MTg3OTM4NiwiZXhwIjoxODAzNDE1Mzg2fQ.7s7Y_XInBw1mi_QiiHKVJIWPWlELnxMfaK7e6U3LlVw",
    live: "https://smart-pump-2eyt.vercel.app/login",
    github: "https://github.com/usmanimran-dev/SmartPump",
    category: ["web"],
  },
  {
    id: 20260130,
    title: "Velora — Dating Discovery App",
    description:
      "A modern, secure dating platform featuring real-time matching and encrypted communication channels.",
    tags: ["Angular", "Firebase", "Logic"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035558.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NTU4LnBuZyIsImlhdCI6MTc3MTg3OTQyOSwiZXhwIjoxODAzNDE1NDI5fQ.4kGdL9utvVG8wS-08P1m3cx6SgXtcoMPmeJABUBM8bY",
    live: "https://datingapp-arxi.vercel.app/signup",
    github: "https://github.com/usmanimran-dev/datingapp",
    category: ["web", "mobile"],
  },
  {
    id: 20260131,
    title: "Yelo Search — Market Discovery Engine",
    description:
      "A high-performance indexing engine for local market intelligence, optimized for low-latency search and data retrieval.",
    tags: ["React", "Cloud", "SEO"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035500.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NTAwLnBuZyIsImlhdCI6MTc3MTg3OTQ1MCwiZXhwIjoxODAzNDE1NDUwfQ.owfuUOWWmbTdUR1UeW1ZsnxBcjkmYen4hg_HHAZ5XOo",
    live: "https://pakistan-finds-red.vercel.app/",
    github: "https://github.com/usmanimran-dev/pakistan-finds-red",
    category: ["web"],
  },
  {
    id: 20260132,
    title: "Zyfloatix — Digital Treasury Ecosystem",
    description:
      "A high-fidelity platform for digital asset firms, featuring encrypted data visualization and ultra-modern terminal aesthetics.",
    tags: ["Next.js", "Framer", "Tailwind"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-01-30%20035422.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDEtMzAgMDM1NDIyLnBuZyIsImlhdCI6MTc3MTg3OTQ3MywiZXhwIjoxODAzNDE1NDczfQ.eFbN5eP05R6asL0-AhaQ_etaNZ4qnqR3mRf0XiBf6OA",
    live: "https://usmanimran.vercel.app/",
    github: "https://github.com/usmanimran-dev/UsmanImran",
    category: ["web"],
  },
  {
    id: 20260312,
    title: "I See You Now — Storytelling Platform",
    description:
      "A mission-driven storytelling platform and studio to let people authentically share who they truly are and to protect human creativity and authenticity in the age of AI.",
    tags: ["Platform", "Storytelling", "AI"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-03-12%20113355.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDMtMTIgMTEzMzU1LnBuZyIsImlhdCI6MTc3MzI5NzQ1MSwiZXhwIjoxODA0ODMzNDUxfQ._qshMrvM5kDM2yA30cySmzaMjuRGCO1BuNhVWgOPCJk",
    live: "https://iseeyounow.org/",
    category: ["web"],
  },
  {
    id: 20260313,
    title: "Bismillah Caters — Catering Service Platform",
    description:
      "A premium catering platform for weddings and corporate events, focused on delivering high-quality, fresh halal food with diverse menu options.",
    tags: ["Next.js", "Catering", "Events"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-03-12%20113432.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDMtMTIgMTEzNDMyLnBuZyIsImlhdCI6MTc3MzI5NzUxNSwiZXhwIjoxNzc1ODg5NTE1fQ.dxphjYuqdoSQ7rlWUQxOjCFqeFAMxDGy9QKoiXIFqj4",
    live: "https://www.bismillahcaters.com/",
    category: ["web"],
  },
  {
    id: 999,
    title: "BECM Solana — NFT Marketplace",
    description:
      "A decentralized marketplace on Solana for minting and trading digital collectibles with real-time Phantom Wallet integration.",
    tags: ["Solana", "Rust", "NFT"],
    image: null,
    expectedImage: "/projects/solana.jpeg",
    live: "https://github.com/usmanimran-dev/Master",
    github: "https://github.com/usmanimran-dev/Master",
    category: ["web"],
  },
  {
    id: 11,
    title: "Solana CRUD — dApp Journal",
    description:
      "A decentralized journal app built on Solana using Anchor, allowing users to store data directly on-chain.",
    tags: ["Solana", "Rust", "dApp"],
    image: null,
    expectedImage: "/projects/solana.jpeg",
    live: "https://github.com/usmanimran-dev/CRUD-Dapp-Project-Solana",
    github: "https://github.com/usmanimran-dev/CRUD-Dapp-Project-Solana",
    category: ["web"],
  },

  // MOBILE APPS
  {
    id: 20260225,
    title: "NGO Assist — Aid Distribution Platform",
    description:
      "A full-stack aid distribution platform using Flutter (Web & Mobile), Node.js, and Prisma. Manages beneficiary registration, verification workflows, vendor-based assistance redemption, and audit monitoring with role-based access control.",
    tags: ["Flutter", "Node.js", "Prisma"],
    image:
      "https://oxputeaplbndzolsnyto.supabase.co/storage/v1/object/sign/Usman%20Imran/Screenshot%202026-02-25%20204034.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmIzYmExMi1hYzlhLTQ3YTQtOTNkNS0xYTEyMzE4NTM4NTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJVc21hbiBJbXJhbi9TY3JlZW5zaG90IDIwMjYtMDItMjUgMjA0MDM0LnBuZyIsImlhdCI6MTc3MjAzNDI1MywiZXhwIjoxODAzNTcwMjUzfQ.NV-sbWkxZb15E2zX83ZHuUzoBiPJ1d9eRpIb_JLxOIQ",
    live: "https://ngo.virtuohr.com",
    category: ["mobile"],
  },
  {
    id: 5,
    title: "Cartistan — Grocery Delivery",
    description:
      "On-demand grocery delivery application prototype built with Bubble.io for rapid deployment and scale.",
    tags: ["Bubble.io", "Delivery", "UX"],
    image: null,
    expectedImage: "/projects/cartistan.png",
    live: "https://cartistan-73886.bubbleapps.io/version-test",
    category: ["mobile"],
  },

  // SHOPIFY
  {
    id: 20250813,
    title: "Green Vitality Bali — Wellness Shopify Store",
    description:
      "A wellness-focused Shopify store offering organic supplements with a clean, eco-conscious design for health-conscious customers.",
    tags: ["Shopify", "E-commerce", "Wellness"],
    image: null,
    expectedImage: "/projects/green.png",
    live: "https://www.greenvitality-bali.com/",
    category: ["shopify"],
  },
  {
    id: 131,
    title: "Kaycee's Premium — Luxury Personal Care",
    description:
      "An elegant Shopify site for luxury wellness products, featuring high-quality displays and seamless navigation.",
    tags: ["Shopify", "E-commerce", "Luxury"],
    image: null,
    expectedImage: "/projects/keye.png",
    live: "https://www.kayceespremium.com/",
    category: ["shopify"],
  },
  {
    id: 1,
    title: "Dawood Super Store — Shopify Grocery",
    description:
      "A comprehensive Shopify-based grocery platform optimized for everyday essentials and high-volume traffic.",
    tags: ["Shopify", "E-commerce", "Liquid"],
    image: null,
    expectedImage: "/projects/dawood.png",
    live: "https://dawoodsuperstore.myshopify.com/",
    category: ["shopify"],
  },
  {
    id: 10,
    title: "RHS Wellness — Natural Health Shop",
    description:
      "High-quality, doctor-recommended supplements supported by a science-focused Shopify storefront.",
    tags: ["Shopify", "Health", "Wellness"],
    image: null,
    expectedImage: "/projects/rhs.png",
    live: "https://shoprhswellness.com/",
    category: ["shopify"],
  },
  {
    id: 23,
    title: "Cocoba Chocolate — UK Gourmet E-com",
    description:
      "Elegant Shopify customization for a UK-based chocolate brand, focusing on intuitive product presentation.",
    tags: ["Shopify", "Gourmet", "UI/UX"],
    image: null,
    expectedImage: "/projects/coco.png",
    live: "https://www.cocobachocolate.com/collections/hot-chocolate-bombs",
    category: ["shopify"],
  },
  {
    id: 22,
    title: "Totkay.com — Wellness Blog",
    description:
      "A wellness and lifestyle blog sharing natural home remedies in Urdu and English using a clean Shopify platform.",
    tags: ["Shopify", "Blog", "Wellness"],
    image: null,
    expectedImage: "/projects/totky.png",
    live: "https://totkay.com/",
    category: ["shopify"],
  },
  {
    id: 2,
    title: "Libaas By RM — Fashion Retail",
    description:
      "Modern fashion storefront built on Shopify with a focus on high-fidelity visual presentation and mobile optimization.",
    tags: ["Shopify", "Fashion", "Liquid"],
    image: null,
    expectedImage: "/projects/libas.png",
    live: "https://libaasbyrm.myshopify.com/",
    category: ["shopify"],
  },

  // ARCHIVE — hidden from filter tabs
  {
    id: 1000,
    title: "LinkedIn Clone (Archived)",
    description:
      "A professional-grade social network engine developed using Bubble.io, with secure messaging and advanced job board logic.",
    tags: ["Bubble.io", "No-Code", "Social Engine"],
    image: null,
    expectedImage: "/projects/linkedin.png",
    live: "https://bubble.io/page?id=linkedin-16318&tab=Design&name=index",
    category: ["archive"],
    hidden: true,
  },
];

export const visibleProjects = projects.filter((p) => !p.hidden);
