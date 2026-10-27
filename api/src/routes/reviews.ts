import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { and, eq, isNotNull, sql } from "drizzle-orm";

import * as schema from "../db/schema";
import { isValidPortId } from "../lib/ports";
import { portIdSchema } from "../lib/ratings";
import { optionalUser, type SessionEnv } from "../middleware/session";

export const reviews = new Hono<SessionEnv>();

function resolvePortId(raw: string): string | null {
  const parsed = portIdSchema.safeParse(raw);
  if (!parsed.success || !isValidPortId(parsed.data)) return null;
  return parsed.data;
}

reviews.get("/:portId", optionalUser(), async (c) => {
  const portId = resolvePortId(c.req.param("portId"));
  if (!portId) return c.json({ error: "not_found" }, 404);

  const user = c.get("user");
  const db = drizzle(c.env.DB, { schema });

  const rows = await db
    .select({
      positive: sql<number>`sum(case when ${schema.comment.sentiment} = 'positive' then 1 else 0 end)`,
      negative: sql<number>`sum(case when ${schema.comment.sentiment} = 'negative' then 1 else 0 end)`,
      mine: sql<string | null>`max(case when ${schema.comment.userId} = ${user?.id ?? ""} then ${schema.comment.sentiment} end)`,
    })
    .from(schema.comment)
    .where(
      and(
        eq(schema.comment.portId, portId),
        eq(schema.comment.status, "visible"),
        isNotNull(schema.comment.sentiment),
      ),
    );

  const row = rows[0];
  const positive = Number(row?.positive ?? 0);
  const negative = Number(row?.negative ?? 0);
  const total = positive + negative;

  return c.json({
    positive,
    negative,
    total,
    percent: total > 0 ? Math.round((positive / total) * 100) : null,
    mine: row?.mine ?? null,
  });
});
