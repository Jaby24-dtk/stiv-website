import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: ["Googlebot", "Googlebot-Image"],
        allow: "/",
        disallow: "/api/",
      },
      // Explicitly welcome AI answer/generative engines so STIV can be
      // cited and summarized in AI search — GEO relies on these crawlers
      // reaching the same content as regular search bots.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // No `host`: it emits a non-standard "Host:" line (Yandex-only) that
    // Bing's robots.txt tester reports as an error. The canonical www
    // domain is already set by redirects and canonical tags.
  };
}
