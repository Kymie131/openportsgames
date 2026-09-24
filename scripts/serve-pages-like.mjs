import { createServer } from "node:http";
import { readFileSync, statSync, existsSync } from "node:fs";
import { resolve, join, extname, normalize, sep } from "node:path";

const ROOT = resolve(process.cwd(), "out");
const PORT = Number(process.env.PORT ?? 4174);
const BASE = (process.env.NEXT_PUBLIC_BASE_PATH ?? "/openportsgames").trim();
const BASE_PATH = BASE.startsWith("/") ? BASE.replace(/\/+$/, "") : `/${BASE.replace(/\/+$/, "")}`;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const NOT_FOUND = resolve(ROOT, "404.html");

function respond(res, status, file) {
  res.statusCode = status;
  if (status === 404 && existsSync(NOT_FOUND)) file = NOT_FOUND;
  const body = existsSync(file) ? readFileSync(file) : Buffer.from("Not found");
  const type = TYPES[extname(file)] ?? "application/octet-stream";
  res.setHeader("Content-Type", type);
  if (type.startsWith("text/html")) res.setHeader("Cache-Control", "no-cache");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.end(status === 404 && !existsSync(file) ? "Not found" : body);
}

const server = createServer((req, res) => {
  try {
    const url = new URL(req.url ?? "/", "http://localhost");
    let path = decodeURIComponent(url.pathname);

    if (BASE_PATH !== "/") {
      if (path !== BASE_PATH && !path.startsWith(`${BASE_PATH}/`)) {
        respond(res, 404, resolve(ROOT, "nope"));
        return;
      }
      path = path.slice(BASE_PATH.length) || "/";
    }

    const candidate = join(ROOT, normalize(path));
    if (candidate !== ROOT && !candidate.startsWith(ROOT + sep)) {
      respond(res, 404, resolve(ROOT, "nope"));
      return;
    }

    if (candidate !== ROOT && existsSync(candidate) && statSync(candidate).isDirectory()) {
      if (!path.endsWith("/")) {
        res.statusCode = 301;
        res.setHeader("Location", `${BASE_PATH}${path}/`);
        res.end();
        return;
      }
      respond(res, 200, join(candidate, "index.html"));
      return;
    }

    if (existsSync(candidate) && statSync(candidate).isFile()) {
      respond(res, 200, candidate);
      return;
    }

    if (path.endsWith("/")) respond(res, 404, resolve(ROOT, "nope"));
    else respond(res, 404, join(ROOT, "nope"));
  } catch (error) {
    console.error(error);
    respond(res, 500, resolve(ROOT, "nope"));
  }
});

server.listen(PORT, () => {
  console.log(`GitHub-Pages-like server on http://localhost:${PORT}${BASE_PATH} serving ${ROOT}`);
});
