import type { Port } from "@/lib/ports/schema";
import guides from "./guides.json";
import releases from "./releases.json";
import videos from "./videos.json";

/**
 * Fields that can be layered on top of a port content file without editing the
 * file itself. Hand-written data lives in `guides.json` / `videos.json`; the
 * release history in `releases.json` is refreshed by
 * `scripts/fetch-port-extras.mjs`.
 */
export type PortExtras = Partial<
  Pick<Port, "releases" | "videos" | "updatedAt" | "screenshots">
> & {
  installGuide?: Partial<NonNullable<Port["installGuide"]>>;
};

type ExtrasMap = Record<string, PortExtras>;
type InstallGuide = NonNullable<Port["installGuide"]>;

function mergeGuide(
  base: Partial<InstallGuide>,
  extra: Partial<InstallGuide>,
): Partial<InstallGuide> {
  return {
    ...base,
    ...extra,
    steps: extra.steps ?? base.steps,
    stepsEs: extra.stepsEs ?? base.stepsEs,
    controls: [...(base.controls ?? []), ...(extra.controls ?? [])],
    knownIssues: [...(base.knownIssues ?? []), ...(extra.knownIssues ?? [])],
    knownIssuesEs: [...(base.knownIssuesEs ?? []), ...(extra.knownIssuesEs ?? [])],
  };
}

function mergeEntry(base: PortExtras, extra: PortExtras): PortExtras {
  const guide =
    base.installGuide && extra.installGuide
      ? mergeGuide(base.installGuide, extra.installGuide)
      : (extra.installGuide ?? base.installGuide);

  return {
    ...base,
    ...extra,
    installGuide: guide,
    screenshots:
      base.screenshots || extra.screenshots
        ? [...(base.screenshots ?? []), ...(extra.screenshots ?? [])]
        : undefined,
  };
}

/** Merge the generated release history with the curated guides and videos. */
function buildExtras(): ExtrasMap {
  const merged: ExtrasMap = {};
  const sources: ExtrasMap[] = [
    releases as ExtrasMap,
    guides as ExtrasMap,
    videos as ExtrasMap,
  ];

  for (const source of sources) {
    for (const [id, extra] of Object.entries(source)) {
      merged[id] = merged[id] ? mergeEntry(merged[id], extra) : extra;
    }
  }

  return merged;
}

export const portExtras: ExtrasMap = buildExtras();

/** Applies extras to a raw content entry, letting the content file win. */
export function applyPortExtras(raw: unknown): unknown {
  if (typeof raw !== "object" || raw === null) return raw;

  const entry = raw as { id?: unknown; status?: unknown };
  if (typeof entry.id !== "string" || entry.status === "takedown") return raw;

  const extra = portExtras[entry.id];
  if (!extra) return raw;

  const base = raw as Record<string, unknown>;
  const baseGuide = base.installGuide as InstallGuide | undefined;
  const mergedGuide =
    extra.installGuide || baseGuide ? { ...extra.installGuide, ...baseGuide } : undefined;
  // The schema requires at least one step, so extras alone cannot create a guide.
  const guide = mergedGuide?.steps?.length ? (mergedGuide as InstallGuide) : undefined;
  const screenshots = [
    ...(Array.isArray(base.screenshots) ? base.screenshots : []),
    ...(extra.screenshots ?? []),
  ].filter(
    (shot, index, list) =>
      list.findIndex(
        (candidate) =>
          typeof candidate === "object" &&
          candidate !== null &&
          (candidate as { src?: string }).src === (shot as { src?: string }).src,
      ) === index,
  );

  return {
    ...raw,
    ...(guide ? { installGuide: guide } : {}),
    ...(extra.releases ? { releases: extra.releases } : {}),
    ...(extra.videos ? { videos: extra.videos } : {}),
    ...(extra.updatedAt ? { updatedAt: extra.updatedAt } : {}),
    ...(screenshots.length > 0 ? { screenshots: screenshots.slice(0, 12) } : {}),
  };
}
