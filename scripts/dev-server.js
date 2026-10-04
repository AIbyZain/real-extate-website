// Tiny static server for local development. No dependencies.
// Usage: npm run dev   (optional: PORT=4000 npm run dev)
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

// Serves the static site in /public for local development. Not used on Vercel.
const ROOT = path.resolve(__dirname, "..", "public");
const START_PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".mp4": "video/mp4", ".webm": "video/webm",
  ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8"
};

function handler(req, res) {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  const file = path.normalize(path.join(ROOT, urlPath));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("Not found: " + urlPath); }
    const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;

    // Range requests so video seeks and plays in every browser (Safari needs this).
    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      const start = m && m[1] ? parseInt(m[1], 10) : 0;
      const end = m && m[2] ? parseInt(m[2], 10) : stat.size - 1;
      if (start >= stat.size || end >= stat.size) {
        res.writeHead(416, { "Content-Range": `bytes */${stat.size}` }); return res.end();
      }
      res.writeHead(206, {
        "Content-Type": type, "Content-Length": end - start + 1,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`, "Accept-Ranges": "bytes", "Cache-Control": "no-cache"
      });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }

    res.writeHead(200, { "Content-Type": type, "Content-Length": stat.size, "Accept-Ranges": "bytes", "Cache-Control": "no-cache" });
    fs.createReadStream(file).pipe(res);
  });
}

function lanAddress() {
  for (const list of Object.values(os.networkInterfaces())) {
    for (const a of list || []) if (a.family === "IPv4" && !a.internal) return a.address;
  }
  return null;
}

function listen(port) {
  const server = http.createServer(handler);
  server.on("error", (e) => {
    if (e.code === "EADDRINUSE") { console.log(`Port ${port} is busy, trying ${port + 1}`); listen(port + 1); }
    else throw e;
  });
  server.listen(port, "0.0.0.0", () => {
    const lan = lanAddress();
    console.log("\n  Walnut House is running\n");
    console.log(`  On this computer:  http://localhost:${port}`);
    if (lan) console.log(`  On your phone:     http://${lan}:${port}  (same Wi-Fi)`);
    console.log("\n  Press Ctrl+C to stop.\n");
  });
}
listen(START_PORT);
