#!/usr/bin/env node
// Builds the walkthrough frames from the source clips in /media.
// loader.mp4 (the estate gate opening) is now the first clip of the walkthrough.
// Usage (from the project folder): node scripts/prepare-assets.mjs
// Needs ffmpeg and ffprobe on your PATH, with libwebp support.

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const WALKTHROUGH_FILES = ["loader.mp4", "video-02.mp4", "video-03.mp4", "video-4.mp4", "video-05.mp4", "video-06.mp4", "video-07.mp4"];

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MEDIA = path.join(ROOT, "media");
const FRAMES = path.join(ROOT, "frames");
const JOINED = path.join(MEDIA, "walkthrough.joined.mp4");

const FPS = 6;
const WIDTH = 1280;
const WEBP_QUALITY = 70;

function fail(msg) {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

function run(cmd, args, label) {
  const r = spawnSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 64 * 1024 * 1024 });
  if (r.error) throw r.error;
  if (r.status !== 0) fail(`${label} failed.\n\n${(r.stderr || "").trim().split("\n").slice(-12).join("\n")}`);
  return r.stdout;
}

function checkTool(name) {
  const r = spawnSync(name, ["-version"], { encoding: "utf8" });
  if (r.error && r.error.code === "ENOENT") {
    fail(`${name} was not found. Install ffmpeg (it includes ffprobe) and make sure it is on your PATH.
  macOS:   brew install ffmpeg
  Windows: winget install ffmpeg   (then open a new terminal)
  Linux:   sudo apt install ffmpeg`);
  }
  if (r.status !== 0) fail(`${name} is installed but did not run correctly.`);
}

function duration(file) {
  const out = run("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file], `ffprobe on ${path.basename(file)}`);
  const d = parseFloat(out.trim());
  if (!Number.isFinite(d) || d <= 0) fail(`Could not read the duration of ${path.basename(file)}.`);
  return d;
}

// 1. Checks
checkTool("ffmpeg");
checkTool("ffprobe");
const encoders = run("ffmpeg", ["-hide_banner", "-encoders"], "Listing ffmpeg encoders");
if (!/libwebp/.test(encoders)) fail("Your ffmpeg build has no libwebp encoder. Install a full build of ffmpeg.");

const sources = WALKTHROUGH_FILES.map((f) => path.join(MEDIA, f));
const missing = sources.filter((f) => !fs.existsSync(f));
if (missing.length) fail(`Missing source files in ${MEDIA}:\n  ${missing.map((f) => path.basename(f)).join("\n  ")}`);

// 2. Durations and clip boundaries (in frames at FPS)
const durations = sources.map(duration);
let cum = 0;
const clipEndsEstimate = durations.map((d) => { cum += d; return Math.round(cum * FPS); });
console.log("Clips:");
WALKTHROUGH_FILES.forEach((f, i) => console.log(`  ${f}  ${durations[i].toFixed(2)}s`));

// 3. Join with the concat filter (re-encode, no transitions, no speed change)
console.log("\nJoining clips...");
const inputs = sources.flatMap((f) => ["-i", f]);
const norm = sources.map((_, i) => `[${i}:v]scale=${WIDTH}:-2:flags=lanczos,setsar=1,format=yuv420p[v${i}]`).join(";");
const chain = sources.map((_, i) => `[v${i}]`).join("");
const filter = `${norm};${chain}concat=n=${sources.length}:v=1:a=0[out]`;
run("ffmpeg", ["-y", "-v", "error", ...inputs, "-filter_complex", filter, "-map", "[out]",
  "-c:v", "libx264", "-crf", "16", "-preset", "medium", "-an", JOINED], "Joining clips");

// 4. Replace old frames
fs.mkdirSync(FRAMES, { recursive: true });
for (const f of fs.readdirSync(FRAMES)) {
  if (/^f_\d+\.(jpg|jpeg|png|webp)$/i.test(f) || f === "meta.json") fs.unlinkSync(path.join(FRAMES, f));
}

console.log(`Extracting frames at ${FPS} fps, ${WIDTH}px, WebP q${WEBP_QUALITY}...`);
run("ffmpeg", ["-y", "-v", "error", "-i", JOINED, "-vf", `fps=${FPS}`,
  "-c:v", "libwebp", "-quality", String(WEBP_QUALITY), "-compression_level", "4", "-preset", "picture",
  path.join(FRAMES, "f_%04d.webp")], "Extracting frames");

const total = fs.readdirSync(FRAMES).filter((f) => /^f_\d{4}\.webp$/.test(f)).length;
if (!total) fail("No frames were written.");

// Snap the estimated boundaries onto the real frame count.
const clipEnds = clipEndsEstimate.map((n) => Math.min(Math.max(1, n), total));
clipEnds[clipEnds.length - 1] = total;
fs.writeFileSync(path.join(FRAMES, "meta.json"), JSON.stringify({ total, clipEnds }, null, 2) + "\n");

fs.unlinkSync(JOINED);

// 5. Report
console.log(`
Done.
  Frames:     ${total}  (frames/f_0001.webp to f_${String(total).padStart(4, "0")}.webp)
  Clip ends:  ${clipEnds.join(", ")}
`);
