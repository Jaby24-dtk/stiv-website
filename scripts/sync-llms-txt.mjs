import { readFile, writeFile } from "node:fs/promises";

const SITE_URL = "https://www.iamstivai.com";
const POSTS_SOURCE = "app/blog/posts.ts";
const LLMS_TXT = "public/llms.txt";

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

function renderBlogSection(posts) {
  const lines = posts.map(
    (post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`,
  );
  return `## Blog\n\n${lines.join("\n")}\n`;
}

const postsSource = await readFile(POSTS_SOURCE, "utf8");
const posts = extractPosts(postsSource);

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
