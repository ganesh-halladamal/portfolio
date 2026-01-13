import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/contact"].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Add project pages if you have individual project pages
  // const projectRoutes = projects.map((project) => ({
  //   url: `${SITE_CONFIG.url}/projects/${project.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [...routes];
}
