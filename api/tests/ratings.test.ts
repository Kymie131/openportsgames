import { describe, expect, it } from "vitest";

import {
  portIdSchema,
  ratingBodySchema,
  roundToOneDecimal,
  heartsSchema,
} from "../src/lib/ratings";

describe("portIdSchema", () => {
  it("accepts kebab-case slugs", () => {
    expect(portIdSchema.safeParse("1080-snowboarding").success).toBe(true);
    expect(portIdSchema.safeParse("1oom").success).toBe(true);
    expect(portIdSchema.safeParse("ace-combat-3-electrosphere-recomp").success).toBe(true);
  });

  it("rejects non-kebab input", () => {
    for (const bad of ["", "Bad", "has space", "snake_case", "trailing-", "-leading", "double--dash"]) {
      expect(portIdSchema.safeParse(bad).success).toBe(false);
    }
  });

  it("rejects ids longer than 80 characters", () => {
    expect(portIdSchema.safeParse("a".repeat(81)).success).toBe(false);
  });
});

describe("heartsSchema", () => {
  it("accepts integers from 1 to 5", () => {
    for (const n of [1, 2, 3, 4, 5]) {
      expect(heartsSchema.safeParse(n).success).toBe(true);
    }
  });

  it("rejects out-of-range and non-integer values", () => {
    for (const bad of [0, 6, -1, 2.5, "3", null, undefined]) {
      expect(heartsSchema.safeParse(bad).success).toBe(false);
    }
  });
});

describe("ratingBodySchema", () => {
  it("accepts a hearts object", () => {
    expect(ratingBodySchema.safeParse({ hearts: 4 })).toEqual({
      success: true,
      data: { hearts: 4 },
    });
  });

  it("rejects malformed bodies", () => {
    expect(ratingBodySchema.safeParse({}).success).toBe(false);
    expect(ratingBodySchema.safeParse({ hearts: 9 }).success).toBe(false);
    expect(ratingBodySchema.safeParse(null).success).toBe(false);
  });
});

describe("roundToOneDecimal", () => {
  it("rounds to a single decimal place", () => {
    expect(roundToOneDecimal(4.26)).toBe(4.3);
    expect(roundToOneDecimal(4.24)).toBe(4.2);
    expect(roundToOneDecimal(4)).toBe(4);
    expect(roundToOneDecimal(3.333)).toBe(3.3);
  });

  it("coerces string numbers", () => {
    expect(roundToOneDecimal("3.666")).toBe(3.7);
  });

  it("returns null for no average or non-numeric values", () => {
    expect(roundToOneDecimal(null)).toBeNull();
    expect(roundToOneDecimal(undefined)).toBeNull();
    expect(roundToOneDecimal(Number.NaN)).toBeNull();
    expect(roundToOneDecimal("not-a-number")).toBeNull();
  });
});
