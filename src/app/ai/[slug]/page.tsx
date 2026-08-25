import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ServicePageView } from "@/components/sections/service-page";
import { getAllServices, getServiceBySlug } from "@/lib/services";
import { SITE_URL, pageMetadata } from "@/lib/seo";
import { generateServiceOG } from "@/lib/og-images";

export async function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const metadata = pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/ai/${service.slug}`,
    imageAlt: service.heading,
  });

  // Override with service-specific OG image
  if (metadata.openGraph) {
    metadata.openGraph.images = [
      {
        url: generateServiceOG(service.title),
        width: 1200,
        height: 630,
        alt: service.heading,
      },
    ];
  }
  if (metadata.twitter) {
    metadata.twitter.images = [generateServiceOG(service.title)];
  }

  return metadata;
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heading,
    description: service.metaDescription,
    serviceType: service.title,
    url: `${SITE_URL}/ai/${service.slug}`,
    image: generateServiceOG(service.title),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <ServicePageView service={service} />
      </main>
      <Footer />
    </>
  );
}
