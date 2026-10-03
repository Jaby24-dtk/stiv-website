import "server-only";
import {
  BlogClient,
  type BlogArticle,
  type BlogArticleSummary,
} from "babylovegrowth-next-js-blog";
import { getPostBySlug } from "../posts";

// Articles published from BabyLoveGrowth sit alongside the hand-written posts
// in ../posts. A failing or unconfigured API must never break the build or the
// blog, so every read degrades to "no remote articles".
const client = new BlogClient({
  apiKey: process.env.BABYLOVEGROWTH_BLOG_API_KEY,
  baseUrl: process.env.BABYLOVEGROWTH_BLOG_API_URL,
  revalidate:
    process.env.NODE_ENV === "development" ? 10 : 86400,
});

const isConfigured = Boolean(process.env.BABYLOVEGROWTH_BLOG_API_KEY);

export async function getRemoteArticles(): Promise<BlogArticleSummary[]> {
  if (!isConfigured) return [];
  try {
    const articles = await client.getAllArticles();
    // Hand-written posts win on a slug collision.
    return articles.filter((article) => !getPostBySlug(article.slug));
  } catch (error) {
    console.error("[blog] Failed to load BabyLoveGrowth articles:", error);
    return [];
  }
}

export async function getRemoteArticle(
  slug: string,
): Promise<BlogArticle | null> {
  if (!isConfigured || getPostBySlug(slug)) return null;
  try {
    const article = await client.getArticleBySlug(slug);
    return article?.published ? article : null;
  } catch (error) {
    console.error(`[blog] Failed to load BabyLoveGrowth article "${slug}":`, error);
    return null;
  }
}

/** Drop script tags from the vendor HTML; the site CSP allows inline scripts. */
export function sanitizeArticleHtml(html: string): string {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "");
}
