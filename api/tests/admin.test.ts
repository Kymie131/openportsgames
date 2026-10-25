import { describe, expect, it } from "vitest";

import app from "../src/index";
import type { Env } from "../src/env";

const env = {
  DB: {} as unknown as D1Database,
  SITE_ORIGIN: "https://openportsgames.com",
  ENVIRONMENT: "production",
} as Env;

const origin = { Origin: "https://openportsgames.com" };

describe("admin moderation routes", () => {
  it("rejects an anonymous report list", async () => {
    const res = await app.request("/admin/reports", { headers: origin }, env);
    expect(res.status).toBe(401);
    await expect(res.json()).resolves.toEqual({ error: "unauthorized" });
  });

  it("rejects an anonymous report dismissal", async () => {
    const res = await app.request(
      "/admin/reports/123e4567-e89b-12d3-a456-426614174000",
      { method: "DELETE", headers: origin },
      env,
    );
    expect(res.status).toBe(401);
  });

  it("rejects an anonymous missing-comment list", async () => {
    const res = await app.request("/admin/missing-comments", { headers: origin }, env);
    expect(res.status).toBe(401);
  });

  it("rejects an anonymous missing-comment moderation", async () => {
    const res = await app.request(
      "/admin/missing-comments/123e4567-e89b-12d3-a456-426614174000",
      {
        method: "PATCH",
        headers: { ...origin, "content-type": "application/json" },
        body: JSON.stringify({ status: "hidden" }),
      },
      env,
    );
    expect(res.status).toBe(401);
  });

  it("rejects moderation from a disallowed origin", async () => {
    const res = await app.request(
      "/admin/reports/123e4567-e89b-12d3-a456-426614174000",
      { method: "DELETE", headers: { Origin: "https://evil.example" } },
      env,
    );
    expect(res.status).toBe(403);
  });
});
