import type { MetadataRoute } from "next";
import { getPortfolioSlugs } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${siteConfig.url}/selectedworks`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/catalogue`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const workRoutes: MetadataRoute.Sitemap = getPortfolioSlugs().map((slug) => ({
    url: `${siteConfig.url}/selectedworks/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...workRoutes];
}
