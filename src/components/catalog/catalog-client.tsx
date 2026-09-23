"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import type { ReactNode } from "react";
import type { Port } from "@/lib/ports/schema";
import {
  activeFilterCount,
  applyCatalog,
  availableSystems,
  buildIndex,
  CATALOG_PERSIST_KEY,
  catalogStateToParams,
  defaultCatalogState,
  hasActiveFilters,
  parseCatalogState,
  SCOPED_PLATFORMS,
  type AiValue,
  type CatalogScope,
  type CatalogState,
  type FeaturesValue,
  type GenreValue,
  type PersistedCatalogState,
  type SortKey,
  type SourceValue,
  type StateValue,
  type StatusValue,
  type TechniqueValue,
  type TestedValue,
} from "@/lib/ports/catalog";
import { PortTile } from "./port-tile";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

function writePersisted(state: CatalogState) {
  try {
    const filters: PersistedCatalogState = {
      platform: state.platform,
      status: state.status,
      state: state.state,
      technique: state.technique,
      system: state.system,
      genre: state.genre,
      source: state.source,
      features: state.features,
      ai: state.ai,
      tested: state.tested,
      sort: state.sort,
    };
    localStorage.setItem(CATALOG_PERSIST_KEY, JSON.stringify(filters));
  } catch {
    // storage unavailable (private mode, quota): filters simply do not persist
  }
}

function clearPersisted() {
  try {
    localStorage.removeItem(CATALOG_PERSIST_KEY);
  } catch {
    // ignore
  }
}

/** Revalidates persisted filters through parseCatalogState's allowed lists. */
function readPersisted(): CatalogState | null {
  try {
    const raw = localStorage.getItem(CATALOG_PERSIST_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Partial<PersistedCatalogState>;
    if (typeof saved !== "object" || saved === null) return null;
    const params = new URLSearchParams();
    const append = (key: string, values?: readonly string[]) =>
      values?.forEach((value) => params.append(key, value));
    append("platform", saved.platform);
    append("status", saved.status);
    append("state", saved.state);
    append("technique", saved.technique);
    append("system", saved.system);
    append("genre", saved.genre);
    append("source", saved.source);
    append("features", saved.features);
    append("ai", saved.ai);
    append("tested", saved.tested);
    if (saved.sort && saved.sort !== "relevance") params.set("sort", saved.sort);
    return parseCatalogState(params);
  } catch {
    return null;
  }
}

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export function CatalogClient({
  ports,
  testStatuses,
  testResults,
  originalSystems,
  stars,
  scope,
}: {
  ports: Port[];
  testStatuses: Record<string, "current" | "stale">;
  testResults: Record<string, "pass" | "fail">;
  originalSystems: Record<string, string>;
  stars: Record<string, number>;
  scope: CatalogScope;
}) {
  const t = useT();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const state = parseCatalogState(searchParams);
  const [draft, setDraft] = useState(state.query);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const index = useMemo(() => buildIndex(ports), [ports]);
  const systems = useMemo(() => availableSystems(ports, originalSystems), [ports, originalSystems]);
  const { results, total } = useMemo(
    () => applyCatalog(ports, index, state, scope, { originalSystems, testResults, stars }),
    [ports, index, state, scope, originalSystems, testResults, stars],
  );

  const scopePlatforms = SCOPED_PLATFORMS[scope];

  const commit = (next: CatalogState) => {
    const params = catalogStateToParams(next);
    const href = params.size ? `${pathname}?${params.toString()}` : pathname;
    writePersisted(next);
    void router.replace(href, { scroll: false });
  };

  const clear = () => {
    clearPersisted();
    setDraft("");
    void router.replace(pathname, { scroll: false });
  };

  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (hasActiveFilters(state)) {
      writePersisted(state);
      return;
    }
    const saved = readPersisted();
    if (saved !== null && hasActiveFilters(saved)) {
      const next = { ...saved, query: state.query };
      const params = catalogStateToParams(next);
      void router.replace(params.size ? `${pathname}?${params.toString()}` : pathname, {
        scroll: false,
      });
    }
  }, [state, pathname, router]);

  useEffect(() => {
    if (draft === state.query) return;
    const id = window.setTimeout(() => {
      const next = { ...state, query: draft, sort: defaultCatalogState.sort };
      const params = catalogStateToParams(next);
      void router.replace(params.size ? `${pathname}?${params.toString()}` : pathname, {
        scroll: false,
      });
    }, 150);
    return () => window.clearTimeout(id);
  }, [draft, state, pathname, router]);

  const filterCount = activeFilterCount(state);
  const canClear = hasActiveFilters(state);

  const panel = (
    <FilterPanel
      state={state}
      scope={scope}
      scopePlatforms={scopePlatforms}
      systems={systems}
      onToggle={commit}
      onClear={clear}
      canClear={canClear}
      filterCount={filterCount}
    />
  );

  return (
    <div className="flex w-full flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-6">
      <div className="flex w-full min-w-0 flex-col gap-4">
        <form
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
          <input
            type="search"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={t.catalog.searchPlaceholder}
            aria-label={t.catalog.searchPlaceholder}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
          {draft && (
            <button
              type="button"
              onClick={() => setDraft("")}
              className="rounded p-0.5 text-muted transition-colors hover:text-foreground"
              aria-label={t.catalog.clearFilters}
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          )}
        </form>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <p>
            <span className="text-foreground">{total}</span> {t.catalog.of} {ports.length}{" "}
            {t.catalog.labels[total === 1 ? "one" : "other"]}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors duration-150 hover:border-accent-hover lg:hidden"
            >
              <SlidersHorizontal className="size-4" aria-hidden="true" />
              <span>{t.catalog.filterPanel}</span>
              {filterCount > 0 && (
                <span
                  className="rounded-full bg-accent px-1.5 text-xs font-medium text-accent-contrast"
                  aria-hidden="true"
                >
                  {filterCount}
                </span>
              )}
            </button>
            <label className="flex items-center gap-1.5">
              <span className="hidden sm:inline">{t.catalog.sortLabel}</span>
              <select
                value={state.sort}
                onChange={(event) => commit({ ...state, sort: event.target.value as SortKey })}
                aria-label={t.catalog.sortLabel}
                className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus-visible:outline-none"
              >
                {SORT_OPTIONS.map(([value, labelKey]) => (
                  <option key={value} value={value}>
                    {t.catalog[labelKey]}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {results.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((port) => (
              <li key={port.id} className="flex">
                <PortTile
                  className="w-full"
                  port={port}
                  testStatus={testStatuses[port.id]}
                  stars={stars[port.id]}
                  system={originalSystems[port.id]}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface px-6 py-12 text-center">
            <div
              className="flex size-11 items-center justify-center rounded-full bg-surface-2 text-muted"
              aria-hidden="true"
            >
              <Search className="size-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">{t.catalog.empty}</p>
              <p className="text-sm text-muted">{t.catalog.emptyHelp}</p>
            </div>
            {canClear && (
              <button
                type="button"
                onClick={clear}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-link transition-colors duration-150 hover:border-accent-hover hover:text-link-hover"
              >
                {t.catalog.clearFilters}
              </button>
            )}
          </div>
        )}
      </div>

      <aside aria-label={t.catalog.filterPanel} className="hidden lg:block">
        <div className="rounded-lg lg:sticky lg:top-24">{panel}</div>
      </aside>

      <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-background/70" />
          <Dialog.Content className="opg-drawer-content fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background focus:outline-none">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <Dialog.Title className="flex items-center gap-1.5 text-base font-semibold tracking-tight">
                <SlidersHorizontal className="size-4" aria-hidden="true" />
                {t.catalog.filterPanel}
                {filterCount > 0 && (
                  <span
                    className="rounded-full bg-accent px-2 text-xs font-medium text-accent-contrast"
                    aria-hidden="true"
                  >
                    {filterCount}
                  </span>
                )}
              </Dialog.Title>
              <Dialog.Close
                className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                aria-label={t.common.closeMenu}
              >
                <X className="size-5" aria-hidden="true" />
              </Dialog.Close>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">{panel}</div>
            <div className="flex flex-col gap-2 border-t border-border px-4 py-3">
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-contrast transition-colors duration-150 hover:bg-accent-hover"
              >
                {t.catalog.viewResults(total)}
              </button>
              {canClear && (
                <button
                  type="button"
                  onClick={clear}
                  className="text-center text-sm text-link transition-colors hover:text-link-hover"
                >
                  {t.catalog.clearFilters}
                </button>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

type SortLabelKey = "sortRelevance" | "sortTitle" | "sortTitleDesc" | "sortNewest" | "sortStars";

const SORT_OPTIONS: [SortKey, SortLabelKey][] = [
  ["relevance", "sortRelevance"],
  ["title", "sortTitle"],
  ["title-desc", "sortTitleDesc"],
  ["newest", "sortNewest"],
  ["stars", "sortStars"],
];

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors duration-150 hover:border-accent-hover hover:text-foreground",
        active &&
          "border-accent bg-[color-mix(in_oklab,var(--accent)_12%,transparent)] text-foreground hover:border-accent hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}

function FilterSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-border bg-surface">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface-2"
        >
          <span>{title}</span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-muted transition-transform duration-150",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      {open && (
        <div className="flex flex-col gap-3 border-t border-border px-3 py-3">{children}</div>
      )}
    </div>
  );
}

function ChipGroup({
  label,
  values,
  selected,
  onToggle,
}: {
  label: string;
  values: [string, string][];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5" role="group" aria-label={label}>
      <p className="text-xs text-muted">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {values.map(([value, chipLabel]) => (
          <Chip
            key={value}
            active={selected.includes(value)}
            onClick={() => onToggle(value)}
            label={chipLabel}
          />
        ))}
      </div>
    </div>
  );
}

function FilterPanel({
  state,
  scope,
  scopePlatforms,
  systems,
  onToggle,
  onClear,
  canClear,
  filterCount,
}: {
  state: CatalogState;
  scope: CatalogScope;
  scopePlatforms: readonly import("@/lib/ports/schema").PlatformKey[];
  systems: string[];
  onToggle: (next: CatalogState) => void;
  onClear: () => void;
  canClear: boolean;
  filterCount: number;
}) {
  const t = useT();
  const toggle = (key: keyof CatalogState, value: string) => {
    const list = state[key] as string[];
    onToggle({ ...state, [key]: toggleValue(list, value) });
  };

  return (
    <section aria-label={t.catalog.filterPanel} className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold tracking-tight">
          {t.catalog.filterPanel}
          {filterCount > 0 && <span className="text-muted"> ({filterCount})</span>}
        </h2>
        {canClear && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-link transition-colors hover:text-link-hover"
          >
            {t.catalog.clearFilters}
          </button>
        )}
      </div>

      <FilterSection title={t.catalog.filterPlatform} defaultOpen>
        {scope !== "android" && (
          <ChipGroup
            label={t.catalog.filterPlatform}
            values={scopePlatforms.map((platform) => [platform, t.platforms[platform]])}
            selected={state.platform}
            onToggle={(value) => toggle("platform", value)}
          />
        )}
      </FilterSection>

      <FilterSection title={t.catalog.filterSystem} defaultOpen>
        <ChipGroup
          label={t.catalog.filterSystem}
          values={systems.map((system) => [system, system])}
          selected={state.system}
          onToggle={(value) => toggle("system", value)}
        />
      </FilterSection>

      <FilterSection title={t.catalog.filterTechnique}>
        <ChipGroup
          label={t.catalog.filterTechnique}
          values={[
            ["decompilation", t.portTypes.decompilation],
            ["recompilation", t.portTypes.recompilation],
            ["reimplementation", t.portTypes.reimplementation],
            ["source-port", t.portTypes["source-port"]],
          ]}
          selected={state.technique}
          onToggle={(value) => toggle("technique", value)}
        />
      </FilterSection>

      <FilterSection title={t.catalog.filterStatus}>
        <ChipGroup
          label={t.catalog.filterStatus}
          values={[
            ["stable", t.catalog.statusStable],
            ["beta", t.catalog.statusBeta],
            ["alpha", t.catalog.statusAlpha],
          ]}
          selected={state.status}
          onToggle={(value) => toggle("status", value)}
        />
        <ChipGroup
          label={t.catalog.filterState}
          values={[
            ["verified", t.catalog.stateVerified],
            ["unverified", t.catalog.stateUnverified],
          ]}
          selected={state.state}
          onToggle={(value) => toggle("state", value)}
        />
      </FilterSection>

      <FilterSection title={t.catalog.filterGenre}>
        <ChipGroup
          label={t.catalog.filterGenre}
          values={GENRE_OPTIONS.map((value) => [value, t.catalog.genres[value]])}
          selected={state.genre}
          onToggle={(value) => toggle("genre", value)}
        />
      </FilterSection>

      <FilterSection title={t.catalog.filterSource}>
        <ChipGroup
          label={t.catalog.filterSource}
          values={[
            ["open", t.catalog.sourceOpen],
            ["closed", t.catalog.sourceClosed],
          ]}
          selected={state.source}
          onToggle={(value) => toggle("source", value)}
        />
      </FilterSection>

      <FilterSection title={t.catalog.filterFeatures}>
        <ChipGroup
          label={t.catalog.filterFeatures}
          values={[
            ["yes", t.catalog.featuresYes],
            ["no", t.catalog.featuresNo],
          ]}
          selected={state.features}
          onToggle={(value) => toggle("features", value)}
        />
      </FilterSection>

      <FilterSection title={t.catalog.filterAi}>
        <ChipGroup
          label={t.catalog.filterAi}
          values={[
            ["yes", t.catalog.aiYes],
            ["no", t.catalog.aiNo],
          ]}
          selected={state.ai}
          onToggle={(value) => toggle("ai", value)}
        />
      </FilterSection>

      <FilterSection title={t.catalog.filterTested}>
        <ChipGroup
          label={t.catalog.filterTested}
          values={[
            ["pass", t.catalog.testedPass],
            ["fail", t.catalog.testedFail],
            ["untested", t.catalog.testedUntested],
          ]}
          selected={state.tested}
          onToggle={(value) => toggle("tested", value)}
        />
      </FilterSection>
    </section>
  );
}

const GENRE_OPTIONS: GenreValue[] = [
  "platformer",
  "action-adventure",
  "rpg",
  "racing",
  "strategy",
  "shooter",
  "fighting",
  "sports",
  "simulation",
  "open-world",
];

type SectionFilterKeys =
  | "platform"
  | "status"
  | "state"
  | "technique"
  | "system"
  | "genre"
  | "source"
  | "features"
  | "ai"
  | "tested";

export type {
  AiValue,
  CatalogScope,
  CatalogState,
  FeaturesValue,
  GenreValue,
  PersistedCatalogState,
  SortKey,
  SourceValue,
  StateValue,
  StatusValue,
  TechniqueValue,
  TestedValue,
  SectionFilterKeys,
};
