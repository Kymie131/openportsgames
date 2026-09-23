import MiniSearch from "minisearch";
import { genres, platformKeys, portTypes, type Genre, type PlatformKey, type Port } from "./schema";

export type SortKey = "relevance" | "title" | "title-desc" | "newest" | "stars";
export type StatusValue = "stable" | "beta" | "alpha";
export type StateValue = "verified" | "unverified";
export type TechniqueValue = (typeof portTypes)[number];
export type GenreValue = Genre;
export type SourceValue = "open" | "closed";
export type FeaturesValue = "yes" | "no";
export type AiValue = "yes" | "no";
export type TestedValue = "pass" | "fail" | "untested";

/**
 * Catalog query state shared by all three catalog pages.
 *
 * Every filter is a multi-select: values within a section are OR-ed, sections
 * are AND-ed (Steam-style). The query and the filters are reflected in the
 * URL; filters (never the free-text query) are also persisted between
 * sessions under `opg-catalog-filters`.
 */
export interface CatalogState {
  query: string;
  platform: PlatformKey[];
  status: StatusValue[];
  state: StateValue[];
  technique: TechniqueValue[];
  system: string[];
  genre: GenreValue[];
  source: SourceValue[];
  features: FeaturesValue[];
  ai: AiValue[];
  tested: TestedValue[];
  sort: SortKey;
}

export const defaultCatalogState: CatalogState = {
  query: "",
  platform: [],
  status: [],
  state: [],
  technique: [],
  system: [],
  genre: [],
  source: [],
  features: [],
  ai: [],
  tested: [],
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

/** The only filter set persisted between sessions. `query` is never stored. */
export const CATALOG_PERSIST_KEY = "opg-catalog-filters";

export type PersistedCatalogState = Omit<CatalogState, "query">;

const SORT_VALUES: SortKey[] = ["relevance", "title", "title-desc", "newest", "stars"];

interface ParamSource {
  get(name: string): string | null;
  getAll(name: string): string[];
}

function pickMany<T extends string>(
  params: ParamSource,
  name: string,
  allowed: readonly T[],
): T[] {
  const out: T[] = [];
  for (const value of params.getAll(name)) {
    if ((allowed as readonly string[]).includes(value) && !out.includes(value as T)) {
      out.push(value as T);
    }
  }
  return out;
}

/** Accepts any non-empty value (used for free-form sets like original systems). */
function pickAny(params: ParamSource, name: string): string[] {
  const out: string[] = [];
  for (const value of params.getAll(name)) {
    if (value !== "" && !out.includes(value)) out.push(value);
  }
  return out;
}

export function parseCatalogState(params: ParamSource): CatalogState {
  return {
    query: params.get("q") ?? "",
    platform: pickMany(params, "platform", platformKeys),
    status: pickMany(params, "status", ["stable", "beta", "alpha"]),
    state: pickMany(params, "state", ["verified", "unverified"]),
    technique: pickMany(params, "technique", portTypes),
    system: pickAny(params, "system"),
    genre: pickMany(params, "genre", genres),
    source: pickMany(params, "source", ["open", "closed"]),
    features: pickMany(params, "features", ["yes", "no"]),
    ai: pickMany(params, "ai", ["yes", "no"]),
    tested: pickMany(params, "tested", ["pass", "fail", "untested"]),
    sort: pick(params.get("sort"), SORT_VALUES, "relevance"),
  };
}

export function catalogStateToParams(state: CatalogState): URLSearchParams {
  const params = new URLSearchParams();
  const append = (key: string, values: readonly string[]) => {
    for (const value of values) params.append(key, value);
  };
  const query = state.query.trim();
  if (query !== "") params.set("q", query);
  append("platform", state.platform);
  append("status", state.status);
  append("state", state.state);
  append("technique", state.technique);
  append("system", state.system);
  append("genre", state.genre);
  append("source", state.source);
  append("features", state.features);
  append("ai", state.ai);
  append("tested", state.tested);
  if (state.sort !== "relevance") params.set("sort", state.sort);
  return params;
}

/** True when the state carries any filter value or a non-default sort. */
export function hasActiveFilters(state: CatalogState): boolean {
  return (
    state.platform.length > 0 ||
    state.status.length > 0 ||
    state.state.length > 0 ||
    state.technique.length > 0 ||
    state.system.length > 0 ||
    state.genre.length > 0 ||
    state.source.length > 0 ||
    state.features.length > 0 ||
    state.ai.length > 0 ||
    state.tested.length > 0 ||
    state.sort !== "relevance"
  );
}

/** Number of selected filter values, for the panel badge and mobile button. */
export function activeFilterCount(state: CatalogState): number {
  return (
    state.platform.length +
    state.status.length +
    state.state.length +
    state.technique.length +
    state.system.length +
    state.genre.length +
    state.source.length +
    state.features.length +
    state.ai.length +
    state.tested.length +
    (state.sort !== "relevance" ? 1 : 0)
  );
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

function pick<T extends string>(value: string | null, allowed: readonly T[], fallback: T): T {
  return value !== null && (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

export function applyCatalog(
  ports: Port[],
  index: MiniSearch,
  state: CatalogState,
  scope: CatalogScope = "all",
  options: CatalogOptions = {},
): { results: Port[]; total: number } {
  const scopePlatforms = SCOPED_PLATFORMS[scope];

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
      if (state.platform.length > 0 && !state.platform.some((p) => port.platforms.includes(p))) {
        return false;
      }
      if (state.status.length > 0 && !state.status.includes(port.status)) return false;
      if (state.state.includes("verified") && !port.verified) return false;
      if (state.state.includes("unverified") && port.verified) return false;
      if (state.technique.length > 0 && !state.technique.includes(port.portType)) return false;
      if (state.system.length > 0) {
        const system = originalSystems[port.id];
        if (system === undefined || !state.system.includes(system)) return false;
      }
      if (state.genre.length > 0 && !state.genre.includes(port.genre)) return false;
      if (state.source.includes("open") && !port.openSource) return false;
      if (state.source.includes("closed") && port.openSource) return false;
      const hasFeatures = (port.features?.length ?? 0) > 0;
      if (state.features.includes("yes") && !hasFeatures) return false;
      if (state.features.includes("no") && hasFeatures) return false;
      if (state.ai.includes("yes") && !port.aiDisclosure) return false;
      if (state.ai.includes("no") && port.aiDisclosure) return false;
      const result = testResults[port.id];
      if (state.tested.length > 0) {
        const match =
          (state.tested.includes("untested") && result === undefined) ||
          (state.tested.includes("pass") && result === "pass") ||
          (state.tested.includes("fail") && result === "fail");
        if (!match) return false;
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