import { Hono } from "hono";
import { describe, expect, it } from "vitest";

import {
  requireAdmin,
  toPublicUser,
  type SessionEnv,
  type SessionUser,
} from "../src/middleware/session";

function appWithUser(user: SessionUser) {
  const app = new Hono<SessionEnv>();
  app.use(async (c, next) => {
    c.set("user", user);
    await next();
  });
  app.get("/admin", requireAdmin(), (c) => c.json({ ok: true }));
  return app;
}

describe("toPublicUser", () => {
  it("only exposes id, name and image", () => {
    const leaky = {
      id: "user_1",
      name: "Alice",
      image: null,
      email: "alice@example.com",
      emailVerified: true,
      role: "admin",
      createdAt: new Date(),
    };

    const result = toPublicUser(leaky);

    expect(result).toEqual({ id: "user_1", name: "Alice", image: null });
    expect(Object.keys(result).sort()).toEqual(["id", "image", "name"]);
    expect(JSON.stringify(result)).not.toContain("alice@example.com");
  });

  it("normalizes a missing image to null", () => {
    expect(toPublicUser({ id: "u", name: "Bob" })).toEqual({
      id: "u",
      name: "Bob",
      image: null,
    });
  });
});

describe("requireAdmin", () => {
  it("rejects a non-admin session with 403", async () => {
    const app = appWithUser({
      id: "u1",
      name: "User",
      image: null,
      role: "user",
    });

    const res = await app.request("/admin");

    expect(res.status).toBe(403);
    await expect(res.json()).resolves.toEqual({ error: "forbidden" });
  });

  it("allows an admin session", async () => {
    const app = appWithUser({
      id: "u2",
      name: "Admin",
      image: null,
      role: "admin",
    });

    const res = await app.request("/admin");

    expect(res.status).toBe(200);
  });
});
