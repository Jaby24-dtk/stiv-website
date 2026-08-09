import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { divisions } from "./lib/divisions";
import { solutions } from "./lib/solutions";
import { SITE_URL } from "./lib/site";

const SITE_LAST_MODIFIED = new Date("2026-08-09");
const latestPostDate = new Date(
  Math.max(...posts.map((post) => new Date(post.date).getTime())),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified?: Date;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/solutions", changeFrequency: "weekly", priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/unified", changeFrequency: "monthly", priority: 0.7 },
    { path: "/security", changeFrequency: "monthly", priority: 0.7 },
    { path: "/integrations", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/status", changeFrequency: "weekly", priority: 0.4 },
    {
      path: "/blog",
      changeFrequency: "weekly",
      priority: 0.6,
      lastModified: latestPostDate,
    },
    { path: "/careers", changeFrequency: "weekly", priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/subprocessors", changeFrequency: "yearly", priority: 0.3 },
    ...divisions.map((division) => ({
      path: `/software/${division.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...solutions.map((solution) => ({
      path: `/solutions/${solution.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      lastModified: new Date(post.date),
    })),
  ];

  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: path ? `${SITE_URL}${path}` : `${SITE_URL}/`,
    lastModified: lastModified ?? SITE_LAST_MODIFIED,
    changeFrequency,
    priority,
    ...(path === "" ? { images: [`${SITE_URL}/opengraph-image`] } : {}),
  }));
}
