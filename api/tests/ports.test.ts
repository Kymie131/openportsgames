import { describe, expect, it } from "vitest";

import portIds from "../src/port-ids.json";
import { isValidPortId } from "../src/lib/ports";

describe("isValidPortId", () => {
  it("accepts an id present in the generated list", () => {
    const known = (portIds as string[])[0];
    expect(known).toBeTruthy();
    expect(isValidPortId(known)).toBe(true);
  });

  it("rejects an unknown id", () => {
    expect(isValidPortId("this-port-does-not-exist")).toBe(false);
  });

  it("rejects an empty id", () => {
    expect(isValidPortId("")).toBe(false);
  });
});
