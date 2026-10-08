import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://balkrishnainfotech.com";

  return [
    {
      url: `${base}/`,
      lastModified: "2026-10-08",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
