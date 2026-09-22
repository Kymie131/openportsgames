import { portCases } from "@/content/ports";
import { originalSystemById } from "@/content/ports/meta";
import { hardwareProfiles } from "@/content/hardware";
import { testRecords } from "@/content/tests";
import { hardwareSchema, portSchema, testRecordSchema, type HardwareProfile, type Port, type TestRecord } from "./schema";

export const ports: Port[] = portCases.flatMap((raw) => {
  const parsed = portSchema.parse(raw);
  return parsed.status === "takedown" ? [] : [parsed];
});
export const hardware = hardwareProfiles.map((raw) => hardwareSchema.parse(raw));
export const testRecordsValidated: TestRecord[] = testRecords.map((raw) =>
  testRecordSchema.parse(raw),
);

const byId = new Map(ports.map((port) => [port.id, port]));
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

export function getPort(id: string): Port | undefined {
  return byId.get(id);
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