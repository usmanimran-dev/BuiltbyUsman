import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { WorkListing } from "@/components/sections/work-listing";
import { getAllCaseStudies } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies | Usman Imran",
  description:
    "AI voice systems, trade finance platforms, and logistics software — what was built, what constrained it, and what it actually achieved.",
  path: "/work",
  imageAlt: "Case studies — Usman Imran",
});

export default function WorkPage() {
  const studies = getAllCaseStudies();
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <WorkListing studies={studies} />
      </main>
      <Footer />
    </>
  );
}
