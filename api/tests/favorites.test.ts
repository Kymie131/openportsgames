import { describe, expect, it } from "vitest";

import app from "../src/index";
import type { Env } from "../src/env";

const env = {
  DB: {} as unknown as D1Database,
  SITE_ORIGIN: "https://openportsgames.com",
  ENVIRONMENT: "production",
} as Env;

const origin = { Origin: "https://openportsgames.com" };

describe("favorites routes", () => {
  it("rejects an anonymous favorites list", async () => {
    const res = await app.request("/favorites", { headers: origin }, env);
    expect(res.status).toBe(401);
    await expect(res.json()).resolves.toEqual({ error: "unauthorized" });
  });

  it("returns not favorited for an anonymous per-port check", async () => {
    const res = await app.request("/favorites/1080-snowboarding", { headers: origin }, env);
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ favorited: false });
  });

  it("rejects an anonymous save", async () => {
    const res = await app.request(
      "/favorites/1080-snowboarding",
      { method: "PUT", headers: origin },
      env,
    );
    expect(res.status).toBe(401);
  });

  it("rejects an anonymous removal", async () => {
    const res = await app.request(
      "/favorites/1080-snowboarding",
      { method: "DELETE", headers: origin },
      env,
    );
    expect(res.status).toBe(401);
  });

  it("rejects an invalid port id", async () => {
    const res = await app.request("/favorites/not_a_slug", { headers: origin }, env);
    expect(res.status).toBe(404);
    await expect(res.json()).resolves.toEqual({ error: "not_found" });
  });

  it("rejects writes from a disallowed origin", async () => {
    const res = await app.request(
      "/favorites/1080-snowboarding",
      { method: "PUT", headers: { Origin: "https://evil.example" } },
      env,
    );
    expect(res.status).toBe(403);
  });
});
