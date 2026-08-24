import type { Metadata } from "next";

export const SITE_URL = "https://builtbyusman.com";
export const SITE_NAME = "Built by Usman";
export const OG_IMAGE = "/og-image.png";

/**
 * Next.js shallow-merges metadata: a route that declares `openGraph` replaces
 * the parent's block entirely, and one that omits it inherits every field —
 * including the root `url`, which then contradicts the route's own canonical.
 * Building the block here keeps each route's og:url, og:title and og:image
 * consistent with its canonical instead of silently falling back to the root.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  imageAlt?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
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
}
