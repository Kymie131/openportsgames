import type { MiddlewareHandler } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { sql } from "drizzle-orm";

import * as schema from "../db/schema";
import type { SessionEnv } from "./session";

/**
 * Fixed-window rate limiter for write endpoints.
 *
 * The Workers Rate Limiting binding only supports 10s and 60s periods, so it
 * cannot express a 10 minute window. We use a D1-backed fixed window instead:
 * each user gets a counter row keyed by user id that resets every window.
 */
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
export const RATE_LIMIT_MAX_WRITES = 30;

export function rateLimit(): MiddlewareHandler<SessionEnv> {
  return async (c, next) => {
    const user = c.get("user");
    if (!user) return c.json({ error: "unauthorized" }, 401);

    const now = Date.now();
    const windowStart = Math.floor(now / RATE_LIMIT_WINDOW_MS) * RATE_LIMIT_WINDOW_MS;
    const db = drizzle(c.env.DB, { schema });

    const rows = await db
      .insert(schema.rateLimit)
      .values({ key: user.id, windowStart, count: 1 })
      .onConflictDoUpdate({
        target: schema.rateLimit.key,
        set: {
          count: sql`case when ${schema.rateLimit.windowStart} = ${windowStart} then ${schema.rateLimit.count} + 1 else 1 end`,
          windowStart: sql`${windowStart}`,
        },
      })
      .returning({ count: schema.rateLimit.count });

    const count = rows[0]?.count ?? 0;
    if (count > RATE_LIMIT_MAX_WRITES) {
      return c.json({ error: "rate_limited" }, 429);
    }

    await next();
  };
}
