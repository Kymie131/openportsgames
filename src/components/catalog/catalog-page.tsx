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
}: {
  ports: Port[];
  testStatuses: Record<string, "current" | "stale">;
  testResults: Record<string, "pass" | "fail">;
  originalSystems: Record<string, string>;
  stars: Record<string, number>;
  scope: CatalogScope;
}) {
  const t = useT();
  const title = scope === "all" ? t.catalog.title : t.platforms[scope];
  const subtitle =
    scope === "all"
      ? t.catalog.subtitle
      : scope === "pc"
        ? t.catalog.subtitlePc
        : t.catalog.subtitleAndroid;

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
      />
    </div>
  );
}
