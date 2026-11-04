import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { and, desc, eq } from "drizzle-orm";

import * as schema from "../db/schema";
import { isValidPortId } from "../lib/ports";
import { portIdSchema } from "../lib/ratings";
import { optionalUser, requireUser, type SessionEnv } from "../middleware/session";
import { rateLimit } from "../middleware/ratelimit";

export const favorites = new Hono<SessionEnv>();

function resolvePortId(raw: string): string | null {
  const parsed = portIdSchema.safeParse(raw);
  if (!parsed.success || !isValidPortId(parsed.data)) return null;
  return parsed.data;
}

favorites.get("/", requireUser(), async (c) => {
  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });

  const rows = await db
    .select({
      portId: schema.favorite.portId,
      createdAt: schema.favorite.createdAt,
    })
    .from(schema.favorite)
    .where(eq(schema.favorite.userId, user.id))
    .orderBy(desc(schema.favorite.createdAt));

  return c.json({
    items: rows.map((row) => ({
      portId: row.portId,
      createdAt: row.createdAt.toISOString(),
    })),
  });
});

favorites.get("/:portId", optionalUser(), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  const user = c.get("user");
  if (!user) return c.json({ favorited: false });

  const db = drizzle(c.env.DB, { schema });
  const rows = await db
    .select({ portId: schema.favorite.portId })
    .from(schema.favorite)
    .where(
      and(eq(schema.favorite.userId, user.id), eq(schema.favorite.portId, portId)),
    )
    .limit(1);

  return c.json({ favorited: rows.length > 0 });
});

favorites.put("/:portId", requireUser(), rateLimit({ scope: "favorites" }), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });

  await db
    .insert(schema.favorite)
    .values({ userId: user.id, portId, createdAt: new Date() })
    .onConflictDoNothing();

  return c.json({ favorited: true });
});

favorites.delete("/:portId", requireUser(), rateLimit({ scope: "favorites" }), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });

  await db
    .delete(schema.favorite)
    .where(
      and(eq(schema.favorite.userId, user.id), eq(schema.favorite.portId, portId)),
    );

  return c.json({ favorited: false });
});
