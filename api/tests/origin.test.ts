import { Hono } from "hono";
import { describe, expect, it } from "vitest";

import type { Env } from "../src/env";
import { originCheck } from "../src/middleware/origin";

function makeApp(env: Partial<Env>) {
  const app = new Hono<{ Bindings: Env }>();
  app.use("*", originCheck());
  app.post("/resource", (c) => c.json({ ok: true }));
  app.get("/resource", (c) => c.json({ ok: true }));
  return { app, env: env as Env };
}

describe("originCheck", () => {
  it("allows an unsafe request from an allowlisted origin", async () => {
    const { app, env } = makeApp({
      SITE_ORIGIN: "https://openportsgames.com",
      ENVIRONMENT: "production",
    });
    const res = await app.request(
      "/resource",
      { method: "POST", headers: { Origin: "https://openportsgames.com" } },
      env,
    );
    expect(res.status).toBe(200);
  });

  it("rejects an unsafe request with a missing origin", async () => {
    const { app, env } = makeApp({
      SITE_ORIGIN: "https://openportsgames.com",
      ENVIRONMENT: "production",
    });
    const res = await app.request("/resource", { method: "POST" }, env);
    expect(res.status).toBe(403);
  });

  it("rejects an unsafe request from a disallowed origin", async () => {
    const { app, env } = makeApp({
      SITE_ORIGIN: "https://openportsgames.com",
      ENVIRONMENT: "production",
    });
    const res = await app.request(
      "/resource",
      { method: "POST", headers: { Origin: "https://evil.example" } },
      env,
    );
    expect(res.status).toBe(403);
  });

  it("allows http://localhost:3000 only in dev", async () => {
    const dev = makeApp({
      SITE_ORIGIN: "https://openportsgames.com",
      ENVIRONMENT: "dev",
    });
    const devRes = await dev.app.request(
      "/resource",
      { method: "POST", headers: { Origin: "http://localhost:3000" } },
      dev.env,
    );
    expect(devRes.status).toBe(200);

    const prod = makeApp({
      SITE_ORIGIN: "https://openportsgames.com",
      ENVIRONMENT: "production",
    });
    const prodRes = await prod.app.request(
      "/resource",
      { method: "POST", headers: { Origin: "http://localhost:3000" } },
      prod.env,
    );
    expect(prodRes.status).toBe(403);
  });
});
