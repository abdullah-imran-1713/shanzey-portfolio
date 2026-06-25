import type { MetadataRoute } from "next";
import { clientSite } from "@/lib/client-site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clientSite.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
