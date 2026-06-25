import type { MetadataRoute } from "next";
import { clientSite } from "@/lib/client-site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clientSite.url}/sitemap.xml`,
  };
}
