import { readdir, readFile, writeFile } from "node:fs/promises";

const SITE_URL = "https://www.iamstivai.com";
const POSTS_SOURCE = "app/blog/posts.ts";
const LLMS_TXT = "public/llms.txt";
const MARKDOWN_DIR = "content/blog";

const STRING = `"((?:[^"\\\\]|\\\\.)*)"`;
const POST_HEADER = new RegExp(
  `slug:\\s*${STRING},\\s*title:\\s*${STRING},\\s*description:\\s*${STRING},`,
  "gs",
);

function unescape(value) {
  return value.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

function extractPosts(source) {
  return [...source.matchAll(POST_HEADER)].map(([, slug, title, description]) => ({
    slug,
    title: unescape(title),
    description: unescape(description),
  }));
}

// Growtiv-published posts: JSON-encoded front-matter values in content/blog/*.md.
async function extractMarkdownPosts(known) {
  const files = await readdir(MARKDOWN_DIR).catch(() => []);
  const posts = [];
  for (const file of files.filter((f) => f.endsWith(".md")).sort()) {
    const source = await readFile(`${MARKDOWN_DIR}/${file}`, "utf8");
    const front = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
    const field = (key) => {
      const raw = front.match(new RegExp(`^${key}:\\s*(.*)$`, "m"))?.[1];
      if (!raw) return "";
      try {
        return JSON.parse(raw);
      } catch {
        return raw;
      }
    };
    const slug = field("slug") || file.replace(/\.md$/, "");
    if (known.has(slug)) continue;
    posts.push({ slug, title: field("title") || slug, description: field("description") || field("excerpt"), date: field("date") });
  }
  return posts.sort((a, b) => String(a.date).localeCompare(String(b.date)));
}

function renderBlogSection(posts) {
  const lines = posts.map(
    (post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`,
  );
  return `## Blog\n\n${lines.join("\n")}\n`;
}

const postsSource = await readFile(POSTS_SOURCE, "utf8");
const curated = extractPosts(postsSource);
const posts = [...curated, ...(await extractMarkdownPosts(new Set(curated.map((p) => p.slug))))];

if (posts.length === 0) {
  throw new Error(`No posts parsed from ${POSTS_SOURCE} — check the regex against its current format.`);
}

const llmsTxt = await readFile(LLMS_TXT, "utf8");
const blogSectionPattern = /## Blog\n\n(?:- .+\n)+/;

if (!blogSectionPattern.test(llmsTxt)) {
  throw new Error(`Could not find a "## Blog" section to replace in ${LLMS_TXT}.`);
}

const updated = llmsTxt.replace(blogSectionPattern, renderBlogSection(posts));

if (updated !== llmsTxt) {
  await writeFile(LLMS_TXT, updated);
  console.log(`Synced ${posts.length} posts into ${LLMS_TXT}.`);
} else {
  console.log(`${LLMS_TXT} already in sync with ${posts.length} posts.`);
}
