import MiniSearch from "minisearch";
import { genres, platformKeys, portTypes, type Genre, type PlatformKey, type Port } from "./schema";

export type SortKey = "relevance" | "title" | "title-desc" | "newest" | "stars";
export type StatusFilter = "all" | "stable" | "beta" | "alpha";
export type StateFilter = "all" | "verified" | "unverified";
export type TechniqueFilter = "all" | (typeof portTypes)[number];
export type GenreFilter = "all" | Genre;
export type SourceFilter = "all" | "open" | "closed";
export type AiFilter = "all" | "yes" | "no";
export type TestedFilter = "all" | "pass" | "fail" | "untested";

export interface CatalogState {
  query: string;
  platform: "all" | PlatformKey;
  status: StatusFilter;
  state: StateFilter;
  technique: TechniqueFilter;
  system: string;
  genre: GenreFilter;
  source: SourceFilter;
  ai: AiFilter;
  tested: TestedFilter;
  sort: SortKey;
}

export const defaultCatalogState: CatalogState = {
  query: "",
  platform: "all",
  status: "all",
  state: "all",
  technique: "all",
  system: "all",
  genre: "all",
  source: "all",
  ai: "all",
  tested: "all",
  sort: "relevance",
};

export const SCOPED_PLATFORMS: Record<"all" | "pc" | "android", PlatformKey[]> = {
  all: ["windows", "linux", "macos", "android"],
  pc: ["windows", "linux", "macos"],
  android: ["android"],
};

export type CatalogScope = keyof typeof SCOPED_PLATFORMS;

export interface CatalogOptions {
  originalSystems?: Record<string, string>;
  testResults?: Record<string, "pass" | "fail">;
  stars?: Record<string, number>;
}

const SORT_VALUES: SortKey[] = ["relevance", "title", "title-desc", "newest", "stars"];
const STATUS_VALUES: StatusFilter[] = ["all", "stable", "beta", "alpha"];
const STATE_VALUES: StateFilter[] = ["all", "verified", "unverified"];
const TECHNIQUE_VALUES: TechniqueFilter[] = ["all", ...portTypes];
const GENRE_VALUES: GenreFilter[] = ["all", ...genres];
const SOURCE_VALUES: SourceFilter[] = ["all", "open", "closed"];
const AI_VALUES: AiFilter[] = ["all", "yes", "no"];
const TESTED_VALUES: TestedFilter[] = ["all", "pass", "fail", "untested"];

function pick<T extends string>(value: string | null, allowed: readonly T[], fallback: T): T {
  return value !== null && (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

export function parseCatalogState(params: { get(name: string): string | null }): CatalogState {
  return {
    query: params.get("q") ?? "",
    platform: pick(params.get("platform"), platformKeys, "all"),
    status: pick(params.get("status"), STATUS_VALUES, "all"),
    state: pick(params.get("state"), STATE_VALUES, "all"),
    technique: pick(params.get("technique"), TECHNIQUE_VALUES, "all"),
    system: params.get("system") ?? "all",
    genre: pick(params.get("genre"), GENRE_VALUES, "all"),
    source: pick(params.get("source"), SOURCE_VALUES, "all"),
    ai: pick(params.get("ai"), AI_VALUES, "all"),
    tested: pick(params.get("tested"), TESTED_VALUES, "all"),
    sort: pick(params.get("sort"), SORT_VALUES, "relevance"),
  };
}

export function catalogStateToParams(state: CatalogState): URLSearchParams {
  const params = new URLSearchParams();
  const set = (key: string, value: string) => {
    if (value !== "" && value !== "all") params.set(key, value);
  };
  set("q", state.query.trim());
  set("platform", state.platform);
  set("status", state.status);
  set("state", state.state);
  set("technique", state.technique);
  set("system", state.system);
  set("genre", state.genre);
  set("source", state.source);
  set("ai", state.ai);
  set("tested", state.tested);
  if (state.sort !== "relevance") set("sort", state.sort);
  return params;
}

export function buildIndex(ports: Port[]): MiniSearch<Port> {
  const index = new MiniSearch<Port>({
    idField: "id",
    fields: ["title", "id", "game", "developers", "publisher", "genre", "portType"],
    storeFields: ["id"],
    searchOptions: { prefix: true, fuzzy: 0.2, combineWith: "OR" },
  });
  index.addAll(ports);
  return index;
}

export function availableSystems(
  ports: Port[],
  originalSystems: Record<string, string>,
): string[] {
  const systems = new Set<string>();
  for (const port of ports) {
    const system = originalSystems[port.id];
    if (system !== undefined) systems.add(system);
  }
  return [...systems].sort((a, b) => a.localeCompare(b));
}

export function applyCatalog(
  ports: Port[],
  index: MiniSearch,
  state: CatalogState,
  scope: CatalogScope = "all",
  options: CatalogOptions = {},
): { results: Port[]; total: number } {
  const scopePlatforms = SCOPED_PLATFORMS[scope];
  const platform =
    state.platform !== "all" && scopePlatforms.includes(state.platform) ? state.platform : "all";

  const query = state.query.trim();
  const qResults = query.length > 0 ? index.search(query) : [];
  const queryIds = qResults.length > 0 ? new Set(qResults.map((r) => r.id)) : null;
  const scoreById = new Map(qResults.map((r) => [r.id, r.score] as const));

  const { originalSystems = {}, testResults = {}, stars = {} } = options;

  const results = ports
    .filter((port) => {
      if (!port.platforms.some((candidate) => scopePlatforms.includes(candidate))) {
        return false;
      }
      if (platform !== "all" && !port.platforms.includes(platform)) {
        return false;
      }
      if (state.status !== "all" && port.status !== state.status) return false;
      if (state.state === "verified" && !port.verified) return false;
      if (state.state === "unverified" && port.verified) return false;
      if (state.technique !== "all" && port.portType !== state.technique) return false;
      if (state.system !== "all" && originalSystems[port.id] !== state.system) return false;
      if (state.genre !== "all" && port.genre !== state.genre) return false;
      if (state.source === "open" && !port.openSource) return false;
      if (state.source === "closed" && port.openSource) return false;
      if (state.ai === "yes" && !port.aiDisclosure) return false;
      if (state.ai === "no" && port.aiDisclosure) return false;
      if (state.tested === "untested" && testResults[port.id] !== undefined) return false;
      if ((state.tested === "pass" || state.tested === "fail") && testResults[port.id] !== state.tested) {
        return false;
      }
      if (queryIds !== null && !queryIds.has(port.id)) return false;
      return true;
    })
    .sort((a, b) => {
      if (state.sort === "title") return a.title.localeCompare(b.title);
      if (state.sort === "title-desc") return b.title.localeCompare(a.title);
      if (state.sort === "newest") {
        const da = a.release.date ?? "";
        const db = b.release.date ?? "";
        if (da && db) return db.localeCompare(da);
        if (da && !db) return -1;
        if (!da && db) return 1;
        return a.title.localeCompare(b.title);
      }
      if (state.sort === "stars") {
        const sa = stars[a.id] ?? -1;
        const sb = stars[b.id] ?? -1;
        if (sb !== sa) return sb - sa;
        return a.title.localeCompare(b.title);
      }
      if (scoreById.size > 0) {
        const sa = scoreById.get(a.id) ?? -1;
        const sb = scoreById.get(b.id) ?? -1;
        if (sb !== sa) return sb - sa;
      }
      return a.title.localeCompare(b.title);
    });

  return { results, total: results.length };
}