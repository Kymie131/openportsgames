"use client";

import type { Port } from "@/lib/ports/schema";
import type { CatalogScope } from "@/lib/ports/catalog";
import { CatalogClient } from "./catalog-client";
import { useT } from "@/lib/i18n/use-i18n";

export function CatalogPage({
  ports,
  testStatuses,
  testResults,
  originalSystems,
  stars,
  scope,
  page,
  basePath,
}: {
  ports: Port[];
  testStatuses: Record<string, "current" | "stale">;
  testResults: Record<string, "pass" | "fail">;
  originalSystems: Record<string, string[]>;
  stars: Record<string, number>;
  scope: CatalogScope;
  page: number;
  basePath: string;
}) {
  const t = useT();
  const titles: Record<CatalogScope, string> = {
    all: t.catalog.title,
    pc: t.catalog.titlePc,
    android: t.catalog.titleAndroid,
    console: t.catalog.titleConsole,
  };
  const subtitles: Record<CatalogScope, string> = {
    all: t.catalog.subtitle,
    pc: t.catalog.subtitlePc,
    android: t.catalog.subtitleAndroid,
    console: t.catalog.subtitleConsole,
  };
  const title = titles[scope];
  const subtitle = subtitles[scope];

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted">{subtitle}</p>
      </header>
      <CatalogClient
        ports={ports}
        testStatuses={testStatuses}
        testResults={testResults}
        originalSystems={originalSystems}
        stars={stars}
        scope={scope}
        page={page}
        basePath={basePath}
      />
    </div>
  );
}
