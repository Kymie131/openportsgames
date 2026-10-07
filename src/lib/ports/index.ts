import { portCases } from "@/content/ports";
import { originalSystemById } from "@/content/ports/meta";
import { hardwareProfiles } from "@/content/hardware";
import { testRecords } from "@/content/tests";
import {
  hardwareSchema,
  portSchema,
  testRecordSchema,
  type HardwareProfile,
  type Port,
  type TakedownPort,
  type TestRecord,
} from "./schema";

export const ports: Port[] = portCases.flatMap((raw) => {
  const parsed = portSchema.parse(raw);
  return parsed.status === "takedown" ? [] : [parsed];
});
export const takedownPorts: TakedownPort[] = portCases.flatMap((raw) => {
  const parsed = portSchema.parse(raw);
  return parsed.status === "takedown" ? [parsed] : [];
});
export const hardware = hardwareProfiles.map((raw) => hardwareSchema.parse(raw));
export const testRecordsValidated: TestRecord[] = testRecords.map((raw) =>
  testRecordSchema.parse(raw),
);

const byId = new Map(ports.map((port) => [port.id, port]));
const takedownById = new Map(takedownPorts.map((port) => [port.id, port]));
const testByPort = new Map<string, TestRecord[]>();
for (const test of testRecordsValidated) {
  const list = testByPort.get(test.portId) ?? [];
  list.push(test);
  testByPort.set(test.portId, list);
}

export function originalSystemOf(portId: string): string | undefined {
  return originalSystemById[portId];
}

export function getPorts(): Port[] {
  return [...ports].sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Ports ordered by release date (newest first). Ports without a release date
 * fall to the end, ordered by `verifiedAt` and then by title, so a missing date
 * never scrambles the list.
 */
export function getLatestPorts(limit?: number): Port[] {
  const sorted = [...ports].sort((a, b) => {
    const da = a.release.date ?? "";
    const db = b.release.date ?? "";
    if (da !== db) {
      if (da && db) return db.localeCompare(da);
      return da ? -1 : 1;
    }
    const va = a.verifiedAt ?? "";
    const vb = b.verifiedAt ?? "";
    if (va !== vb) {
      if (va && vb) return vb.localeCompare(va);
      return va ? -1 : 1;
    }
    return a.title.localeCompare(b.title);
  });
  return limit !== undefined ? sorted.slice(0, limit) : sorted;
}

export function getPort(id: string): Port | undefined {
  return byId.get(id);
}

export function getTakedownPort(id: string): TakedownPort | undefined {
  return takedownById.get(id);
}

export function getPortIdSet(): Set<string> {
  return new Set([...byId.keys(), ...takedownById.keys()]);
}

export function getTestedPortIds(): Set<string> {
  return new Set(testByPort.keys());
}

export function getLatestTestForPort(portId: string): TestRecord | undefined {
  const list = getTestsForPort(portId);
  return list.length > 0 ? list[0] : undefined;
}

export function getHardwareProfile(profileId: string): HardwareProfile | undefined {
  return hardware.find((profile) => profile.id === profileId);
}

export function getTestResults(): Record<string, "pass" | "fail"> {
  const results: Record<string, "pass" | "fail"> = {};
  for (const test of testRecordsValidated) {
    results[test.portId] = test.result;
  }
  return results;
}

export function getTestStatuses(): Record<string, "current" | "stale"> {
  const statuses: Record<string, "current" | "stale"> = {};
  for (const test of testRecordsValidated) {
    const port = byId.get(test.portId);
    const current =
      port !== undefined && port.release.version !== null && test.version === port.release.version;
    statuses[test.portId] = current ? "current" : "stale";
  }
  return statuses;
}

export function getTestsForPort(portId: string): TestRecord[] {
  return (testByPort.get(portId) ?? []).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPortCount(): number {
  return ports.length;
}

export function getAndroidPortCount(): number {
  return ports.filter((port) => port.platforms.includes("android")).length;
}

/**
 * Hosts that serve port screenshots and covers, most used first.
 *
 * The catalog hotlinks images from each project's own host, so the first paint
 * pays a DNS + TLS handshake per host. The layout renders `preconnect` hints for
 * the busiest few so those connections are warm before the images load, without
 * flooding the browser with dozens of speculative connections.
 */
export function getImageHosts(limit = 6): string[] {
  const counts = new Map<string, number>();
  const add = (url: string) => {
    try {
      const host = new URL(url).host;
      counts.set(host, (counts.get(host) ?? 0) + 1);
    } catch {
      // ignore malformed URLs; the schema already enforces https
    }
  };
  for (const port of ports) {
    for (const shot of port.screenshots ?? []) add(shot.src);
    if (port.cover) add(port.cover.src);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([host]) => host);
}
