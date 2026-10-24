// Enriches the remaining project index with Wikidata release years, publishers
// and genres. Only exact label matches are accepted; ambiguous titles are left
// unenriched instead of guessing.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const PROJECTS = path.join(ROOT, "public/data/projects.json");
const OUT = path.join(ROOT, "public/data/wikidata-enrichment.json");
const UA = "openportsgames-catalog/1.0 (https://openportsgames.com; catalog metadata)";

const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function api(params, attempt = 0) {
  const url = `https://www.wikidata.org/w/api.php?${new URLSearchParams({ format: "json", ...params })}`;
  const response = await fetch(url, { headers: { "user-agent": UA } });
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    if (attempt < 3) {
      await sleep(1000 * (attempt + 1));
      return api(params, attempt + 1);
    }
    throw new Error(`Wikidata non-JSON response (${response.status})`);
  }
  if (data.error?.code === "maxlag" && attempt < 3) {
    await sleep(2000 * (attempt + 1));
    return api(params, attempt + 1);
  }
  return data;
}

async function search(game) {
  const data = await api({
    action: "wbsearchentities",
    search: game,
    language: "en",
    uselang: "en",
    limit: "10",
    type: "item",
  });
  const target = norm(game);
  return (data.search ?? []).find((entry) => norm(entry.label ?? "") === target) ?? null;
}

function claimIds(claims, property, limit = 3) {
  return (claims?.[property] ?? [])
    .map((claim) => claim.mainsnak?.datavalue?.value?.id)
    .filter(Boolean)
    .slice(0, limit);
}

function releaseYear(claims) {
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
    const data = await api({
      action: "wbgetentities",
      ids: batch.join("|"),
      props: "labels",
      languages: "en",
    });
    for (const id of batch) {
      const label = data.entities?.[id]?.labels?.en?.value;
      if (label) map.set(id, label);
    }
    await sleep(250);
  }
  return map;
}

async function main() {
  const projects = JSON.parse(fs.readFileSync(PROJECTS, "utf8"));
  const result = {};
  let matched = 0;
  let missing = 0;

  for (let index = 0; index < projects.length; index += 1) {
    const project = projects[index];
    if (index % 25 === 0) console.log(`search ${index}/${projects.length}`);
    let hit = null;
    try {
      hit = await search(project.game);
    } catch (error) {
      console.warn("search failed", project.game, String(error));
    }
    await sleep(350);
    if (!hit) {
      missing++;
      continue;
    }
    try {
      const data = await api({
        action: "wbgetentities",
        ids: hit.id,
        props: "claims|labels",
        languages: "en",
      });
      const entity = data.entities?.[hit.id];
      if (!entity) {
        missing++;
        continue;
      }
      const year = releaseYear(entity.claims);
      if (!year) {
        missing++;
        continue;
      }
      const publisherId = claimIds(entity.claims, "P123", 1)[0] ?? null;
      const genreIds = claimIds(entity.claims, "P136", 3);
      const labelMap = await labels([publisherId, ...genreIds]);
      result[project.url] = {
        year,
        publisher: publisherId ? labelMap.get(publisherId) ?? null : null,
        genres: genreIds.map((id) => labelMap.get(id)).filter(Boolean),
        wikidata: hit.id,
      };
      matched++;
    } catch (error) {
      console.warn("entity failed", project.game, String(error));
      missing++;
    }
    await sleep(250);
  }

  fs.writeFileSync(OUT, `${JSON.stringify(result, null, 2)}\n`);
  console.log(`enriched ${matched}, unmatched ${missing}, total ${projects.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
