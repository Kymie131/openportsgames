"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Globe, Layers, Monitor, Search, Smartphone, Star } from "lucide-react";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { assetPath, cn } from "@/lib/utils";

type ProjectType =
  | "decompilation"
  | "static-recomp"
  | "source-port"
  | "engine-remake"
  | "browser-port";

type Project = {
  id: string;
  title: string;
  game: string;
  type: ProjectType;
  targets: Array<"pc" | "android" | "web">;
  original: string;
  url: string;
  repo: string;
  owner: string;
  description: string;
  release: string | null;
  releaseDate: string | null;
  updated: string | null;
  license: string | null;
  stars: number;
  browser: boolean;
};

const PAGE_SIZE = 60;

const TYPE_LABELS: Record<ProjectType, { en: string; es: string }> = {
  decompilation: { en: "Decompilation", es: "Decompilación" },
  "static-recomp": { en: "Recompilation", es: "Recompilación" },
  "source-port": { en: "Source port", es: "Source port" },
  "engine-remake": { en: "Engine remake", es: "Recreación de motor" },
  "browser-port": { en: "Browser port", es: "Port de navegador" },
};

const TARGET_ICON = {
  pc: Monitor,
  android: Smartphone,
  web: Globe,
} as const;

export function ExploreClient() {
  const t = useT();
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [target, setTarget] = useState<"all" | "pc" | "android" | "web">("all");
  const [type, setType] = useState<"all" | ProjectType>("all");
  const [sort, setSort] = useState<"updated" | "stars">("updated");
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    const controller = new AbortController();
    fetch(assetPath("/data/projects.json"), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("request failed");
        return response.json() as Promise<Project[]>;
      })
      .then((data) => setProjects(data))
      .catch((error: unknown) => {
        if ((error as { name?: string }).name !== "AbortError") setFailed(true);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const types = useMemo(() => {
    const counts = new Map<ProjectType, number>();
    for (const project of projects) {
      counts.set(project.type, (counts.get(project.type) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [projects]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const list = projects.filter((project) => {
      if (target !== "all" && !project.targets.includes(target)) return false;
      if (type !== "all" && project.type !== type) return false;
      if (!needle) return true;
      return `${project.title} ${project.game} ${project.owner} ${project.repo}`
        .toLowerCase()
        .includes(needle);
    });
    return list.sort((a, b) => {
      if (sort === "stars") return b.stars - a.stars;
      return String(b.updated ?? "").localeCompare(String(a.updated ?? ""));
    });
  }, [projects, query, target, type, sort]);

  const shown = filtered.slice(0, visible);
  const dateFormat = useMemo(
    () => new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric" }),
    [locale],
  );
  const typeLabel = (value: ProjectType) => TYPE_LABELS[value][locale];

  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {t.explore.eyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.explore.title}
        </h1>
        <p className="text-pretty text-sm leading-6 text-muted sm:text-base">
          {t.explore.subtitle}
        </p>
      </header>

      <div className="space-y-4 rounded-xl border border-border bg-surface p-4">
        <label className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2">
          <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder={t.explore.searchPlaceholder}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
            aria-label={t.explore.searchPlaceholder}
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          {(["all", "pc", "android", "web"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setTarget(key);
                setVisible(PAGE_SIZE);
              }}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                target === key
                  ? "border-accent bg-accent text-accent-contrast"
                  : "border-border text-muted hover:bg-surface-2",
              )}
            >
              {t.explore[key]}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />
          <select
            value={type}
            onChange={(event) => {
              setType(event.target.value as "all" | ProjectType);
              setVisible(PAGE_SIZE);
            }}
            className="rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground"
            aria-label={t.explore.typeAll}
          >
            <option value="all">{t.explore.typeAll}</option>
            {types.map(([value, count]) => (
              <option key={value} value={value}>
                {typeLabel(value)} ({count})
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as "updated" | "stars")}
            className="rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground"
          >
            <option value="updated">{t.explore.sortUpdated}</option>
            <option value="stars">{t.explore.sortStars}</option>
          </select>
          <span className="ml-auto text-xs text-muted">
            {t.explore.results(filtered.length)}
          </span>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-48 animate-pulse rounded-xl border border-border bg-surface" />
          ))}
        </div>
      ) : failed ? (
        <p className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
          {t.explore.empty}
        </p>
      ) : shown.length === 0 ? (
        <p className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
          {t.explore.empty}
        </p>
      ) : (
        <>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-foreground">
                      {project.title}
                    </h2>
                    <p className="truncate text-xs text-muted">{project.owner}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
                    {typeLabel(project.type)}
                  </span>
                </div>

                <p className="line-clamp-3 text-xs leading-5 text-muted">{project.description}</p>

                <div className="mt-auto space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                    {project.targets.map((key) => {
                      const Icon = TARGET_ICON[key];
                      return (
                        <span key={key} className="inline-flex items-center gap-1">
                          <Icon className="size-3" aria-hidden="true" />
                          {t.explore[key]}
                        </span>
                      );
                    })}
                    {project.original && <span>· {project.original}</span>}
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[11px] text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3" aria-hidden="true" />
                      {project.stars.toLocaleString(locale)}
                    </span>
                    {project.updated && (
                      <span>
                        {t.explore.updated} {dateFormat.format(new Date(project.updated))}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                  >
                    {t.explore.openProject}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {visible < filtered.length && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((value) => value + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
              >
                <Layers className="size-4" aria-hidden="true" />
                {t.explore.loadMore}
              </button>
            </div>
          )}
        </>
      )}

      <p className="text-xs leading-5 text-muted">{t.explore.sourceNote}</p>
    </div>
  );
}
