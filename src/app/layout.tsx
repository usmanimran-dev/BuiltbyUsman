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

export const metadata: Metadata = {
  metadataBase: new URL("https://builtbyusman.com"),
  title: "Usman Imran — Full stack developer",
  description:
    "Full stack developer building fintech, logistics, and AI-powered systems. Based in Karachi.",
  openGraph: {
    title: "Usman Imran — Full stack developer",
    description:
      "Full stack developer building fintech, logistics, and AI-powered systems.",
    url: "https://builtbyusman.com",
    siteName: "Built by Usman",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Imran — Full stack developer",
    description:
      "Full stack developer building fintech, logistics, and AI-powered systems.",
  },
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
        {children}
      </body>
    </html>
  );
}
