import type { MetadataRoute } from "next";
import { longTailPages, longTailPath } from "@/data/long-tail";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/codes", changeFrequency: "daily", priority: 0.95 },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.9 },
  { path: "/trello", changeFrequency: "weekly", priority: 0.72 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/beginner", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/cash", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/upgrades", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/keyboard", changeFrequency: "weekly", priority: 0.78 },
  { path: "/wiki", changeFrequency: "weekly", priority: 0.8 },
  { path: "/wiki/paints", changeFrequency: "weekly", priority: 0.76 },
  { path: "/wiki/roller", changeFrequency: "weekly", priority: 0.76 },
  { path: "/wiki/cash", changeFrequency: "weekly", priority: 0.76 },
  { path: "/wiki/keyboard", changeFrequency: "weekly", priority: 0.76 },
  { path: "/updates", changeFrequency: "daily", priority: 0.75 },
  { path: "/sources", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/disclosure", changeFrequency: "monthly", priority: 0.3 }
];

const longTailRoutes = longTailPages.map((page) => ({
  path: longTailPath(page),
  changeFrequency: "weekly" as const,
  priority: page.section === "guides" ? 0.74 : 0.7
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return [...routes, ...longTailRoutes]
    .map((route) => ({
      url: `${siteConfig.domain}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}
