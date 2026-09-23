import { describe, expect, it } from "vitest";
import { hardware, ports, testRecordsValidated } from "@/lib/ports";
import { isBeforeOrOn, todayIso } from "@/lib/dates";

describe("hardware profiles", () => {
  it("has unique ids covering both pc and android", () => {
    const ids = hardware.map((profile) => profile.id);
    expect(new Set(ids).size).toBe(ids.length);
    const kinds = new Set(hardware.map((profile) => profile.kind));
    expect(kinds.has("pc")).toBe(true);
    expect(kinds.has("android")).toBe(true);
  });

  it("references valid GitHub testers", () => {
    for (const profile of hardware) {
      expect(profile.tester, profile.id).toMatch(/^[a-zA-Z0-9-]+$/);
    }
  });

  it("never dates from the future", () => {
    const today = todayIso();
    for (const profile of hardware) {
      expect(isBeforeOrOn(profile.updatedAt, today), profile.id).toBe(true);
    }
  });
});

describe("test records", () => {
  it("only references known ports, hardware and testers", () => {
    const portIds = new Set(ports.map((port) => port.id));
    const hardwareById = new Map(hardware.map((profile) => [profile.id, profile]));
    for (const test of testRecordsValidated) {
      expect(portIds.has(test.portId), test.id).toBe(true);
      const profile = hardwareById.get(test.hardwareId);
      expect(profile, test.id).toBeDefined();
      expect(profile?.tester, test.id).toBe(test.testerId);
    }
  });

  it("does not record future test dates", () => {
    const today = todayIso();
    for (const test of testRecordsValidated) {
      expect(isBeforeOrOn(test.date, today), test.id).toBe(true);
    }
  });
});
