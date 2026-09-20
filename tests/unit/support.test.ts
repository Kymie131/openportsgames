import { describe, expect, it } from "vitest";
import { buildSupportUrl } from "@/lib/support";

describe("support paypal url", () => {
  it("returns empty when unset or blank", () => {
    expect(buildSupportUrl("")).toBe("");
    expect(buildSupportUrl("   ")).toBe("");
  });

  it("normalizes a valid https url", () => {
    expect(buildSupportUrl("https://paypal.me/example")).toBe("https://paypal.me/example");
  });

  it("rejects non-absolute and non-https urls", () => {
    expect(() => buildSupportUrl("paypal.me/example")).toThrow();
    expect(() => buildSupportUrl("http://paypal.me/example")).toThrow();
    expect(() => buildSupportUrl("not-a-url")).toThrow();
  });
});