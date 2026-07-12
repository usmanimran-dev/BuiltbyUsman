import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
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
  metadataBase: new URL("https://builtbyusman.com"),
  title,
  description,
  authors: [{ name: "Usman Imran" }],
  formatDetection: { telephone: false },
  alternates: {
    canonical: "https://builtbyusman.com",
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
    url: "https://builtbyusman.com",
    siteName: "Built by Usman",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Usman Imran",
  url: "https://builtbyusman.com",
  jobTitle: "Full Stack Developer",
  description:
    "Full stack developer building fintech, logistics, and AI-powered systems",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/usmanimran-dev",
    "https://linkedin.com/in/usman-imran-037aa0302",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Usman Imran — Full Stack Developer",
  url: "https://builtbyusman.com",
  description:
    "Full stack developer building fintech, logistics, and AI-powered systems",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Usman Imran",
  url: "https://builtbyusman.com",
  description:
    "AI voice agents, full stack web platforms, and forward-deployed engineering",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  serviceType: [
    "AI Voice Agents",
    "Full Stack Web Development",
    "Forward-Deployed Engineering",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
