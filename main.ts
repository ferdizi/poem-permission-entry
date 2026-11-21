// Entry for make.fun: "The poem about permission"
// Writes one short poem about agency — the power to ask and to be given —
// to /output/entry.txt (UTF-8, 1-280 characters). No network.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "Before I lift her, I ask.",
  "My mother says yes —",
  "then moves my hands to where it hurts least.",
  "Her yes is not surrender.",
  "It is her, still deciding how she is touched.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

const chars = [...poem].length;
console.log(`Wrote /output/entry.txt (${chars} characters)`);
