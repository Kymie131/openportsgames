// Second enrichment pass for games without an exact Wikidata entity: looser
// search, then English and Spanish Wikipedia summaries. Only adds missing
// metadata; existing years/publishers are never overwritten here.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const CATALOG = path.join(ROOT, "out/api/ports.json");
const CACHE = path.join(ROOT, "public/data/game-metadata.json");
const UA = "openportsgames-catalog/1.0 (https://openportsgames.com; game metadata)";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

async function json(url, attempt = 0) {
  try {
    const response = await fetch(url, { headers: { "user-agent": UA } });
    if (response.status === 429 && attempt < 3) {
      await sleep(1500 * (attempt + 1));
      return json(url, attempt + 1);
    }
    if (!response.ok) return null;
    return await response.json();
  } catch {
    if (attempt < 3) {
      await sleep(1000 * (attempt + 1));
      return json(url, attempt + 1);
    }
    return null;
  }
}

function score(target, candidate) {
  if (!target || !candidate) return 0;
  if (target === candidate) return 100;
  if (candidate.includes(target) || target.includes(candidate)) {
    return 50 - Math.abs(target.length - candidate.length);
  }
  return 0;
}

async function looseWikidata(game) {
  const url =
    "https://www.wikidata.org/w/api.php?" +
    new URLSearchParams({
      action: "wbsearchentities",
      search: `${game} video game`,
      language: "en",
      uselang: "en",
      limit: "15",
      type: "item",
      format: "json",
    });
  const data = await json(url);
  const target = norm(game);
  let best = null;
  for (const entry of data?.search ?? []) {
    const label = norm(entry.label ?? "");
    const description = entry.description ?? "";
    if (!/video game|computer game|arcade game/i.test(description) || /console/i.test(description)) continue;
    const value = score(target, label);
    if (value > (best?.value ?? 0)) best = { id: entry.id, label: entry.label, value };
  }
  return best?.value > 20 ? best.id : null;
}

async function wikidataEntity(id) {
  const url =
    "https://www.wikidata.org/w/api.php?" +
    new URLSearchParams({
      action: "wbgetentities",
      ids: id,
      props: "claims|labels|descriptions|sitelinks",
      languages: "en|es",
      format: "json",
    });
  const data = await json(url);
  return data?.entities?.[id] ?? null;
}

function claimIds(claims, property, limit = 3) {
  return (claims?.[property] ?? [])
    .map((claim) => claim.mainsnak?.datavalue?.value?.id)
    .filter(Boolean)
    .slice(0, limit);
}

function yearFromClaims(claims) {
  const years = (claims?.P577 ?? [])
    .map((claim) => claim.mainsnak?.datavalue?.value?.time)
    .filter((value) => typeof value === "string")
    .map((value) => Number(value.slice(1, 5)))
    .filter((year) => year >= 1970 && year <= 2026);
  return years.length ? Math.min(...years) : null;
}

async function labels(ids) {
  const unique = [...new Set(ids)].filter(Boolean);
  const map = new Map();
  for (let index = 0; index < unique.length; index += 40) {
    const batch = unique.slice(index, index + 40);
    const url =
      "https://www.wikidata.org/w/api.php?" +
      new URLSearchParams({
        action: "wbgetentities",
        ids: batch.join("|"),
        props: "labels",
        languages: "en",
        format: "json",
      });
    const data = await json(url);
    for (const id of batch) {
      const label = data?.entities?.[id]?.labels?.en?.value;
      if (label) map.set(id, label);
    }
    await sleep(200);
  }
  return map;
}

async function wikiSummary(lang, title) {
  const data = await json(
    `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
  );
  return typeof data?.extract === "string" ? data.extract : null;
}

async function wikiSearch(lang, game, term) {
  const url =
    `https://${lang}.wikipedia.org/w/api.php?` +
    new URLSearchParams({
      action: "query",
      list: "search",
      srsearch: `${game} ${term}`,
      srlimit: "5",
      format: "json",
    });
  const data = await json(url);
  const target = norm(game);
  let best = null;
  for (const hit of data?.query?.search ?? []) {
    const value = score(target, norm(hit.title ?? ""));
    if (value > (best?.value ?? 0)) best = { title: hit.title, value };
  }
  return best?.value > 20 ? best.title : null;
}

function trim(text, max = 600) {
  if (!text) return null;
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return (end > 180 ? cut.slice(0, end + 1) : cut).trim();
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG, "utf8")).ports ?? [];
  const games = new Map();
  for (const port of catalog) {
    const key = norm(port.game ?? "");
    if (key && !games.has(key)) games.set(key, port.game);
  }
  const cache = JSON.parse(fs.readFileSync(CACHE, "utf8"));
  let added = 0;
  let index = 0;

  for (const [key, game] of games) {
    index++;
    if (cache[key]) continue;
    if (index % 20 === 0) console.log(`pass2 ${index}/${games.size}, added ${added}`);
    let metadata = null;
    try {
      const qid = await looseWikidata(game);
      if (qid) {
        const entity = await wikidataEntity(qid);
        if (entity) {
          const publisherId = claimIds(entity.claims, "P123", 1)[0] ?? null;
          const labelMap = await labels([publisherId]);
          metadata = {
            game,
            year: yearFromClaims(entity.claims),
            publisher: publisherId ? labelMap.get(publisherId) ?? null : null,
            genres: [],
            summaryEn: trim(await wikiSummary("en", entity.sitelinks?.enwiki?.title)),
            summaryEs: trim(await wikiSummary("es", entity.sitelinks?.eswiki?.title)),
            source: "wikidata-loose",
            wikidata: qid,
          };
        }
      }
      if (!metadata?.summaryEn) {
        const enTitle = await wikiSearch("en", game, "video game");
        if (enTitle) {
          const en = trim(await wikiSummary("en", enTitle));
          if (en) {
            const esTitle = await wikiSearch("es", game, "videojuego");
            metadata = {
              game,
              year: metadata?.year ?? null,
              publisher: metadata?.publisher ?? null,
              genres: [],
              summaryEn: en,
              summaryEs: trim(await wikiSummary("es", esTitle)) ?? metadata?.summaryEs ?? null,
              source: "wikipedia",
            };
          }
        }
      }
    } catch (error) {
      console.warn("pass2 failed", game, String(error));
    }
    if (metadata?.summaryEn) {
      cache[key] = metadata;
      added++;
    }
    await sleep(300);
    if (added % 20 === 0 && added > 0) {
      fs.writeFileSync(CACHE, `${JSON.stringify(cache, null, 2)}\n`);
    }
  }

  fs.writeFileSync(CACHE, `${JSON.stringify(cache, null, 2)}\n`);
  console.log(`cached ${Object.keys(cache).length}, new ${added}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
