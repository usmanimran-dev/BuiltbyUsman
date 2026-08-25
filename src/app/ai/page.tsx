import type { Metadata } from "next";
import { AIPage } from "@/components/sections/ai-page";
import { pageMetadata } from "@/lib/seo";
import { generateAIOG } from "@/lib/og-images";

const baseMetadata = pageMetadata({
  title: "AI Systems | Usman Imran",
  description:
    "AI-powered receptionists, voice agents, workflow automation, and integrations built for reliable business operations.",
  path: "/ai",
  imageAlt: "AI Systems by Usman Imran",
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [
      {
        url: generateAIOG(),
        width: 1200,
        height: 630,
        alt: "AI Systems by Usman Imran",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    images: [generateAIOG()],
  },
};

export default function AI() {
  return <AIPage />;
}
