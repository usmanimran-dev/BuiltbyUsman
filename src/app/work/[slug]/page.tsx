import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CaseStudyView } from "@/components/sections/case-study";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { SITE_URL, pageMetadata } from "@/lib/seo";
import { generateCaseStudyOG } from "@/lib/og-images";

export async function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  const metadata = pageMetadata({
    title: `${study.title} — ${study.client} | Usman Imran`,
    description: study.summary,
    path: `/work/${study.slug}`,
    type: "article",
    imageAlt: `${study.title} — ${study.client}`,
  });

  // Override with case-study-specific OG image
  if (metadata.openGraph) {
    metadata.openGraph.images = [
      {
        url: generateCaseStudyOG(study.client, study.sector),
        width: 1200,
        height: 630,
        alt: `${study.title} — ${study.client}`,
      },
    ];
  }
  if (metadata.twitter) {
    metadata.twitter.images = [generateCaseStudyOG(study.client, study.sector)];
  }

  return metadata;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.title} — ${study.client}`,
    description: study.summary,
    keywords: study.tags.join(", "),
    image: generateCaseStudyOG(study.client, study.sector),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/work/${study.slug}`,
    },
    author: { "@id": `${SITE_URL}/#usman` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: study.sector,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <CaseStudyView study={study} />
      </main>
      <Footer />
    </>
  );
}
