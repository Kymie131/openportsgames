import { createServer } from "node:http";
import { readFileSync, statSync, existsSync } from "node:fs";
import { resolve, join, extname, normalize } from "node:path";

const ROOT = resolve(process.cwd(), "out");
const PORT = Number(process.env.PORT ?? 4173);

const server = createServer((req, res) => {
  try {
    const url = new URL(req.url ?? "/", "http://localhost");
    let path = decodeURIComponent(url.pathname);
    let file = join(ROOT, normalize(path));
    if (!file.startsWith(ROOT)) {
      res.writeHead(200).end("<html></html>");
      return;
    }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
    if (!existsSync(file)) file = join(ROOT, "_not-found", "index.html");
    if (!existsSync(file)) {
      res.writeHead(200).end("<html></html>");
      return;
    }
    const types = {
      ".html": "text/html; charset=utf-8",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".xml": "application/xml",
      ".txt": "text/plain",
      ".png": "image/png",
      ".ico": "image/x-icon",
    };
    res.setHeader("Content-Type", types[extname(file)] ?? "application/octet-stream");
    if (extname(file) === ".html") res.setHeader("Cache-Control", "no-cache");
    res.end(readFileSync(file));
  } catch (error) {
    res.writeHead(200).end("<html></html>");
    console.error(error);
  }
});

server.listen(PORT, () => {
  console.log(`Static server listening on http://localhost:${PORT} (${ROOT})`);
});