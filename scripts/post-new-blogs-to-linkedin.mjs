#!/usr/bin/env node
// Diffs app/blog/posts.ts between two git refs and posts a headline to the
// STIV LinkedIn company page for every slug that's new in `after`.
//
// Env vars:
//   LINKEDIN_ACCESS_TOKEN  - org-scoped access token (w_organization_social)
//   LINKEDIN_ORG_URN       - e.g. urn:li:organization:12345678
//   GIT_BEFORE / GIT_AFTER - git refs to diff (defaults: HEAD^ / HEAD)
//   DRY_RUN                - "true" to log without calling the LinkedIn API

import { execSync } from "node:child_process";

const before = process.env.GIT_BEFORE || "HEAD^";
const after = process.env.GIT_AFTER || "HEAD";
const dryRun = process.env.DRY_RUN === "true";
const siteUrl = "https://www.iamstivai.com";

function readPostsAt(ref) {
  let text;
  try {
    text = execSync(`git show ${ref}:app/blog/posts.ts`, {
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10,
    });
  } catch {
    return new Map();
  }
  const posts = new Map();
  const blockRe = /\{\s*slug:\s*"([^"]+)"[\s\S]*?title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?description:\s*(?:"((?:[^"\\]|\\.)*)"|\[?\s*"((?:[^"\\]|\\.)*)")/g;
  let match;
  while ((match = blockRe.exec(text)) !== null) {
    const [, slug, title, descA, descB] = match;
    const description = (descA ?? descB ?? "").replace(/\\"/g, '"');
    posts.set(slug, { slug, title: title.replace(/\\"/g, '"'), description });
  }
  return posts;
}

async function postToLinkedIn({ slug, title, description }) {
  const url = `${siteUrl}/blog/${slug}`;
  const commentary = `New on the STIV blog: ${title}`;

  const body = {
    author: process.env.LINKEDIN_ORG_URN,
    commentary,
    visibility: "PUBLIC",
    distribution: {
      feedDistribution: "MAIN_FEED",
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    content: {
      article: {
        source: url,
        title,
        description,
      },
    },
    lifecycleState: "PUBLISHED",
    isReshareDisabledByAuthor: false,
  };

  if (dryRun) {
    console.log(`[dry-run] would post to LinkedIn:`, JSON.stringify(body, null, 2));
    return;
  }

  const res = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      "LinkedIn-Version": "202405",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`LinkedIn API ${res.status} for slug "${slug}": ${errText}`);
  }

  console.log(`Posted "${title}" (${slug}) to LinkedIn — id: ${res.headers.get("x-restli-id") || "unknown"}`);
}

async function main() {
  if (!dryRun && (!process.env.LINKEDIN_ACCESS_TOKEN || !process.env.LINKEDIN_ORG_URN)) {
    throw new Error("LINKEDIN_ACCESS_TOKEN and LINKEDIN_ORG_URN must be set (or use DRY_RUN=true)");
  }

  const beforePosts = readPostsAt(before);
  const afterPosts = readPostsAt(after);

  const newSlugs = [...afterPosts.keys()].filter((slug) => !beforePosts.has(slug));

  if (newSlugs.length === 0) {
    console.log("No new blog posts in this push — nothing to post to LinkedIn.");
    return;
  }

  console.log(`Found ${newSlugs.length} new post(s): ${newSlugs.join(", ")}`);

  for (const slug of newSlugs) {
    await postToLinkedIn(afterPosts.get(slug));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
