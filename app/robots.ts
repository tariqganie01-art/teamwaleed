import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contact-success"],
    },
    sitemap: "https://teamwaleed.org/sitemap.xml",
    host: "https://teamwaleed.org",
  };
}