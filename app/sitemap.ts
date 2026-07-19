import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://teamwaleed.org";

  const routes = [
    "",
    "/about",
    "/meet-waleed",
    "/mps-iv",
    "/resources",
    "/research",
    "/news",
    "/support",
    "/donate",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}