import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Usman Imran — Full Stack Developer | Fintech, Logistics & AI Systems";
const description =
  "I build production systems for banking workflows, logistics platforms, and AI-powered tools. Based in Karachi. Available for projects.";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  authors: [{ name: "Usman Imran" }],
  formatDetection: { telephone: false },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Usman Imran — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE],
  },
};

const profiles = [
  "https://github.com/usmanimran-dev",
  "https://linkedin.com/in/usman-imran-037aa0302",
];

const address = {
  "@type": "PostalAddress",
  addressLocality: "Karachi",
  addressCountry: "PK",
};

/**
 * One graph rather than three standalone blocks: the Person and the business
 * share a name, so without `@id` references search engines resolve them as two
 * unrelated entities instead of one brand. The `@id` values are also what the
 * per-post BlogPosting schema points its author/publisher at.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#usman`,
      name: "Usman Imran",
      url: SITE_URL,
      image: `${SITE_URL}/logo-master.png`,
      jobTitle: "Full Stack Developer",
      description:
        "Full stack developer building fintech, logistics, and AI-powered systems",
      address,
      email: "usman@builtbyusman.com",
      knowsAbout: [
        "AI Voice Agents",
        "Trade Finance Systems",
        "Logistics Platforms",
        "Full Stack Web Development",
      ],
      sameAs: profiles,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Usman Imran",
      url: SITE_URL,
      description:
        "AI voice agents, full stack web platforms, and forward-deployed engineering",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-master.png`,
      },
      image: `${SITE_URL}${OG_IMAGE}`,
      email: "usman@builtbyusman.com",
      address,
      areaServed: "Worldwide",
      sameAs: profiles,
      founder: { "@id": `${SITE_URL}/#usman` },
      serviceType: [
        "AI Voice Agents",
        "Full Stack Web Development",
        "Forward-Deployed Engineering",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Usman Imran — Full Stack Developer",
      url: SITE_URL,
      description:
        "Full stack developer building fintech, logistics, and AI-powered systems",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fwfiauyxxewmjyihkvql.supabase.co"
        />
        <link
          rel="dns-prefetch"
          href="https://fwfiauyxxewmjyihkvql.supabase.co"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090c] text-zinc-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="cal-embed" strategy="afterInteractive">
          {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`}
        </Script>
        {children}
      </body>
    </html>
  );
}
