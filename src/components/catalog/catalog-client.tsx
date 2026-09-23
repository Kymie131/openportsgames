"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { Port } from "@/lib/ports/schema";
import {
  applyCatalog,
  availableSystems,
  buildIndex,
  catalogStateToParams,
  defaultCatalogState,
  parseCatalogState,
  SCOPED_PLATFORMS,
  type AiFilter,
  type CatalogScope,
  type CatalogState,
  type GenreFilter,
  type SortKey,
  type SourceFilter,
  type StateFilter,
  type StatusFilter,
  type TechniqueFilter,
  type TestedFilter,
} from "@/lib/ports/catalog";
import { PortTile } from "./port-tile";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

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
  const index = useMemo(() => buildIndex(ports), [ports]);
  const systems = useMemo(() => availableSystems(ports, originalSystems), [ports, originalSystems]);
  const { results, total } = useMemo(
    () => applyCatalog(ports, index, state, scope, { originalSystems, testResults, stars }),
    [ports, index, state, scope, originalSystems, testResults, stars],
  );

  const scopePlatforms = SCOPED_PLATFORMS[scope];

  function patch(patch: Partial<CatalogState>) {
    const next = { ...state, ...patch };
    const params = catalogStateToParams(next);
    const href = params.size ? `${pathname}?${params.toString()}` : pathname;
    void router.replace(href, { scroll: false });
  }

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

  const isDefault =
    state.query === "" &&
    state.platform === "all" &&
    state.status === "all" &&
    state.state === "all" &&
    state.technique === "all" &&
    state.system === "all" &&
    state.genre === "all" &&
    state.source === "all" &&
    state.ai === "all" &&
    state.tested === "all" &&
    state.sort === "relevance";

  return (
    <div className="flex w-full flex-col gap-4">
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

      {scope !== "android" && (
        <Fieldset legend={t.catalog.filterPlatform}>
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label={t.catalog.filterPlatform}
            data-testid="catalog-platform-filter"
          >
            <Chip
              active={state.platform === "all"}
              onClick={() => patch({ platform: "all" })}
              label={t.catalog.filterAll}
            />
            {scopePlatforms.map((platform) => (
              <Chip
                key={platform}
                active={state.platform === platform}
                onClick={() => patch({ platform })}
                label={t.platforms[platform]}
              />
            ))}
          </div>
        </Fieldset>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Fieldset legend={t.catalog.filterStatus}>
          <SelectField
            value={state.status}
            onChange={(value) => patch({ status: value as StatusFilter })}
            label={t.catalog.filterStatus}
            options={[
              ["all", t.catalog.filterAll],
              ["stable", t.catalog.statusStable],
              ["beta", t.catalog.statusBeta],
              ["alpha", t.catalog.statusAlpha],
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.filterState}>
          <SelectField
            value={state.state}
            onChange={(value) => patch({ state: value as StateFilter })}
            label={t.catalog.filterState}
            options={[
              ["all", t.catalog.filterAll],
              ["verified", t.catalog.stateVerified],
              ["unverified", t.catalog.stateUnverified],
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.filterTechnique}>
          <SelectField
            value={state.technique}
            onChange={(value) => patch({ technique: value as TechniqueFilter })}
            label={t.catalog.filterTechnique}
            options={[
              ["all", t.catalog.filterAll],
              ["decompilation", t.portTypes.decompilation],
              ["recompilation", t.portTypes.recompilation],
              ["reimplementation", t.portTypes.reimplementation],
              ["source-port", t.portTypes["source-port"]],
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.filterSystem}>
          <SelectField
            value={state.system}
            onChange={(value) => patch({ system: value })}
            label={t.catalog.filterSystem}
            options={[
              ["all", t.catalog.filterAll],
              ...systems.map((system) => [system, system] as [string, string]),
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.filterGenre}>
          <SelectField
            value={state.genre}
            onChange={(value) => patch({ genre: value as GenreFilter })}
            label={t.catalog.filterGenre}
            options={[
              ["all", t.catalog.filterAll],
              ["platformer", t.catalog.genres.platformer],
              ["action-adventure", t.catalog.genres["action-adventure"]],
              ["rpg", t.catalog.genres.rpg],
              ["racing", t.catalog.genres.racing],
              ["strategy", t.catalog.genres.strategy],
              ["shooter", t.catalog.genres.shooter],
              ["fighting", t.catalog.genres.fighting],
              ["sports", t.catalog.genres.sports],
              ["simulation", t.catalog.genres.simulation],
              ["open-world", t.catalog.genres["open-world"]],
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.filterTested}>
          <SelectField
            value={state.tested}
            onChange={(value) => patch({ tested: value as TestedFilter })}
            label={t.catalog.filterTested}
            options={[
              ["all", t.catalog.filterAll],
              ["pass", t.catalog.testedPass],
              ["fail", t.catalog.testedFail],
              ["untested", t.catalog.testedUntested],
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.filterSource}>
          <SelectField
            value={state.source}
            onChange={(value) => patch({ source: value as SourceFilter })}
            label={t.catalog.filterSource}
            options={[
              ["all", t.catalog.filterAll],
              ["open", t.catalog.sourceOpen],
              ["closed", t.catalog.sourceClosed],
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.filterAi} className="sm:col-span-2 lg:col-span-1">
          <SelectField
            value={state.ai}
            onChange={(value) => patch({ ai: value as AiFilter })}
            label={t.catalog.filterAi}
            options={[
              ["all", t.catalog.filterAll],
              ["yes", t.catalog.aiYes],
              ["no", t.catalog.aiNo],
            ]}
          />
        </Fieldset>

        <Fieldset legend={t.catalog.sortLabel} className="sm:col-span-2 lg:col-span-1">
          <SelectField
            value={state.sort}
            onChange={(value) => patch({ sort: value as SortKey })}
            label={t.catalog.sortLabel}
            options={[
              ["relevance", t.catalog.sortRelevance],
              ["title", t.catalog.sortTitle],
              ["title-desc", t.catalog.sortTitleDesc],
              ["newest", t.catalog.sortNewest],
              ["stars", t.catalog.sortStars],
            ]}
          />
        </Fieldset>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm text-muted">
        <p>
          <span className="text-foreground">{total}</span> {t.catalog.of} {ports.length}{" "}
          {t.catalog.labels[total === 1 ? "one" : "other"]}
        </p>
        {!isDefault && (
          <button
            type="button"
            onClick={() => {
              setDraft("");
              patch(defaultCatalogState);
            }}
            className="text-link transition-colors hover:text-link-hover"
          >
            {t.catalog.clearFilters}
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          {!isDefault && (
            <button
              type="button"
              onClick={() => {
                setDraft("");
                patch(defaultCatalogState);
              }}
              className="rounded-full border border-border px-3 py-1.5 text-sm text-link transition-colors duration-150 hover:border-accent-hover hover:text-link-hover"
            >
              {t.catalog.clearFilters}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function Fieldset({
  legend,
  children,
  className,
}: {
  legend: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <fieldset className={cn("min-w-0", className)}>
      <legend className="mb-1.5 text-xs font-medium text-muted">{legend}</legend>
      {children}
    </fieldset>
  );
}

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

function SelectField({
  value,
  onChange,
  label,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  options: [string, string][];
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label={label}
      className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors focus:outline-none focus-visible:outline-none"
    >
      {options.map(([optionValue, optionLabel]) => (
        <option key={optionValue} value={optionValue}>
          {optionLabel}
        </option>
      ))}
    </select>
  );
}
