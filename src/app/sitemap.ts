import type { MetadataRoute } from "next";

const base = "https://alidemirbas.com.tr";
const routes = ["", "/about", "/content", "/stack", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
