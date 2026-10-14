import type { MiddlewareHandler } from "hono";

import type { Env } from "../env";

const UNSAFE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

export function allowedOrigins(env: Env): string[] {
  const origins = [env.SITE_ORIGIN];
  if (env.ENVIRONMENT === "dev") {
    origins.push("http://localhost:3000");
  }
  return origins;
}

export function originCheck(): MiddlewareHandler<{ Bindings: Env }> {
  return async (c, next) => {
    if (UNSAFE_METHODS.has(c.req.method)) {
      const origin = c.req.header("Origin");
      if (!origin || !allowedOrigins(c.env).includes(origin)) {
        return c.json({ error: "forbidden" }, 403);
      }
    }
    await next();
  };
}
