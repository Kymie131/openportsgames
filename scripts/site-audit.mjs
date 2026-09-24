const DEFAULT_BASE = "http://localhost:4174/openportsgames";
const base = (process.argv[2] ?? DEFAULT_BASE).replace(/\/+$/, "") + "/";

const fails = [];
const warns = [];
const infos = [];

const CATALOG_PAGES = new Set(["ports/", "pc/", "android/"]);
const CATALOG_TILE_RE = /href="[^"]*\/ports\/[a-z0-9-]+\/"/g;
const NO_RELEASE_PHRASE =
  /no numbered releases|no releases|no tagged releases|no release metadata|no released binary|does not publish|builds track|rolling|unversioned|no versioned|work-in-progress|wip/i;

function pageKind(path) {
  if (path === base) return "home";
  if (CATALOG_PAGES.has(path.slice(base.length))) return "catalog";
  return "page";
}

function fail(msg) {
  fails.push(msg);
  console.log(`[FAIL] ${msg}`);
}
function warn(msg) {
  warns.push(msg);
  console.log(`[WARN] ${msg}`);
}
function info(msg) {
  infos.push(msg);
  console.log(`[INFO] ${msg}`);
}

async function fetchOk(url, what) {
  let res;
  try {
    res = await fetch(url, { redirect: "follow" });
  } catch (error) {
    fail(`no se pudo descargar ${what}: ${url} (${error.message})`);
    return null;
  }
  if (res.status !== 200) fail(`${what} devuelve ${res.status}: ${url}`);
  return res;
}

async function main() {
  const sitemapRes = await fetchOk(base + "sitemap.xml", "sitemap.xml");
  if (!sitemapRes) return 1;
  const sitemapText = await sitemapRes.text();

  const locs = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) {
    fail("sitemap.xml sin <loc>");
    return 1;
  }

  const lastmods = [...sitemapText.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((m) => m[1]);
  if (lastmods.length > 1 && new Set(lastmods).size === 1) {
    info("sitemap: lastmod idéntico en todas las entradas");
  }

  for (const loc of locs) {
    if (!loc.endsWith("/")) warn(`sitemap: URL sin barra final ${loc}`);
  }

  let portsData = null;
  const portsJson = await fetchOk(base + "api/ports.json", "api/ports.json");
  if (portsJson) {
    try {
      const root = await portsJson.json();
      portsData = Array.isArray(root) ? root : root?.ports;
    } catch {
      fail("api/ports.json no es JSON válido");
    }
  }

  let checked = 0;
  const socialImages = {};
  for (const loc of locs) {
    const res = await fetchOk(loc, "página");
    checked++;
    if (!res) continue;
    const html = await res.text();
    const kind = pageKind(loc);
    const label = kind === "home" ? "home" : loc.slice(base.length);

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.startsWith("text/html")) {
      fail(`social: ${label} no se sirve como text/html (${contentType})`);
      continue;
    }

    const title = (html.match(/<title>(.*?)<\/title>/s) ?? [])[1] ?? "";
    if (!title.trim()) fail(`seo: ${label} sin <title>`);

    const description = (html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "";
    if (!description.trim()) {
      fail(`seo: ${label} sin meta description`);
    } else if (description.length > 200) {
      warn(`meta description: ${label} demasiado larga (${description.length} chars)`);
    }

    const ogImage = (html.match(/<meta property="og:image" content="([^"]*)"/) ?? [])[1] ?? "";
    const twImage = (html.match(/<meta name="twitter:image" content="([^"]*)"/) ?? [])[1] ?? "";
    if (!ogImage.startsWith("http") || !ogImage.endsWith(".png")) {
      warn(`social: ${label} og:image no es una URL absoluta .png`);
    } else if (!socialImages[ogImage]) {
      socialImages[ogImage] = true;
      const img = await fetchOk(ogImage, "imagen social");
      if (img) {
        const imgType = img.headers.get("content-type") ?? "";
        if (!imgType.startsWith("image/")) {
          fail(`social: ${label} la imagen ${ogImage} se sirve como ${imgType}, no como imagen`);
        }
      }
    }
    if (!twImage.startsWith("http") || !twImage.endsWith(".png")) {
      warn(`social: ${label} twitter:image no es una URL absoluta .png`);
    }

    const h1 = (html.match(/<h1/g) ?? []).length;
    if (h1 !== 1) warn(`expected exactly 1 <h1>: ${label} (${h1})`);

    if (kind === "catalog") {
      const tiles = (html.match(CATALOG_TILE_RE) ?? []).length;
      if (tiles === 0) warn(`no-js: ${label} no muestra ports sin JavaScript`);
    } else {
      const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
      if (text.trim().length < 80) warn(`no-js: ${label} sin contenido sin JavaScript`);
    }
  }

  await fetchOk(base + "robots.txt", "robots.txt");

  if (portsData && Array.isArray(portsData)) {
    for (const port of portsData) {
      const version = port?.release?.version;
      if (port.status !== "stable" || version) continue;
      const notes = port.notes ?? "";
      const why = NO_RELEASE_PHRASE.test(notes);
      if (!why) warn(`stable sin versión: ${port.id} no documenta la ausencia de releases`);
      else info(`stable sin versión documentado: ${port.id}`);
    }
  }

  console.log("---");
  console.log(
    `${checked} páginas auditadas | ${fails.length} FAIL, ${warns.length} WARN, ${infos.length} INFO`,
  );
  return fails.length > 0 ? 1 : 0;
}

main().then((code) => process.exit(code));
