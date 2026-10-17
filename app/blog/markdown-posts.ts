import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { BlogPost } from "./posts";

// Posts published by Growtiv (growtiv.iamstivai.com) land as Markdown files in
// content/blog/. Each front-matter value is JSON-encoded, one `key: value` per line.
const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function parseFrontMatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return null;
  const data: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    const raw = line.slice(i + 1).trim();
    try {
      data[line.slice(0, i).trim()] = JSON.parse(raw);
    } catch {
      data[line.slice(0, i).trim()] = raw.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: source.slice(match[0].length) };
}

const str = (v: unknown) => (typeof v === "string" ? v : "");

export function loadMarkdownPosts(): BlogPost[] {
  let files: string[];
  try {
    files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }

  return files.flatMap((file) => {
    const parsed = parseFrontMatter(readFileSync(path.join(CONTENT_DIR, file), "utf8"));
    if (!parsed) return [];
    const { data, body } = parsed;
    const slug = str(data.slug) || file.replace(/\.md$/, "");
    const words = body.split(/\s+/).filter(Boolean).length;
    const faq = Array.isArray(data.faq)
      ? data.faq.filter(
          (f): f is { question: string; answer: string } =>
            typeof f?.question === "string" && typeof f?.answer === "string",
        )
      : [];

    return [
      {
        slug,
        title: str(data.title) || slug,
        description: str(data.description) || str(data.excerpt),
        date: (str(data.date) || "1970-01-01").slice(0, 10),
        readTime: `${Math.max(1, Math.round(words / 220))} min read`,
        category: "Guide",
        content: [],
        markdown: body,
        image: str(data.image) || undefined,
        imageAlt: str(data.imageAlt) || undefined,
        faq,
      },
    ];
  });
}
