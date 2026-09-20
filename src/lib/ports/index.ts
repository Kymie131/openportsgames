import { portCases } from "@/content/ports";
import { hardwareProfiles } from "@/content/hardware";
import { testRecords } from "@/content/tests";
import { hardwareSchema, portSchema, testRecordSchema, type Port, type TestRecord } from "./schema";

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

export function getPorts(): Port[] {
  return [...ports].sort((a, b) => a.title.localeCompare(b.title));
}

export function getPort(id: string): Port | undefined {
  return byId.get(id);
}

export function getTestedPortIds(): Set<string> {
  return new Set(testByPort.keys());
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