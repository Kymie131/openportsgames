"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { Port, PlatformKey } from "@/lib/ports/schema";
import {
  applyCatalog,
  buildIndex,
  defaultCatalogState,
  SCOPED_PLATFORMS,
  type CatalogScope,
  type CatalogState,
  type SortKey,
  type StateFilter,
  type StatusFilter,
} from "@/lib/ports/catalog";
import { PortTile } from "./port-tile";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

function parseState(params: URLSearchParams, scope: CatalogScope): CatalogState {
  const scopePlatforms = SCOPED_PLATFORMS[scope];
  const platform = params.get("platform") ?? "";
  const status = params.get("status");
  const state = params.get("state");
  const sort = params.get("sort");
  return {
    query: params.get("q") ?? "",
    platform:
      platform === "all" || scopePlatforms.includes(platform as PlatformKey)
        ? (platform as "all" | PlatformKey)
        : "all",
    status: isStatus(status) ? status : "all",
    state: isState(state) ? state : "all",
    sort: isSort(sort) ? sort : "relevance",
  };
}

function isStatus(value: string | null): value is StatusFilter {
  return value === "stable" || value === "beta" || value === "alpha" || value === "all";
}
function isState(value: string | null): value is StateFilter {
  return value === "verified" || value === "unverified" || value === "all";
}
function isSort(value: string | null): value is SortKey {
  return value === "relevance" || value === "title" || value === "newest";
}

function toParams(state: CatalogState): URLSearchParams {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.platform !== "all") params.set("platform", state.platform);
  if (state.status !== "all") params.set("status", state.status);
  if (state.state !== "all") params.set("state", state.state);
  if (state.sort !== "relevance") params.set("sort", state.sort);
  return params;
}

export function CatalogClient({
  ports,
  testStatuses,
  scope,
}: {
  ports: Port[];
  testStatuses: Record<string, "current" | "stale">;
  scope: CatalogScope;
}) {
  const t = useT();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const state = parseState(searchParams, scope);
  const index = useMemo(() => buildIndex(ports), [ports]);
  const { results, total } = useMemo(
    () => applyCatalog(ports, index, state, scope),
    [ports, index, state, scope],
  );

  const scopePlatforms = SCOPED_PLATFORMS[scope];
  const isDefault =
    !state.query &&
    state.platform === "all" &&
    state.status === "all" &&
    state.state === "all" &&
    state.sort === "relevance";

  function update(next: CatalogState) {
    const params = toParams(next);
    const href = params.size ? `${pathname}?${params}` : pathname;
    void router.replace(href, { scroll: false });
  }

  function patch(patch: Partial<CatalogState>) {
    update({ ...state, ...patch });
  }

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
          value={state.query}
          onChange={(event) => patch({ query: event.target.value, sort: defaultCatalogState.sort })}
          placeholder={t.catalog.searchPlaceholder}
          aria-label={t.catalog.searchPlaceholder}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
        />
        {state.query && (
          <button
            type="button"
            onClick={() => patch({ query: "" })}
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

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Fieldset legend={t.catalog.filterStatus} className="flex-1">
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

        <Fieldset legend={t.catalog.filterState} className="flex-1">
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

        <Fieldset legend={t.catalog.sortLabel} className="flex-1">
          <SelectField
            value={state.sort}
            onChange={(value) => patch({ sort: value as SortKey })}
            label={t.catalog.sortLabel}
            options={[
              ["relevance", t.catalog.sortRelevance],
              ["title", t.catalog.sortTitle],
              ["newest", t.catalog.sortNewest],
            ]}
          />
        </Fieldset>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm text-muted">
        <p>
          <span className="text-foreground">{total}</span> {t.catalog.of}{" "}
          {ports.length} {t.catalog.labels[total === 1 ? "one" : "other"]}
        </p>
        {!isDefault && (
          <button
            type="button"
            onClick={() => update({ ...defaultCatalogState, platform: "all" })}
            className="text-link transition-colors hover:text-link-hover"
          >
            {t.catalog.clearFilters}
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((port) => (
            <li key={port.id}>
              <PortTile port={port} testStatus={testStatuses[port.id]} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-lg border border-border bg-surface p-6 text-center text-sm text-muted">
          {t.catalog.empty}
        </p>
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

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
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