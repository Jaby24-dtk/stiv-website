import { readFile } from "node:fs/promises";

const legalFiles = [
  "app/privacy/page.tsx",
  "app/terms/page.tsx",
  "app/subprocessors/page.tsx",
];

const draftingMarkers = [
  /\bTBD\b/i,
  /\bTODO\b/i,
  /\bto be confirmed\b/i,
  /\bplaceholder\b/i,
  /\[[^\]]*(?:name|date|address|email|confirm|insert|replace)[^\]]*\]/i,
];

const findings = [];

for (const file of legalFiles) {
  const source = await readFile(file, "utf8");
  const lines = source.split("\n");

  lines.forEach((line, index) => {
    if (draftingMarkers.some((pattern) => pattern.test(line))) {
      findings.push(`${file}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (findings.length > 0) {
  console.error("Legal-page drafting markers found:\n");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Legal-page placeholder check passed.");
