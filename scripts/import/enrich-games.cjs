// Builds public/data/game-metadata.json: one synopsis and fact sheet per unique
// game, sourced from Wikidata, Wikipedia (EN/ES) and Steam as fallback.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const CATALOG = path.join(ROOT, "out/api/ports.json");
const CACHE = path.join(ROOT, "public/data/game-metadata.json");
const UA = "openportsgames-catalog/1.0 (https://openportsgames.com; game metadata)";

const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function json(url, attempt = 0) {
  try {
    const response = await fetch(url, { headers: { "user-agent": UA } });
    if (response.status === 429 && attempt < 3) {
      await sleep(2000 * (attempt + 1));
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

async function wikidataSearch(game) {
  const url =
    "https://www.wikidata.org/w/api.php?" +
    new URLSearchParams({
      action: "wbsearchentities",
      search: game,
      language: "en",
      uselang: "en",
      limit: "10",
      type: "item",
      format: "json",
    });
  const data = await json(url);
  const target = norm(game);
  const hits = (data?.search ?? []).filter((entry) => norm(entry.label ?? "") === target);
  return hits[0]?.id ?? null;
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

async function wikidataEntity(id) {
  const url =
    "https://www.wikidata.org/w/api.php?" +
    new URLSearchParams({
      action: "wbgetentities",
      ids: id,
      props: "claims|labels|descriptions|sitelinks",
      languages: "en|es",
      sitelinks: "enwiki|eswiki",
      format: "json",
    });
  const data = await json(url);
  return data?.entities?.[id] ?? null;
}

async function resolveLabels(ids) {
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

async function wikipediaSummary(lang, title) {
  if (!title) return null;
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const data = await json(url);
  return typeof data?.extract === "string" ? data.extract : null;
}

function trim(text, max = 600) {
  if (!text) return null;
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return (end > 180 ? cut.slice(0, end + 1) : cut).trim();
}

const GENRE_EN = {
  racing: "racing",
  sports: "sports",
  rpg: "role-playing",
  strategy: "strategy",
  simulation: "simulation",
  puzzle: "puzzle",
  platformer: "platform",
  shooter: "shooter",
  fighting: "fighting",
  music: "music",
  "open-world": "open-world",
  "action-adventure": "action-adventure",
};
const GENRE_ES = {
  racing: "carreras",
  sports: "deportes",
  rpg: "rol",
  strategy: "estrategia",
  simulation: "simulación",
  puzzle: "puzles",
  platformer: "plataformas",
  shooter: "disparos",
  fighting: "lucha",
  music: "música",
  "open-world": "mundo abierto",
  "action-adventure": "acción y aventura",
};

async function steamFallback(game) {
  const searchUrl = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(game)}&l=english&cc=us`;
  const search = await json(searchUrl);
  const target = norm(game);
  const item = (search?.items ?? []).find((entry) => norm(entry.name ?? "") === target);
  if (!item) return null;
  const details = await json(
    `https://store.steampowered.com/api/appdetails?appids=${item.id}&l=english&cc=us`,
  );
  const data = details?.[item.id]?.data;
  if (!data) return null;
  const year = Number(String(data.release_date?.date ?? "").match(/\b(19\d{2}|20\d{2})\b/)?.[1] ?? 0);
  return {
    year: year >= 1970 ? year : null,
    publisher: (data.publishers ?? [])[0] ?? null,
    summaryEn: data.short_description ?? null,
    genres: (data.genres ?? []).map((genre) => String(genre.description)),
    source: "steam",
  };
}

async function enrichGame(game, genre) {
  const qid = await wikidataSearch(game);
  if (qid) {
    const entity = await wikidataEntity(qid);
    if (entity) {
      const description = entity.descriptions?.en?.value ?? "";
      const isGame = /video game|computer game|arcade game/i.test(description) && !/console/i.test(description);
      if (isGame) {
        const year = yearFromClaims(entity.claims);
        const publisherId = claimIds(entity.claims, "P123", 1)[0] ?? null;
        const genreIds = claimIds(entity.claims, "P136", 3);
        const labels = await resolveLabels([publisherId, ...genreIds]);
        const summaryEn = trim(
          await wikipediaSummary("en", entity.sitelinks?.enwiki?.title),
        );
        const summaryEs = trim(
          await wikipediaSummary("es", entity.sitelinks?.eswiki?.title),
        );
        const publisher = publisherId ? labels.get(publisherId) ?? null : null;
        const genreNames = genreIds.map((id) => labels.get(id)).filter(Boolean);
        const fallbackEs = `${game} es un videojuego de ${GENRE_ES[genre] ?? "acción"}${publisher ? ` publicado por ${publisher}` : ""}${year ? ` en ${year}` : ""}.`;
        const fallbackEn = `${game} is a ${GENRE_EN[genre] ?? "video"} game${publisher ? ` published by ${publisher}` : ""}${year ? ` in ${year}` : ""}.`;
        return {
          year,
          publisher,
          genres: genreNames,
          summaryEn: summaryEn ?? trim(fallbackEn),
          summaryEs: summaryEs ?? trim(fallbackEs),
          source: "wikidata",
          wikidata: qid,
        };
      }
    }
  }
  const steam = await steamFallback(game);
  if (steam) {
    const fallbackEs = `${game} es un videojuego de ${GENRE_ES[genre] ?? "acción"}${steam.publisher ? ` publicado por ${steam.publisher}` : ""}${steam.year ? ` en ${steam.year}` : ""}.`;
    return {
      ...steam,
      summaryEs: trim(fallbackEs),
      summaryEn: trim(steam.summaryEn ?? `${game} is a ${GENRE_EN[genre] ?? "video"} game.`),
    };
  }
  return null;
}

async function main() {
  const data = JSON.parse(fs.readFileSync(CATALOG, "utf8"));
  const games = new Map();
  for (const port of data.ports ?? []) {
    const key = norm(port.game ?? "");
    if (!key || games.has(key)) continue;
    games.set(key, {
      game: port.game,
      genre: port.genre,
    });
  }
  const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, "utf8")) : {};
  let index = 0;
  let added = 0;
  for (const [key, entry] of games) {
    index++;
    if (cache[key]) continue;
    if (index % 25 === 0) console.log(`game ${index}/${games.size}`);
    let metadata = null;
    try {
      metadata = await enrichGame(entry.game, entry.genre);
    } catch (error) {
      console.warn("failed", entry.game, String(error));
    }
    if (metadata) {
      cache[key] = { game: entry.game, ...metadata };
      added++;
    }
    await sleep(250);
    if (added % 25 === 0 && added > 0) {
      fs.writeFileSync(CACHE, `${JSON.stringify(cache, null, 2)}\n`);
    }
  }
  fs.writeFileSync(CACHE, `${JSON.stringify(cache, null, 2)}\n`);
  console.log(`games ${games.size}, enriched ${Object.keys(cache).length}, new ${added}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
