import { describe, expect, it } from "vitest";

import app from "../src/index";
import type { Env } from "../src/env";

/**
 * DELETE /me must never run for an anonymous caller. These tests exercise the
 * real app (origin check, then requireUser) with a stub env and no session
 * cookie, so the request is rejected before any database access happens.
 */
const env = {
  DB: {} as unknown as D1Database,
  SITE_ORIGIN: "https://openportsgames.com",
  ENVIRONMENT: "production",
} as Env;

describe("DELETE /me", () => {
  it("rejects an unauthenticated request with 401", async () => {
    const res = await app.request(
      "/me",
      {
        method: "DELETE",
        headers: { Origin: "https://openportsgames.com" },
      },
      env,
    );

    expect(res.status).toBe(401);
    await expect(res.json()).resolves.toEqual({ error: "unauthorized" });
  });

  it("rejects a request from a disallowed origin with 403", async () => {
    const res = await app.request(
      "/me",
      { method: "DELETE", headers: { Origin: "https://evil.example" } },
      env,
    );

    expect(res.status).toBe(403);
  });

  it("rejects an unsafe request with a missing origin with 403", async () => {
    const res = await app.request("/me", { method: "DELETE" }, env);

    expect(res.status).toBe(403);
  });
});
