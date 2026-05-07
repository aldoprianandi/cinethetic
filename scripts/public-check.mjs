import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const publishableFiles = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard"],
  {
    encoding: "utf8",
  },
)
  .split("\n")
  .filter(Boolean);

const blockedPathPatterns = [
  /^node_modules\//,
  /^out\//,
  /^dist\//,
  /^build\//,
  /^coverage\//,
  /^\.env(?:\.|$)/,
  /^\.codex\//,
  /^\.claude\//,
  /^\.worktrees\//,
  /^\.playwright-(?:mcp|cli)\//,
  /\.(?:key|pem|p12|pfx)$/i,
];

const exactPhrase = (...parts) => new RegExp(`\\b${parts.join(" ")}\\b`, "i");

const sensitiveContentPatterns = [
  { label: "private key block", pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  {
    label: "github token",
    pattern: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{36,}\b/,
  },
  {
    label: "github fine-grained token",
    pattern: /\bgithub_pat_[A-Za-z0-9_]{20,}\b/,
  },
  { label: "openai-style token", pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/ },
  { label: "aws access key", pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/ },
  { label: "slack token", pattern: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/ },
  {
    label: "assigned credential",
    pattern:
      /\b(?:api[_-]?key|secret|token|password|passwd|private[_-]?key)\b\s*[:=]\s*["']?[^"'\s]{8,}/i,
  },
  { label: "database url", pattern: /\bDATABASE_URL\s*=/i },
  {
    label: "supabase service secret",
    pattern: /\bSUPABASE_(?:SERVICE_ROLE|JWT_SECRET|ANON_KEY)\s*=/i,
  },
  { label: "private commercial phrase", pattern: exactPhrase("rate", "card") },
  {
    label: "private analytics phrase",
    pattern: exactPhrase("raw", "analytics"),
  },
  {
    label: "private media-kit phrase",
    pattern: exactPhrase("internal", "media", "kit"),
  },
  {
    label: "private marketplace phrase",
    pattern: new RegExp(`\\b${"KOL"}\\.${"ID"}\\b`, "i"),
  },
];

const isLikelyText = (buffer) => {
  if (buffer.length > 2_000_000) {
    return false;
  }

  return !buffer.includes(0);
};

const failures = [];

for (const file of publishableFiles) {
  if (blockedPathPatterns.some((pattern) => pattern.test(file))) {
    failures.push(`${file}: blocked tracked path`);
    continue;
  }

  const buffer = readFileSync(file);
  if (!isLikelyText(buffer)) {
    continue;
  }

  const text = buffer.toString("utf8");
  for (const { label, pattern } of sensitiveContentPatterns) {
    if (pattern.test(text)) {
      failures.push(`${file}: matched ${label}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Public safety check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(
  `Public safety check passed for ${publishableFiles.length} publishable files.`,
);
