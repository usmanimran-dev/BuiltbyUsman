import type { Metadata } from "next";
import { AIPage } from "@/components/sections/ai-page";

export const metadata: Metadata = {
  title: "AI Systems | Usman Imran",
  description:
    "AI-powered receptionists, voice agents, workflow automation, and integrations built for reliable business operations.",
  alternates: { canonical: "https://builtbyusman.com/ai" },
};

export default function AI() {
  return <AIPage />;
}
