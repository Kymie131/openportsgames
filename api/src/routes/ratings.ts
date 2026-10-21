import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { and, eq, sql } from "drizzle-orm";

import * as schema from "../db/schema";
import { isValidPortId } from "../lib/ports";
import { portIdSchema, ratingBodySchema, roundToOneDecimal } from "../lib/ratings";
import { optionalUser, requireUser, type SessionEnv } from "../middleware/session";
import { rateLimit } from "../middleware/ratelimit";

export const ratings = new Hono<SessionEnv>();

type RatingsEnv = SessionEnv;

function resolvePortId(raw: string): string | null {
  const parsed = portIdSchema.safeParse(raw);
  if (!parsed.success || !isValidPortId(parsed.data)) return null;
  return parsed.data;
}

/** Aggregate the public stats for a port plus the caller's own rating. */
async function readStats(
  c: { env: RatingsEnv["Bindings"] },
  portId: string,
  userId: string | null,
): Promise<{ average: number | null; count: number; mine: number | null }> {
  const db = drizzle(c.env.DB, { schema });

  const rows = await db
    .select({
      count: sql<number>`count(*)`,
      average: sql<number | null>`avg(${schema.rating.stars})`,
      mine: sql<number | null>`max(case when ${schema.rating.userId} = ${userId ?? ""} then ${schema.rating.stars} end)`,
    })
    .from(schema.rating)
    .where(eq(schema.rating.portId, portId));

  const row = rows[0];
  return {
    average: roundToOneDecimal(row?.average ?? null),
    count: Number(row?.count ?? 0),
    mine: row?.mine ?? null,
  };
}

ratings.get("/:portId", optionalUser(), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  const user = c.get("user");
  return c.json(await readStats(c, portId, user ? user.id : null));
});

ratings.put("/:portId", requireUser(), rateLimit(), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "invalid_body" }, 400);
  }

  const parsed = ratingBodySchema.safeParse(body);
  if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

  const user = c.get("user");
  const now = new Date();
  const db = drizzle(c.env.DB, { schema });

  await db
    .insert(schema.rating)
    .values({
      userId: user.id,
      portId,
      stars: parsed.data.hearts,
      createdAt: now,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: [schema.rating.userId, schema.rating.portId],
      set: { stars: parsed.data.hearts, updatedAt: now },
    });

  return c.json(await readStats(c, portId, user.id));
});

ratings.delete("/:portId", requireUser(), rateLimit(), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });

  await db
    .delete(schema.rating)
    .where(and(eq(schema.rating.userId, user.id), eq(schema.rating.portId, portId)));

  return c.json(await readStats(c, portId, user.id));
});


