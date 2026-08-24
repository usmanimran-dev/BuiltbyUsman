import type { Metadata } from "next";
import { AIPage } from "@/components/sections/ai-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Systems | Usman Imran",
  description:
    "AI-powered receptionists, voice agents, workflow automation, and integrations built for reliable business operations.",
  path: "/ai",
  imageAlt: "AI Systems by Usman Imran",
});

export default function AI() {
  return <AIPage />;
}
