import type { Context, MiddlewareHandler } from "hono";

import { createAuth } from "../auth";
import type { Env } from "../env";

export type SessionUser = {
  id: string;
  name: string;
  image: string | null;
  role: string;
};

export type SessionVariables = {
  user: SessionUser;
};

export type SessionEnv = {
  Bindings: Env;
  Variables: SessionVariables;
};

export type PublicUser = {
  id: string;
  name: string;
  image: string | null;
};

/** Reduce a user record to the fields that are safe to expose publicly. */
export function toPublicUser(user: {
  id: string;
  name: string;
  image?: string | null;
}): PublicUser {
  return {
    id: user.id,
    name: user.name,
    image: user.image ?? null,
  };
}

async function resolveUser(c: Context<SessionEnv>): Promise<SessionUser | null> {
  const existing = c.get("user");
  if (existing) return existing;

  const auth = createAuth(c.env);
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  const user = session?.user;
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    image: user.image ?? null,
    role: user.role ?? "user",
  };
}

/** Attach `c.var.user` when a session exists; never rejects. */
export function optionalUser(): MiddlewareHandler<SessionEnv> {
  return async (c, next) => {
    const user = await resolveUser(c);
    if (user) c.set("user", user);
    await next();
  };
}

/** Require an authenticated session, setting `c.var.user`. */
export function requireUser(): MiddlewareHandler<SessionEnv> {
  return async (c, next) => {
    const user = await resolveUser(c);
    if (!user) return c.json({ error: "unauthorized" }, 401);
    c.set("user", user);
    await next();
  };
}

/** Require an authenticated `admin` session, setting `c.var.user`. */
export function requireAdmin(): MiddlewareHandler<SessionEnv> {
  return async (c, next) => {
    const user = await resolveUser(c);
    if (!user) return c.json({ error: "unauthorized" }, 401);
    if (user.role !== "admin") return c.json({ error: "forbidden" }, 403);
    c.set("user", user);
    await next();
  };
}
