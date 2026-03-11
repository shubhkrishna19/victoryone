import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";

function toAbsolute(url: string) {
  return new URL(url, SITE_URL).toString();
}

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const image = input.image ? toAbsolute(input.image) : undefined;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: toAbsolute(input.path),
      siteName: "VictoryOne",
      images: image ? [{ url: image }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: image ? [image] : undefined,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VictoryOne",
    url: SITE_URL,
    logo: toAbsolute("/legacy/theme-images/logo.png"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9210992922",
        contactType: "sales",
        email: "info@victoryone.in",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VictoryOne",
    url: SITE_URL,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsolute(item.path),
    })),
  };
}

export function articleLikeSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    image: [toAbsolute(input.image)],
    url: toAbsolute(input.path),
    publisher: organizationSchema(),
  };
}
