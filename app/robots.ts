import type { MetadataRoute } from "next";

const siteUrl = "https://amlabs.co.ke";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/style-guide", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
