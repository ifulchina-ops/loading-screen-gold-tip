import { mkdirSync, writeFileSync } from "node:fs";

// One loading-screen tip for stressed developers and AI coding agents.
const TIP =
  "Tip: if your agent rewrote the same file four times, it isn't iterating — it's negotiating with itself. Give it a smaller job; give yourself a break.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace. Fail loudly here rather than ship an invalid entry.
if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`entry is ${TIP.length} characters; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
