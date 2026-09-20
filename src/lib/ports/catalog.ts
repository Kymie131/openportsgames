import MiniSearch from "minisearch";
import type { PlatformKey, Port } from "./schema";

export type SortKey = "relevance" | "title" | "newest";
export type StatusFilter = "all" | "stable" | "beta" | "alpha";
export type StateFilter = "all" | "verified" | "unverified";

export interface CatalogState {
  query: string;
  platform: "all" | PlatformKey;
  status: StatusFilter;
  state: StateFilter;
  sort: SortKey;
}

export const defaultCatalogState: CatalogState = {
  query: "",
  platform: "all",
  status: "all",
  state: "all",
  sort: "relevance",
};

export const SCOPED_PLATFORMS: Record<"all" | "pc" | "android", PlatformKey[]> = {
  all: ["windows", "linux", "macos", "android"],
  pc: ["windows", "linux", "macos"],
  android: ["android"],
};

export type CatalogScope = keyof typeof SCOPED_PLATFORMS;

export function buildIndex(ports: Port[]): MiniSearch<Port> {
  const index = new MiniSearch<Port>({
    fields: ["title", "id", "game", "developers", "publisher"],
    storeFields: ["id"],
    searchOptions: { prefix: true, fuzzy: 0.2, combineWith: "OR" },
  });
  index.addAll(ports);
  return index;
}

export function applyCatalog(
  ports: Port[],
  index: MiniSearch,
  state: CatalogState,
  scope: CatalogScope = "all",
): { results: Port[]; total: number } {
  const scopePlatforms = SCOPED_PLATFORMS[scope];
  const platform =
    state.platform !== "all" && scopePlatforms.includes(state.platform) ? state.platform : "all";

  const query = state.query.trim();
  const qResults = query.length > 0 ? index.search(query) : [];
  const queryIds = qResults.length > 0 ? new Set(qResults.map((r) => r.id)) : null;
  const scoreById = new Map(qResults.map((r) => [r.id, r.score]));

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
      if (queryIds !== null && !queryIds.has(port.id)) return false;
      return true;
    })
    .sort((a, b) => {
      if (state.sort === "title") return a.title.localeCompare(b.title);
      if (state.sort === "newest") {
        const da = a.release.date ?? "";
        const db = b.release.date ?? "";
        if (da && db) return db.localeCompare(da);
        if (da && !db) return -1;
        if (!da && db) return 1;
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