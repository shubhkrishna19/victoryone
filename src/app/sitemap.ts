import type { MetadataRoute } from "next";

import { businesses } from "@/content/businesses";
import { projects } from "@/content/projects";
import { globalSettings } from "@/content/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/businesses",
    "/projects",
    "/leadership",
    "/awards",
    "/media",
    "/events",
    "/careers",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/thank-you",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${globalSettings.siteUrl}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...businesses.map((business) => ({
      url: `${globalSettings.siteUrl}/businesses/${business.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `${globalSettings.siteUrl}/projects/${project.slug}`,
      changeFrequency: "weekly" as const,
      priority: project.isFeatured ? 0.9 : 0.6,
    })),
  ];
}
