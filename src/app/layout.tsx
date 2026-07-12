import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://builtbyusman.com"),
  title,
  description,
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08090c] text-zinc-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
